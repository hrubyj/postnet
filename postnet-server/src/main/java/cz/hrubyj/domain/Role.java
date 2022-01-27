package cz.hrubyj.domain;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "role")
public class Role {

    /**
     * ID_Role.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer idRole;

    /**
     * Role.
     */
    @Column(length = 10, nullable = false)
    private String role;


    /** Relace one to many na tabulku qsign_user_role. */
    @OneToMany(mappedBy = "role")
    protected List<UserRole> userRoleList = new ArrayList<>(0);

    /**
     * Konstruktor.
     */
    protected Role() {
    }

    /**
     * Konstruktor.
     *
     * @param role Role
     */
    public Role(String role) {
        this.role = role;
    }


    /**
     * ID_Role, INT, NOT NULL.
     *
     * @return iD_Role
     */
    public Integer getIdRole() {
        return idRole;
    }
    /**
     * @param idRole iD_Role, NESMÍ být null!
     */
    public void setIdRole(Integer idRole) {
        this.idRole = idRole;
    }

    /**
     * Role, VARCHAR(10), NOT NULL.
     *
     * @return role
     */
    public String getRole() {
        return role;
    }
    /**
     * @param role role, NESMÍ být null!
     */
    public void setRole(String role) {
        if (role != null) {
            if (role.length() == 0) {
                role = null;
            } else if (role.length() > 10) {
                role = role.substring(0, 10);
            }
        }
        this.role = role;
    }
}
