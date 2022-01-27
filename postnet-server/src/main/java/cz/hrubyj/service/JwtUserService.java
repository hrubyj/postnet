package cz.hrubyj.service;

import cz.hrubyj.domain.UserRole;
import cz.hrubyj.repository.UserRepository;
import cz.hrubyj.repository.UserRoleRepository;
import cz.hrubyj.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class JwtUserService implements UserDetailsService {

    private final UserRepository userRepository;

    private final UserRoleRepository userRoleRepository;

    @Override
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
        cz.hrubyj.domain.User user = userRepository.findUserByEmail(username);
        UserRole userRole = userRoleRepository.getAdminRoleByUserEmail(username);
        String role = "USER";

        if (user == null) {
            throw new UsernameNotFoundException("User's email was not found: " + username);
        }
        if (userRole != null) {
            role = "ADMIN";
        }

        return User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .authorities("ROLE_" + role)
                .build();
    }

    public UserVO findUserByUsername(final String username) {
        cz.hrubyj.domain.User user = userRepository.findUserByEmail(username);
        if (user == null) {
            return null;
        }

        return new UserVO(user.getEmail(), user.getName());
    }

}
