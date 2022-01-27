package cz.hrubyj.controller;

import cz.hrubyj.vo.IncomingMessageVO;
import cz.hrubyj.vo.OutgoingMessageVO;
import io.jsonwebtoken.lang.Assert;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.security.Principal;

@Controller
@RequiredArgsConstructor
public class WebSocketController {

    private final SimpMessagingTemplate simpleMessagingTemplate;

    @MessageMapping("/chat")
    public void processChatMessage(@Payload @Valid @NotNull IncomingMessageVO message, Principal user) {
        Assert.notNull(message, "Zpráva nesmí být null!");
        simpleMessagingTemplate.convertAndSendToUser(message.getAddressee(), "/queue/chat",
                new OutgoingMessageVO(user.getName(), message.getContent()));
    }
}