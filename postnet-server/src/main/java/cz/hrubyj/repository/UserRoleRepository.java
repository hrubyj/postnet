package cz.hrubyj.repository;

import cz.hrubyj.domain.Role;
import cz.hrubyj.domain.User;
import cz.hrubyj.domain.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {

    @Query("SELECT ur FROM UserRole ur WHERE ur.user.email = :userEmail AND ur.role.role = 'ADMIN'")
    UserRole getAdminRoleByUserEmail(@Param("userEmail") String userEmail);

    @Query("SELECT ur.user.idUser FROM UserRole ur WHERE ur.user IN :users AND ur.role.role = 'ADMIN'")
    List<Integer> getAdminIdsByUsers(@Param("users") Iterable<User> users);

    @Query("SELECT ur FROM UserRole ur WHERE ur.role.role = 'ADMIN'")
    List<UserRole> getAdminUserRoles();

}
