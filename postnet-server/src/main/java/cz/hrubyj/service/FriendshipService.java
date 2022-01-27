package cz.hrubyj.service;

import cz.hrubyj.domain.Friendship;
import cz.hrubyj.domain.User;
import cz.hrubyj.postnet.api.vo.UserVO;
import cz.hrubyj.repository.FriendshipRepository;
import cz.hrubyj.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.List;
import java.util.Optional;

/**
 * Třída obsluhující operace s přátelstvími.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class FriendshipService {

    private final UserRepository userRepository;

    private final FriendshipRepository friendshipRepository;

    private final VOFactory voFactory;

    /**
     * Vytvoří žádost o přátelství nebo blokaci.
     * @param userEmail email autora operace
     * @param friendId id druhého uživatele
     * @param block příznak, jedná-li se o blokaci
     */
    public void createNewFriendship(String userEmail, Integer friendId, boolean block) {
        if (friendId == null) {
            throw new ValidationException("Id uživatele nesmí být prázdné");
        }
        Optional<User> opt = userRepository.findById(friendId);
        if (opt.isEmpty()) {
            throw new ValidationException("Uživatel s id " + friendId + " neexistuje");
        }
        User user = userRepository.findUserByEmail(userEmail);
        User friend = opt.get();

        if (user.getEmail() == friend.getEmail()) {
            throw new ValidationException("Nelze navázat přátelství sám se sebou");
        }

        if (friendshipRepository.findFriendshipByUser1AndUser2(user, friend) != null ||
                friendshipRepository.findFriendshipByUser1AndUser2(friend, user) != null) {
            throw new ValidationException("Přátelství mezi "+ user.getName() + " a " + friend.getName() + " již existuje");
        }
        Friendship friendship = new Friendship();
        friendship.setType(block ? Friendship.Type.BLOCK : Friendship.Type.REQUESTED);
        friendship.setUser1(user);
        friendship.setUser2(friend);
        friendshipRepository.save(friendship);
    }

    /**
     * Hledá uživatele, kteří poslali uživateli žádost o přátelství.
     * @param userEmail email uživatele
     * @return seznam uživatelů
     */
    public List<UserVO> getRequestedUsers(String userEmail) {
        List<User> requestedUsers = friendshipRepository.findRequestedUsers(userEmail);
        return voFactory.mapUserToUserVO(requestedUsers);
    }

    public void confirmFriendship(String userEmail, Integer claimantId) {
        if (claimantId == null) {
            throw new ValidationException("Id uživatele nesmí být prázdné");
        }
        Optional<User> opt = userRepository.findById(claimantId);
        if (opt.isEmpty()) {
            throw new ValidationException("Uživatel s id " + claimantId + " neexistuje");
        }
        User user = userRepository.findUserByEmail(userEmail);
        User claimant = opt.get();
        Friendship friendship = friendshipRepository.findFriendshipByUser1AndUser2(claimant, user);
        if (friendship == null) {
            throw new ValidationException("Žádost mezi "+ userEmail + " a uživatelem s id " + claimantId + " neexistuje");
        }
        friendship.setType(Friendship.Type.CONFIRMED);
        friendshipRepository.save(friendship);
    }

    /**
     * Odstraní žádost/přátelství/blokaci mezi dvěma uživateli.
     * @param userEmail email jednoho uživatele
     * @param friendId id druhého uživatele
     */
    public void deleteFriendship(String userEmail, Integer friendId) {
        if (friendId == null) {
            throw new ValidationException("Id uživatele nesmí být prázdné");
        }
        Optional<User> opt = userRepository.findById(friendId);
        if (opt.isEmpty()) {
            throw new ValidationException("Uživatel s id " + friendId + " neexistuje");
        }
        User user = userRepository.findUserByEmail(userEmail);
        User friend = opt.get();
        Friendship friendship = friendshipRepository.findFriendshipByUser1AndUser2(user, friend);
        if (friendship == null) {
            friendship = friendshipRepository.findFriendshipByUser1AndUser2(friend, user);
            if (friendship == null) {
                throw new ValidationException("Přátelství/blokace mezi Vámi a uživatelem s id " + friendId + " neexistuje");
            }
        }
        friendshipRepository.delete(friendship);
    }
}
