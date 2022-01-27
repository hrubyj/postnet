package cz.hrubyj.repository;

import cz.hrubyj.domain.Post;
import cz.hrubyj.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;


@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("SELECT pst FROM Post pst WHERE pst.user IN :friends OR pst.announcement = true " +
            "ORDER BY pst.creationDatetime DESC ")
    Page<Post> findPostsByFriendsOrAdmin(@Param("friends") List<User> friends, Pageable pageable);

    @Query("SELECT pst FROM Post pst WHERE (pst.user IN :friends OR pst.announcement = true) " +
            " AND pst.creationDatetime > :since ORDER BY pst.creationDatetime DESC ")
    List<Post> findPostsByFriendsOrAdminSince(@Param("friends") List<User> friends, @Param("since") LocalDateTime since);

    @Query("SELECT pst FROM Post pst WHERE (pst.user IN :friends OR pst.announcement = true) " +
            " AND pst.creationDatetime < :until ORDER BY pst.creationDatetime DESC ")
    Page<Post> findPostsByFriendsOrAdminUntil(@Param("friends") List<User> friends, @Param("until") LocalDateTime until, Pageable pageable);

}
