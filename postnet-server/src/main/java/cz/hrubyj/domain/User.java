package cz.hrubyj.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


/**
 * User.
 * Datový objekt namapovaný na tabulku user.
 *
 */
@Entity
@Table(name = "user")
public class User {

    /**
     * ID_User.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer idUser;

    /**
     * Email.
     *
     */
    @Column(length = 100, nullable = false, unique = true)
    private String email;


    /**
     * Name.
     */
    @Column(length = 100, nullable = false)
    private String name;

    /**
     * Password.
     */
    @Column(length = 128, nullable = false)
    private String password;


    /** Relace one to many na tabulku friendship. */
    @OneToMany(mappedBy = "user1")
    protected List<Friendship> friendship1List = new ArrayList<>(0);

    /** Relace one to many na tabulku friendship. */
    @OneToMany(mappedBy = "user2")
    protected List<Friendship> friendship2List = new ArrayList<>(0);

    /** Relace one to many na tabulku post. */
    @OneToMany(mappedBy = "user")
    protected List<Post> postList = new ArrayList<>(0);


    /**
     * Konstruktor.
     *
     * @param email Email
     * @param name Name
     * @param password Password
     */
    public User(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public User() {

    }


    /**
     * Email, VARCHAR(100), NOT NULL UNIQUE.
     *
     * @return email
     */
    public String getEmail() {
        return email;
    }
    /**
     * @param email email, NESMÍ být null!
     */
    public void setEmail(String email) {
        if (email != null) {
            if (email.length() == 0) {
                email = null;
            } else if (email.length() > 100) {
                email = email.substring(0, 100);
            }
        }
        this.email = email;
    }

    /**
     * ID_User, INT, NOT NULL.
     *
     * @return iD_User
     */
    public Integer getIdUser() {
        return idUser;
    }
    /**
     * @param idUser iD_User, NESMÍ být null!
     */
    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    /**
     * Name, VARCHAR(100), NOT NULL.
     *
     * @return name
     */
    public String getName() {
        return name;
    }
    /**
     * @param name name, NESMÍ být null!
     */
    public void setName(String name) {
        if (name != null) {
            if (name.length() == 0) {
                name = null;
            } else if (name.length() > 100) {
                name = name.substring(0, 100);
            }
        }
        this.name = name;
    }

    /**
     * Password, VARCHAR(128), NOT NULL.
     *
     * @return password
     */
    public String getPassword() {
        return password;
    }
    /**
     * @param password password, NESMÍ být null!
     */
    public void setPassword(String password) {
        if (password != null) {
            if (password.length() == 0) {
                password = null;
            } else if (password.length() > 128) {
                password = password.substring(0, 128);
            }
        }
        this.password = password;
    }
}