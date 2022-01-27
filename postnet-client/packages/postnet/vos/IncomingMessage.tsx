import ChatMessage, { instanceOfChatMessage } from "./ChatMessage";

export default interface IncomingMessage extends ChatMessage {
    sender: string,
}

export const instanceOfIncoming = (object: any): object is IncomingMessage => {
    return 'sender' in object && instanceOfChatMessage(object);
}