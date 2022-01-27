package cz.hrubyj.domain;

import javax.persistence.*;

@Entity
@Table(name = "user_role")
public class UserRole {

        /**
         * ID_User_Role.
         */
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false)
        private Integer idUserRole;


        /** Relace many to one na tabulku qsign_role. */
        @ManyToOne(fetch = FetchType.LAZY, optional = false)
        private Role role;

        /** Relace many to one na tabulku qsign_user. */
        @ManyToOne(fetch = FetchType.LAZY, optional = false)
        private User user;


        /**
         * Pro vnitřní použití hibernate.
         */
        protected UserRole() {
        }

        /**
         * Konstruktor.
         *
         * @param role Role
         * @param user User
         */
        public UserRole(Role role, User user) {
            this.role = role;
            this.user = user;
        }


        /**
         * ID_User_Role, INT, NOT NULL.
         *
         * @return iD_User_Role
         */
        public Integer getIdUserRole() {
            return idUserRole;
        }
        /**
         * @param idUserRole iD_User_Role, NESMÍ být null!
         */
        public void setIdUserRole(Integer idUserRole) {
            this.idUserRole = idUserRole;
        }

        /** @return navazany objekt relace many to one na tabulku qsign_role */
        public Role getRole() {
            return this.role;
        }
        /**
         * @param role navazovany objekt relace many to one na tabulku qsign_role
         */
        public void setRole(Role role) {
            this.role = role;
        }

        /** @return navazany objekt relace many to one na tabulku qsign_user */
        public User getUser() {
            return this.user;
        }
        /**
         * @param user navazovany objekt relace many to one na tabulku qsign_user
         */
        public void setUser(User user) {
            this.user = user;
        }
}
