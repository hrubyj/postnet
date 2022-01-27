package cz.hrubyj.service;


import cz.hrubyj.domain.User;
import cz.hrubyj.repository.FriendshipRepository;
import cz.hrubyj.repository.UserRepository;
import cz.hrubyj.vo.enums.Status;
import cz.hrubyj.vo.UserStatusVO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.Message;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.AbstractSubProtocolEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * Správce online uživatelů
 */
@Component
@RequiredArgsConstructor
public class UserManager {

    private final SimpMessagingTemplate simpleMessagingTemplate;

    private final FriendshipRepository friendshipRepository;

    private final UserRepository userRepository;

    private final Map<String, String> onlineUserLogins = new ConcurrentHashMap<>();

    @EventListener
    public void handleNewUserConnected(final SessionSubscribeEvent event) {
        if (isFriendStatusSubscriptionEvent(event)) {
            addNewOnlineUser(event);
        }
    }

    @EventListener
    public void handleUserDisconnected(final SessionDisconnectEvent event) {
        final String username = getUsernameFromSessionEvent(event);
        if (username != null) {
            distributeUserDisconnectedMessage(username);
        }
    }

    private void addNewOnlineUser(final SessionSubscribeEvent event) {
        final String username = getUsernameFromSessionEvent(event);
        if (username != null) {
            final String name = getNameByLogin(username);
            onlineUserLogins.put(username, name);
            distributeOnlineFriendsStatus(username);
        }
    }

    private boolean isFriendStatusSubscriptionEvent(final SessionSubscribeEvent event) {
        final String destination = getHeader(event.getMessage(), "simpDestination", String.class);
        return destination != null && destination.equals("/user/queue/friend-status");
    }

    private String getNameByLogin(String username) {
        User user = userRepository.findUserByEmail(username);
        if (user == null) {
            throw new IllegalStateException("Uživatel " + username + " nebyl nalezen.");
        }
        return user.getName();
    }

    public void distributeOnlineFriendsStatus(final String username) {
        final List<User> onlineFriends = getOnlineFriends(username);
        final String name = onlineUserLogins.get(username);
        sendUserStatusChangeToFriends(new UserStatusVO(username, name, Status.ONLINE), onlineFriends);
        final List<UserStatusVO> statusList = createOnlineFriendList(onlineFriends);
        sendUserStatusChangeToUsers(statusList, List.of(username));
    }

    private List<UserStatusVO> createOnlineFriendList(final List<User> onlineFriends) {
        return onlineFriends.stream()
                .map(user -> new UserStatusVO(user.getEmail(), user.getName(), Status.ONLINE))
                .collect(Collectors.toList());
    }

    private String getUsernameFromSessionEvent(final AbstractSubProtocolEvent event) {
        final Principal userData = event.getUser();
        if (userData == null) {
            return null;
        }

        return userData.getName();
    }

    private void distributeUserDisconnectedMessage(final String username) {
        final String name = onlineUserLogins.getOrDefault(username, null);
        if (name != null) {
            distributeStatusChange(new UserStatusVO(username, name, Status.OFFLINE));
            onlineUserLogins.remove(username);
        }
    }

    private void distributeStatusChange(final UserStatusVO status) {
        final List<User> onlineFriends = getOnlineFriends(status.getEmail());
        sendUserStatusChangeToFriends(status, onlineFriends);
    }

    private void sendUserStatusChangeToFriends(final UserStatusVO status, final List<User> onlineFriends) {
        final List<String> usernames = onlineFriends.stream()
                .map(User::getEmail)
                .collect(Collectors.toList());
        sendUserStatusChangeToUsers(List.of(status), usernames);
    }

    private void sendUserStatusChangeToUsers(final List<UserStatusVO> statusList,
                                             final List<String> usernames) {
        for (final String username : usernames) {
            simpleMessagingTemplate.convertAndSendToUser(username, "/queue/friend-status", statusList);
        }
    }

    private List<User> getOnlineFriends(final String username) {
        final Set<String> onlineUsers = onlineUserLogins.keySet();
        return friendshipRepository.findUserFriendsByEmailIn(username, onlineUsers);
    }

    public static <T> T getHeader(final Message<?> message, final String headerName, final Class<T> type) {
        if (message == null || headerName == null) {
            return null;
        }

        return message.getHeaders().get(headerName, type);
    }
}
