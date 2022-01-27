import ChatMessage, { instanceOfChatMessage } from "./ChatMessage";

export default interface OutgoingMessage extends ChatMessage {
    addressee: string,
}

export const instanceOfOutgoing = (object: any): object is OutgoingMessage => {
    return 'addressee' in object && instanceOfChatMessage(object);
}