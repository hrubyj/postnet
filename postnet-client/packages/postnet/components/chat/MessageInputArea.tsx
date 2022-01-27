import React, {useState} from "react";
import {Button, Form, Input, Row} from "antd";
import {SendOutlined} from "@ant-design/icons";

type Props = {
    onSubmit?: (message: string) => void,
}

const SendMessageForm: React.FC<Props> = ({onSubmit}) => {

    const [messageText, setMessageText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit && messageText.length > 0) {
            onSubmit(messageText);
            setMessageText("");
        }
    }

    const handleMessageChange = (event) => {
        event.preventDefault();
        setMessageText(event.target.value);
    }

    const [form] = Form.useForm();

    return (
        <form onSubmit={handleSubmit}>
            <Input.Group compact style={{ margin: '20px' }}>
                <Input placeholder={"Napište zprávu..."}
                       onChange={(e) => {handleMessageChange(e)}}
                       value={messageText}
                       style={{width: '72%'}}/>
                <Button type="primary" onClick={handleSubmit}><SendOutlined/></Button>
            </Input.Group>
        </form>
    )
}

export default SendMessageForm;