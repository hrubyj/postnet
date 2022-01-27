package cz.hrubyj.config.auth;

/**
 * Přepravka pro autentizační údaje
 */
public class AuthenticationData {

    /* přihlašovací jméno - email */
    String username;
    /* json web token */
    String jwtToken;

    public AuthenticationData(String username, String jwtToken) {
        this.username = username;
        this.jwtToken = jwtToken;
    }

    public String getUsername() {
        return username;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public boolean containsUsername() {
        return username != null;
    }

}
