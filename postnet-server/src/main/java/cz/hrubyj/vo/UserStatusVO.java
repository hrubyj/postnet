package cz.hrubyj.vo;

import cz.hrubyj.vo.enums.Status;

/**
 * Změna stavu uživatele
 */
public class UserStatusVO {

    /* email uživatele */
    private final String email;
    /* jméno uživatele */
    private final String name;
    /* nový status */
    private final Status status;

    public UserStatusVO(String email, String name, Status status) {
        this.email = email;
        this.name = name;
        this.status = status;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public Status getStatus() {
        return status;
    }
}