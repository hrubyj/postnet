import {List} from "antd";
import {instanceOfOutgoing} from "../../vos/OutgoingMessage";
import ChatMessage from "../../vos/ChatMessage";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import React, {useEffect, useRef} from "react";

type Props = {
    messages: ChatMessage[]
}

const ChatMessageBox: React.FC<Props> = ({messages}) => {

    const renderMessage = (message: ChatMessage, index: number) => {
        return instanceOfOutgoing(message) ?
            <SentMessage index={index} content={message.content}/> :
            <ReceivedMessage index={index} content={message.content}/>;
    }

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });


    return (
        <div>
            <List style={{padding: 0, maxHeight: 270, minHeight: 270, overflow: "auto"}}>
                {messages.map((message, index) => renderMessage(message, index))}
                <div ref={divRef}/>
            </List>
        </div>
    )
}

export default ChatMessageBox;