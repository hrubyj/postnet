package cz.hrubyj.service;

import cz.hrubyj.domain.Post;
import cz.hrubyj.domain.User;
import cz.hrubyj.postnet.api.vo.PostVO;
import cz.hrubyj.repository.FriendshipRepository;
import cz.hrubyj.repository.PostRepository;
import cz.hrubyj.repository.UserRepository;
import cz.hrubyj.repository.UserRoleRepository;
import io.jsonwebtoken.lang.Assert;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Třídá obsluhující operace s příspěvky.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {

    private final UserRepository userRepository;

    private final UserRoleRepository userRoleRepository;

    private final PostRepository postRepository;

    private final FriendshipRepository friendshipRepository;

    private final VOFactory voFactory;

    private final int LIMIT = 10;

    /**
     * Vytváří nové příspěvky.
     * @param userEmail autor příspěvku
     * @param content text příspěvku
     */
    public void createNewPost(String userEmail, String content) {
        if (StringUtils.isBlank(content)) {
            throw new ValidationException("Text příspěvku nesmí být prázdný");
        }
        log.info("Creating new post, userEmail: {}", userEmail);
        User user = userRepository.findUserByEmail(userEmail);
        Post post = new Post();
        post.setAnnouncement(false);
        post.setContent(content);
        post.setCreationDatetime(LocalDateTime.now());
        post.setUser(user);
        postRepository.save(post);
    }

    /**
     * Vytváří nová oznámení.
     * @param userEmail autor oznámení
     * @param content text oznámení
     */
    public void createNewAnnouncement(String userEmail, String content) {
        if (StringUtils.isBlank(content)) {
            throw new ValidationException("Text oznámení nesmí být prázdný");
        }
        User user = userRepository.findUserByEmail(userEmail);
        if (userRoleRepository.getAdminRoleByUserEmail(userEmail) == null) {
            throw new ValidationException("Oznámení může vytvořit pouze administrátor");
        }
        log.info("Creating new announcement, userEmail: {}", userEmail);
        Post post = new Post();
        post.setAnnouncement(true);
        post.setContent(content);
        post.setCreationDatetime(LocalDateTime.now());
        post.setUser(user);
        postRepository.save(post);
    }

    /**
     * Hledá příspěvky uživatele, jeho přátel a administrátorů.
     * Vyhledá 10 nejnovějších příspěvků nebo všechny novější než {@code since}.
     * @param userEmail email uživatele
     * @param since datum, od kdy se vyhledává
     * @return seznam příspěvků
     */
    public List<PostVO> findPostsByFriendsOrAdmin(String userEmail, LocalDateTime since) {
        //log.info("Searching for posts, userEmail: {}", userEmail);
        List<User> userFriends = friendshipRepository.findUserFriends(userEmail);
        userFriends.add(userRepository.findUserByEmail(userEmail));
        if (since == null) {
            Page<Post> posts = postRepository.findPostsByFriendsOrAdmin(userFriends, PageRequest.ofSize(LIMIT));
            return voFactory.mapPostToPostVO(posts);
        } else {
            List<Post> posts = postRepository.findPostsByFriendsOrAdminSince(userFriends, since);
            return voFactory.mapPostToPostVO(posts);
        }
    }

    /**
     * Vyhledává příspěvky uživatele, jeho přátel a administrátorů starší než {@code until}.
     * @param userEmail email uživatele
     * @param until datum, do kdy se vyhledává
     * @return seznam příspěvků
     */
    public List<PostVO> findOlderPostsByFriendsOrAdmin(String userEmail, LocalDateTime until) {
        //log.info("Searching for older posts, userEmail: {}", userEmail);
        Assert.notNull(until, "Datum a čas nesmí být null");

        List<User> userFriends = friendshipRepository.findUserFriends(userEmail);
        userFriends.add(userRepository.findUserByEmail(userEmail));
        Page<Post> posts = postRepository.findPostsByFriendsOrAdminUntil(userFriends, until, PageRequest.ofSize(LIMIT));
        return voFactory.mapPostToPostVO(posts);
    }
}
