package cz.hrubyj.domain;

import javax.persistence.*;

/**
 * Friendship.
 * Datový objekt namapovaný na tabulku friendship.
 *
 */
@Entity
@Table(name = "friendship")
public class Friendship {


    /**
     * ID_Friendship. PK
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer idFriendship;

    /**
     * Typ.
     */
    @Column(length = 10, nullable = false)
    @Enumerated(EnumType.STRING)
    private Type type;


    /** Relace many to one na tabulku user. */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user1")
    private User user1;

    /** Relace many to one na tabulku user. */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user2")
    private User user2;


    /**
     * Konstruktor.
     *
     * @param user1 User1
     * @param user2 User2
     */
    public Friendship(User user1, User user2, Type type) {
        this.user1 = user1;
        this.user2 = user2;
        this.type = type;
    }

    public Friendship() {

    }


    /**
     * ID_Friendship, INT, NOT NULL.
     *
     * @return iD_Friendship
     */
    public Integer getIdFriendship() {
        return idFriendship;
    }
    /**
     * @param idFriendship iD_Friendship, NESMÍ být null!
     */
    public void setIdFriendship(Integer idFriendship) {
        this.idFriendship = idFriendship;
    }

    /**
     * @return role jako hodnotu enumu
     */
    public Friendship.Type getType() {
        return type;
    }
    /**
     * @param type typ jako hodnota enumu
     */
    public void setType(Friendship.Type type) {
        this.type = type;
    }

    /** @return navazany objekt relace many to one na tabulku user */
    public User getUser1() {
        return this.user1;
    }
    /**
     * @param user1 navazovany objekt relace many to one na tabulku user
     */
    public void setUser1(User user1) {
        this.user1 = user1;
    }

    /** @return navazany objekt relace many to one na tabulku user */
    public User getUser2() {
        return this.user2;
    }
    /**
     * @param user2 navazovany objekt relace many to one na tabulku user
     */
    public void setUser2(User user2) {
        this.user2 = user2;
    }


    /**
     * Vyjmenované hodnoty pro typ.
     */
    public enum Type {
        REQUESTED(),
        CONFIRMED(),
        BLOCK();
    }
}
