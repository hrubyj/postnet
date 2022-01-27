package cz.hrubyj.repository;

import cz.hrubyj.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findUserByEmail(String email);

    @Query("SELECT usr FROM User usr WHERE usr.name LIKE :fulltext")
    Page<User> findFulltextUsersByName(@Param("fulltext") String fulltext, Pageable pageable);

}
