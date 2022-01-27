package cz.hrubyj.vo;

/**
 * Uživatel
 */
public class UserVO {

    /* email uživatele */
    private final String email;
    /* jméno uživatele */
    private final String name;

    public UserVO(String email, String name) {
        this.email = email;
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }
}