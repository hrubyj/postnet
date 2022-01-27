package cz.hrubyj.service;

import cz.hrubyj.postnet.api.vo.RegistrationVO;
import cz.hrubyj.postnet.api.vo.UserVO;
import cz.hrubyj.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class ValidationService {

    private final EmailValidator emailValidator = EmailValidator.getInstance();

    public boolean validateRegistration(RegistrationVO registrationVO) {
        if (!emailValidator.isValid(registrationVO.getEmail())) {
            return false; // email není validní
        }
        if (StringUtils.isBlank(registrationVO.getName())) {
            return false; //prázdné jméno
        }
        if (StringUtils.isBlank(registrationVO.getPassword())) {
            return false; // prázdné heslo
        }
        return true;
    }

}
