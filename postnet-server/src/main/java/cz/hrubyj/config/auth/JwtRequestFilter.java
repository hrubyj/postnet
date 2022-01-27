package cz.hrubyj.config.auth;

import cz.hrubyj.service.JwtUserService;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {

    private final JwtUserService jwtUserService;

    private final JwtTokenUtils jwtTokenUtils;

    @Override
    protected void doFilterInternal(final HttpServletRequest request,  final HttpServletResponse response,
                                    final FilterChain filterChain)
            throws ServletException, IOException {
        final String authorizationHeader = getAuthorizationHeader(request);
        if (authorizationHeader != null) {
            authenticateFromAuthorizationHeader(request, authorizationHeader);
        }
        filterChain.doFilter(request, response);
    }

    private void authenticateFromAuthorizationHeader(HttpServletRequest request, String authorizationHeader) {
        if (jwtTokenUtils.tokenStartsWithBearerHeader(authorizationHeader)) {
            authenticateUserFromToken(request, authorizationHeader);
        } else {
            logger.warn("JWT Token does not begin with Bearer String");
        }
    }

    private void authenticateUserFromToken(final HttpServletRequest request, final String requestTokenHeader) {
        AuthenticationData authenticationData = parseAuthenticationData(requestTokenHeader);
        if (authenticationData != null && authenticationData.containsUsername() && isCurrentlyNobodyAuthenticated()) {
            setAuthentication(request, authenticationData);
        }
    }

    private boolean isCurrentlyNobodyAuthenticated() {
        return SecurityContextHolder.getContext().getAuthentication() == null;
    }

    private AuthenticationData parseAuthenticationData(final String requestTokenHeader) {
        try {
            return jwtTokenUtils.parseAuthenticationData(requestTokenHeader);
        } catch (IllegalArgumentException e) {
            logger.error("Unable to get JWT Token");
        } catch (ExpiredJwtException e) {
            logger.warn("JWT Token has expired");
        }

        return null;
    }

    private String getAuthorizationHeader(final HttpServletRequest request) {
        return request.getHeader("Authorization");
    }

    private void setAuthentication(final HttpServletRequest request, final AuthenticationData authenticationData) {
        final UserDetails userDetails = jwtUserService.loadUserByUsername(authenticationData.getUsername());
        if (jwtTokenUtils.isTokenValid(authenticationData.getJwtToken(), userDetails)) {
            setAuthentication(request, userDetails);
        }
    }

    private void setAuthentication(final HttpServletRequest request, final UserDetails userDetails) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                userDetails, null, userDetails.getAuthorities());
        usernamePasswordAuthenticationToken
                .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
    }
}