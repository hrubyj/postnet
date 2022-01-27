package cz.hrubyj.repository;

import cz.hrubyj.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Role findRoleByRole(String role);

}
