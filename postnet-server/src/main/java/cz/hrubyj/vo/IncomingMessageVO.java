package cz.hrubyj.vo;

/**
 * Příchozí zpráva
 */
public class IncomingMessageVO {

    /* adresát zprávy */
    private final String addressee;
    /* text zprávy */
    private final String content;

    public IncomingMessageVO(String addressee, String content) {
        this.addressee = addressee;
        this.content = content;
    }

    public String getAddressee() {
        return addressee;
    }

    public String getContent() {
        return content;
    }
}
