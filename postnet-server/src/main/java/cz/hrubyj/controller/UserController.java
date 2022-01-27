package cz.hrubyj.controller;

import cz.hrubyj.config.auth.JwtTokenUtils;
import cz.hrubyj.postnet.api.UserControllerApi;
import cz.hrubyj.postnet.api.vo.*;
import cz.hrubyj.service.AuthenticationService;
import cz.hrubyj.service.JwtUserService;
import cz.hrubyj.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.ValidationException;
import java.util.Collections;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController implements UserControllerApi {

    private final UserService userService;

    private final AuthenticationManager authenticationManager;

    private final AuthenticationService authenticationService;

    private final JwtUserService jwtUserService;

    private final JwtTokenUtils jwtTokenUtils;


    @Override
    public ResponseEntity<Void> registerUser(RegistrationVO registrationVO) {
        try {
            userService.registerNewUser(registrationVO);
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body(null);
        }
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<UserVO>> getAllUsers(String fulltext) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();
        if (StringUtils.isNotBlank(fulltext)) {
            return ResponseEntity.ok(userService.findFulltextUsers(userEmail, fulltext));
        }
        return ResponseEntity.ok(userService.findAllUsers(userEmail));
    }

    @Override
    public ResponseEntity<List<UserVO>> getBlocked() {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();

        return ResponseEntity.ok(userService.findBlockedFriends(userEmail));
    }

    @Override
    public ResponseEntity<List<UserVO>> getFriends() {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();

        return ResponseEntity.ok(userService.findUserFriends(userEmail));
    }

    @Override
    public ResponseEntity<List<UserVO>> getStrangers(String fulltext) {
        if (!authenticationService.isAuthenticated()) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.UNAUTHORIZED);
        }
        String userEmail = authenticationService.getEmail();

        if (StringUtils.isNotBlank(fulltext)) {
            return ResponseEntity.ok(userService.findFulltextStrangers(userEmail, fulltext));
        }
        return ResponseEntity.ok(userService.findStrangers(userEmail));
    }

    @Override
    public ResponseEntity<AuthenticationVO> loginUser(CredentialsVO credentialsVO){
        final cz.hrubyj.vo.UserVO userVO = jwtUserService.findUserByUsername(credentialsVO.getEmail());
        if (userVO == null) {
            return ResponseEntity.badRequest().build();
        }

        try {
            authenticate(credentialsVO.getEmail(), credentialsVO.getPassword());
        } catch (final Exception e) {
            return ResponseEntity.badRequest().build();
        }

        final String token = jwtTokenUtils.generateToken(userVO);
        AuthenticationVO authenticationVO = new AuthenticationVO();
        authenticationVO.setLogin(credentialsVO.getEmail());
        authenticationVO.setName(userVO.getName());
        authenticationVO.setAdmin(userService.isUserAdmin(userVO));
        authenticationVO.setToken(token);
        return ResponseEntity.ok(authenticationVO);
    }

    private void authenticate(String email, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }


}
