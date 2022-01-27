package cz.hrubyj.controller;

import cz.hrubyj.postnet.api.FriendshipControllerApi;
import cz.hrubyj.postnet.api.vo.UserVO;
import cz.hrubyj.service.AuthenticationService;
import cz.hrubyj.service.FriendshipService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class FriendshipController implements FriendshipControllerApi {

    private final AuthenticationService authenticationService;

    private final FriendshipService friendshipService;

    @Override
    public ResponseEntity<Void> confirmFriendship(Integer friendId) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        friendshipService.confirmFriendship(userEmail, friendId);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<Void> createBlock(Integer friendId) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        friendshipService.createNewFriendship(userEmail, friendId, true);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<Void> createFriendship(Integer friendId) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        friendshipService.createNewFriendship(userEmail, friendId, false);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<Void> deleteFriendship(Integer friendId) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        friendshipService.deleteFriendship(userEmail, friendId);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<UserVO>> getRequests() {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        return ResponseEntity.ok(friendshipService.getRequestedUsers(userEmail));
    }

}
