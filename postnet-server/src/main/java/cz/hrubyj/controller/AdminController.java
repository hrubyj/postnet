package cz.hrubyj.controller;

import cz.hrubyj.postnet.api.AdminControllerApi;
import cz.hrubyj.postnet.api.vo.AdminRoleVO;
import cz.hrubyj.postnet.api.vo.PostVO;
import cz.hrubyj.service.AuthenticationService;
import cz.hrubyj.service.PostService;
import cz.hrubyj.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AdminController implements AdminControllerApi {

    private final AuthenticationService authenticationService;

    private final PostService postService;

    private final UserService userService;

    @Override
    public ResponseEntity<Void> createAnnouncement(PostVO postVO) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        postService.createNewAnnouncement(userEmail, postVO.getContent());
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<Void> setAdminRole(AdminRoleVO adminRoleVO) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        userService.setUserRole(userEmail, adminRoleVO);
        return ResponseEntity.ok(null);
    }
}
