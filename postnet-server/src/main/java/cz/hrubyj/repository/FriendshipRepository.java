package cz.hrubyj.repository;

import cz.hrubyj.domain.Friendship;
import cz.hrubyj.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface FriendshipRepository extends JpaRepository<Friendship, Integer> {

    Friendship findFriendshipByUser1AndUser2(User user1, User user2);

    @Query("SELECT fs.user1 FROM Friendship fs WHERE fs.user2.email = :userEmail AND fs.type = 'REQUESTED'")
    List<User> findRequestedUsers(@Param("userEmail") String userEmail);

    @Query("SELECT usr FROM User usr WHERE usr.idUser" +
          " IN (SELECT fr.user1.idUser FROM Friendship fr WHERE fr.user2.email = :userEmail AND fr.type = 'CONFIRMED')" +
          " OR usr.idUser IN (SELECT fr.user2.idUser FROM Friendship fr WHERE fr.user1.email = :userEmail AND fr.type = 'CONFIRMED')")
    List<User> findUserFriends(@Param("userEmail") String userEmail);

    @Query("SELECT usr FROM User usr WHERE usr.idUser" +
          " IN (SELECT fr.user1.idUser FROM Friendship fr " +
            "WHERE fr.user2.email = :userEmail AND fr.user1.email IN :emails AND fr.type = 'CONFIRMED')" +
          " OR usr.idUser IN (SELECT fr.user2.idUser FROM Friendship fr " +
            "WHERE fr.user1.email = :userEmail AND fr.user2.email IN :emails AND fr.type = 'CONFIRMED')")
    List<User> findUserFriendsByEmailIn(@Param("userEmail") String userEmail, @Param("emails") Set<String> emails);

    @Query("SELECT usr FROM User usr WHERE usr.idUser" +
          " NOT IN (SELECT fr.user1.idUser FROM Friendship fr WHERE fr.user2.email = :userEmail)" +
          " AND usr.idUser NOT IN (SELECT fr.user2.idUser FROM Friendship fr WHERE fr.user1.email = :userEmail)")
    Page<User> findStrangers(@Param("userEmail") String userEmail, Pageable pageable);

    @Query("SELECT usr FROM User usr WHERE usr.idUser" +
            " NOT IN (SELECT fr.user1.idUser FROM Friendship fr WHERE fr.user2.email = :userEmail)" +
            " AND usr.idUser NOT IN (SELECT fr.user2.idUser FROM Friendship fr WHERE fr.user1.email = :userEmail)" +
            " AND usr.name like :fulltext")
    Page<User> findFulltextStrangers(@Param("userEmail") String userEmail, @Param("fulltext") String fulltext, Pageable pageable);

    @Query("SELECT usr FROM User usr WHERE usr.idUser" +
            " IN (SELECT fr.user2.idUser FROM Friendship fr WHERE fr.user1.email = :userEmail AND fr.type = 'BLOCK')")
    List<User> findBlockedUsers(@Param("userEmail") String userEmail);

}
