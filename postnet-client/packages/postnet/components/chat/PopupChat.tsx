import {Card, Typography} from "antd"
import ChatMessage from "../../vos/ChatMessage"
import ChatMessageBox from "./ChatMessageBox"
import MessageInputArea from "./MessageInputArea";
import {CloseOutlined} from "@ant-design/icons";
import React from "react";

type Props = {
    hidden?: boolean,
    chatmate?: string,
    messages: ChatMessage[],
    onClose?: () => void,
    onMessageSubmit?: (message: string) => void,
}

const PopupChat: React.FC<Props> = ({hidden, chatmate, messages, onClose, onMessageSubmit}) => {

    return (
        <Card title={<Typography.Title style={{ color: 'rgb(255,255,255)' }} level={4}>{chatmate}</Typography.Title>}
              extra={<CloseOutlined style={{ color: 'rgb(255,255,255)' }} onClick={onClose}/>}
            hidden={hidden}
            style={{bottom: 0, right: 100, position: 'fixed',
                minHeight: 400, minWidth: 310, maxWidth: 310,
            }}
            headStyle={{backgroundColor: 'rgb(0,120,255)', border: 0, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              bodyStyle={{padding: "0"}}
        >
            <ChatMessageBox messages={messages} />
            <MessageInputArea onSubmit={onMessageSubmit}/>
        </Card>
    )
}

export default PopupChat;