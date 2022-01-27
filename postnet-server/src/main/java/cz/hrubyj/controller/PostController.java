package cz.hrubyj.controller;

import cz.hrubyj.postnet.api.PostControllerApi;
import cz.hrubyj.postnet.api.vo.PostVO;
import cz.hrubyj.service.AuthenticationService;
import cz.hrubyj.service.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PostController implements PostControllerApi {

    private final AuthenticationService authenticationService;

    private final PostService postService;

    @Override
    public ResponseEntity<Void> createPost(PostVO postVO) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        postService.createNewPost(userEmail, postVO.getContent());
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<PostVO>> getOldPosts(LocalDateTime until) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        return ResponseEntity.ok(postService.findOlderPostsByFriendsOrAdmin(userEmail, until));
    }

    @Override
    public ResponseEntity<List<PostVO>> getPosts(LocalDateTime since) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        return ResponseEntity.ok(postService.findPostsByFriendsOrAdmin(userEmail, since));
    }
}
