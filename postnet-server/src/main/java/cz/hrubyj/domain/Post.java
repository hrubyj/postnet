package cz.hrubyj.domain;

import javax.persistence.*;
import java.time.LocalDateTime;


/**
 * Post.
 * Datový objekt namapovaný na tabulku post.
 *
 */
@Entity
@Table(name = "post")
public class Post {

    /**
     * ID_Post.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer idPost;

    /**
     * Announcement.
     */
    @Column(nullable = false)
    private Boolean announcement;

    /**
     * Content.
     */
    @Column(length = 1000, nullable = false)
    private String content;

    /**
     * Creation_DateTime.
     */
    @Column(nullable = false)
    private LocalDateTime creationDatetime;


    /** Relace many to one na tabulku user. */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private User user;


    /**
     * Konstruktor.
     *
     * @param user User
     * @param content Content
     * @param creationDatetime Creation_DateTime
     * @param announcement Announcement
     */
    public Post(User user, String content, LocalDateTime creationDatetime, Boolean announcement) {
        this.user = user;
        this.content = content;
        this.creationDatetime = creationDatetime;
        this.announcement = announcement;
    }

    public Post() {

    }

    /**
     * Announcement, NUMERIC, NOT NULL.
     *
     * @return announcement
     */
    public Boolean getAnnouncement() {
        return announcement;
    }
    /**
     * @param announcement announcement, NESMÍ být null!
     */
    public void setAnnouncement(Boolean announcement) {
        this.announcement = announcement;
    }

    /**
     * Content, VARCHAR(1000), NOT NULL.
     *
     * @return content
     */
    public String getContent() {
        return content;
    }
    /**
     * @param content content, NESMÍ být null!
     */
    public void setContent(String content) {
        if (content != null) {
            if (content.length() == 0) {
                content = null;
            } else if (content.length() > 1000) {
                content = content.substring(0, 1000);
            }
        }
        this.content = content;
    }

    /**
     * Creation_DateTime, DATETIME, NOT NULL.
     *
     * @return creation_DateTime
     */
    public LocalDateTime getCreationDatetime() {
        return creationDatetime;
    }
    /**
     * @param creationDatetime creation_DateTime, NESMÍ být null!
     */
    public void setCreationDatetime(LocalDateTime creationDatetime) {
        this.creationDatetime = creationDatetime;
    }

    /**
     * ID_Post, INT, NOT NULL.
     *
     * @return iD_Post
     */
    public Integer getIdPost() {
        return idPost;
    }
    /**
     * @param idPost iD_Post, NESMÍ být null!
     */
    public void setIdPost(Integer idPost) {
        this.idPost = idPost;
    }

    /** @return navazany objekt relace many to one na tabulku user */
    public User getUser() {
        return this.user;
    }
    /**
     * @param user navazovany objekt relace many to one na tabulku user
     */
    public void setUser(User user) {
        this.user = user;
    }

}
