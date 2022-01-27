package cz.hrubyj.service;

import com.nulabinc.zxcvbn.Strength;
import com.nulabinc.zxcvbn.Zxcvbn;
import cz.hrubyj.domain.Role;
import cz.hrubyj.domain.User;
import cz.hrubyj.domain.UserRole;
import cz.hrubyj.postnet.api.vo.AdminRoleVO;
import cz.hrubyj.postnet.api.vo.RegistrationVO;
import cz.hrubyj.postnet.api.vo.UserVO;
import cz.hrubyj.repository.FriendshipRepository;
import cz.hrubyj.repository.RoleRepository;
import cz.hrubyj.repository.UserRepository;
import cz.hrubyj.repository.UserRoleRepository;
import cz.hrubyj.vo.enums.RoleEnum;
import lombok.RequiredArgsConstructor;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.validation.ValidationException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Třída obsluhující operace s uživateli
 */
@Service
@RequiredArgsConstructor
public class UserService {

    private final ValidationService validationService;

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final UserRoleRepository userRoleRepository;

    private final FriendshipRepository friendshipRepository;

    private final PasswordEncoder passwordEncoder;

    private final VOFactory voFactory;

    private final Integer LIMIT = 10;

    /**
     * Kontrola existence základních rolí a ADMIN uživatele
     */
    @PostConstruct
    private void init() {
        Role role = roleRepository.findRoleByRole(RoleEnum.USER.name());
        if (role == null) {
            role = new Role(RoleEnum.USER.name());
            roleRepository.save(role);
        }
        role = roleRepository.findRoleByRole(RoleEnum.ADMIN.name());
        if (role == null) {
            role = new Role(RoleEnum.ADMIN.name());
            roleRepository.save(role);
        }
        if (CollectionUtils.isEmpty(userRoleRepository.getAdminUserRoles())) {
            User admin = new User("admin@example.org", "ADMIN", passwordEncoder.encode("adminpassword"));
            userRepository.save(admin);
            UserRole adminRole = new UserRole(role, admin);
            userRoleRepository.save(adminRole);
        }
    }

    /**
     * Registruje nové uživatele.
     * @param registrationVO parametry registrace
     */
    public void registerNewUser(RegistrationVO registrationVO) {
        if (!validationService.validateRegistration(registrationVO)) {
            throw new ValidationException("Zadané údaje nejsou validní");
        }
        if (userRepository.findUserByEmail(registrationVO.getEmail()) != null) {
            throw new ValidationException("Email je již využíván jiným uživatelem");
        }

        Zxcvbn zxcvbn = new Zxcvbn();
        Strength strength = zxcvbn.measure(registrationVO.getPassword());
        if (strength.getScore() < 2) {
            throw new ValidationException("Zvolené heslo je příliš slabé");
        }

        User newUser = new User();
        newUser.setEmail(registrationVO.getEmail());
        newUser.setName(registrationVO.getName());
        newUser.setPassword(passwordEncoder.encode(registrationVO.getPassword()));
        userRepository.save(newUser);

        Role role = roleRepository.findRoleByRole(RoleEnum.USER.name());
        UserRole userRole = new UserRole(role, newUser);
        userRoleRepository.save(userRole);
    }

    /**
     * Nastavuje roli uživatele.
     * @param userEmail autor operace
     * @param adminRoleVO parametry nastavování role
     */
    public void setUserRole(String userEmail, AdminRoleVO adminRoleVO) {
        if (userRoleRepository.getAdminRoleByUserEmail(userEmail) == null) {
            throw new ValidationException("Měnit role uživatelů může pouze administrátor");
        }
        Optional<User> opt = userRepository.findById(adminRoleVO.getUserId());
        if (opt.isEmpty()) {
            throw new ValidationException("Uživatel s id " + adminRoleVO.getUserId() + " neexistuje");
        }
        User user = opt.get();

        UserRole userRole = userRoleRepository.getAdminRoleByUserEmail(user.getEmail());
        if (BooleanUtils.isTrue(adminRoleVO.getAdmin())) {
            if (userRole != null) {
                throw new ValidationException("Uživatel s id " + adminRoleVO.getUserId() + " je již administrátorem");
            }
            Role role = roleRepository.findRoleByRole(RoleEnum.ADMIN.name());
            userRole = new UserRole(role, user);
            userRoleRepository.save(userRole);
        } else {
            if (userRole != null) {
                userRoleRepository.delete(userRole);
            }
        }
    }

    /**
     * Hledá uživatele fulltextově podle jména.
     * @param userEmail autor operace
     * @param fulltext vyhledávaný řetězec
     * @return seznam uživatelů
     */
    public List<UserVO> findFulltextUsers(String userEmail, String fulltext) {
        fulltext = "%" + fulltext + "%";
        Page<User> users = userRepository.findFulltextUsersByName(fulltext, PageRequest.ofSize(LIMIT));
        List<User> fUsers = users.stream().filter(user -> !user.getEmail().equals(userEmail)).collect(Collectors.toList());
        return voFactory.mapUserToUserVO(fUsers);
    }

    /**
     * Hledá všechny uživatele.
     * @param userEmail autor operace
     * @return seznam uživatelů
     */
    public List<UserVO> findAllUsers(String userEmail) {
        Page<User> users = userRepository.findAll(PageRequest.ofSize(LIMIT));
        List<User> fUsers = users.stream().filter(user -> !user.getEmail().equals(userEmail)).collect(Collectors.toList());
        return voFactory.mapUserToUserVO(fUsers);
    }

    /**
     * Hledá přátele uživatele.
     * @param userEmail autor operace
     * @return seznam uživatelů
     */
    public List<UserVO> findUserFriends(String userEmail) {
        List<User> friends = friendshipRepository.findUserFriends(userEmail);
        return voFactory.mapUserToUserVO(friends);
    }

    /**
     * Hledá zablokované uživatele.
     * @param userEmail autor operace
     * @return seznam uživatelů
     */
    public List<UserVO> findBlockedFriends(String userEmail) {
        List<User> friends = friendshipRepository.findBlockedUsers(userEmail);
        return voFactory.mapUserToUserVO(friends);
    }

    /**
     * Hledá cizince.
     * @param userEmail autor operace
     * @return seznam uživatelů
     */
    public List<UserVO> findStrangers(String userEmail) {
        Page<User> strangers = friendshipRepository.findStrangers(userEmail, PageRequest.ofSize(LIMIT));
        List<User> fStrangers = strangers.stream().filter(user -> !user.getEmail().equals(userEmail)).collect(Collectors.toList());
        return voFactory.mapUserToUserVO(fStrangers);
    }

    /**
     * Hledá fulltextově cizince podle jména.
     * @param userEmail autor operace
     * @param fulltext hledaný řetězec
     * @return seznam uživatelů
     */
    public List<UserVO> findFulltextStrangers(String userEmail, String fulltext) {
        fulltext = "%" + fulltext + "%";
        Page<User> strangers = friendshipRepository.findFulltextStrangers(userEmail, fulltext, PageRequest.ofSize(LIMIT));
        List<User> fStrangers = strangers.stream().filter(user -> !user.getEmail().equals(userEmail)).collect(Collectors.toList());
        return voFactory.mapUserToUserVO(fStrangers);
    }

    /**
     * Zjišťuje zda je uživatel v roli administrátora.
     * @param userVO uživatel
     * @return true/false
     */
    public Boolean isUserAdmin(cz.hrubyj.vo.UserVO userVO) {
        return userRoleRepository.getAdminRoleByUserEmail(userVO.getEmail()) != null;
    }
}
