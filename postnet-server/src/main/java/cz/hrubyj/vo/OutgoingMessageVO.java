package cz.hrubyj.vo;

/**
 * Odchozí zpráva
 */
public class OutgoingMessageVO {

    /* odesílatel zprávy */
    private final String sender;
    /* text zprávy */
    private final String content;

    public OutgoingMessageVO(String sender, String content) {
        this.sender = sender;
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public String getContent() {
        return content;
    }
}
