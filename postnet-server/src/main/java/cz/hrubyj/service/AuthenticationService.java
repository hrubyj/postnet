package cz.hrubyj.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    public boolean isAuthenticated() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication != null && authentication.isAuthenticated();
    }

    public String getEmail() {
        if (!isAuthenticated()) {
            return null;
        }
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
