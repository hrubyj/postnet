package cz.hrubyj.service;

import cz.hrubyj.domain.Post;
import cz.hrubyj.domain.User;
import cz.hrubyj.postnet.api.vo.PostVO;
import cz.hrubyj.postnet.api.vo.UserVO;
import cz.hrubyj.repository.UserRoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Továrna pro mapování DO objektů na VO objekty
 */
@Service
@RequiredArgsConstructor
public class VOFactory {

    private final UserRoleRepository userRoleRepository;

    List<UserVO> mapUserToUserVO(Iterable<User> users) {
        List<Integer> adminIds = userRoleRepository.getAdminIdsByUsers(users);
        return StreamSupport.stream(users.spliterator(), false).map(user ->
            new UserVO()
            .id(user.getIdUser())
            .name(user.getName())
            .email(user.getEmail())
            .admin(adminIds.contains(user.getIdUser())))
                .collect(Collectors.toList());
    }

    List<PostVO> mapPostToPostVO(Iterable<Post> posts) {
        return StreamSupport.stream(posts.spliterator(), false).map(post ->
            new PostVO()
            .author(post.getUser().getName())
            .content(post.getContent())
            .creationDateTime(post.getCreationDatetime()))
                .collect(Collectors.toList());
    }

}
