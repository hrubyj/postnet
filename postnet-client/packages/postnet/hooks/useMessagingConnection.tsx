import { Client, IMessage } from "@stomp/stompjs";
import {useCallback, useEffect, useRef} from "react";
import { UserStatusVO } from "../vos/UserStatusVO";
import IncomingMessage from "../vos/IncomingMessage";
import OutgoingMessage from "../vos/OutgoingMessage";
import useAuthHeader from "./useAuthHeader";


const useMessagingConnection = (
    redirecting: boolean,
    onIncomingMessage: (message: IncomingMessage) => void,
    onStatusChange: (statusChanges: UserStatusVO[]) => void,
): [
    sendMessage: (message: OutgoingMessage) => void,
] => {

    const authHeader = useAuthHeader();

    const client = useRef<Client>();

    useEffect(() => {
        client.current = new Client({
            brokerURL: 'ws://localhost:8080/messaging/status-change',
            reconnectDelay: 5000
        });
    }, []);

    const convertStatusMessageToObject = (message: IMessage): UserStatusVO[] => {
        return JSON.parse(message.body);
    }

    const convertChatMessageToObject = (message: IMessage): IncomingMessage => {
        return JSON.parse(message.body);
    }

    const processChatMessage = useCallback((message: IMessage) => {
        const incomingMessage = convertChatMessageToObject(message);
        onIncomingMessage(incomingMessage);
    }, [onIncomingMessage]);

    const processFriendStatusChange = (message: IMessage) => {
        const statusList = convertStatusMessageToObject(message);
        onStatusChange(statusList);
    }

    const sendMessage = (message: OutgoingMessage) => {
        client.current?.publish({headers: authHeader?.headers, destination: '/messaging/chat', body: JSON.stringify(message)})
    }

    const onConnect = useCallback(() => {
        if (!authHeader) return;
        client.current?.subscribe('/user/queue/friend-status', processFriendStatusChange, { 'Authorization': authHeader.headers.Authorization});
        client.current?.subscribe('/user/queue/chat', processChatMessage, { 'Authorization': authHeader.headers.Authorization})
    }, [processChatMessage]);

    useEffect(() => {
        if (redirecting || !authHeader || !client.current || client.current?.active) {
            return () => {};
        }
        client.current.onConnect = onConnect;
        client.current.connectHeaders = { 'Authorization': authHeader.headers.Authorization};
        client.current.activate();

        return () => client.current?.deactivate();
    }, [redirecting]);

    return [sendMessage];
}

export default useMessagingConnection;