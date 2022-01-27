import { List, Typography } from "antd";

type Props = {
    content: string
    index: number
}

const ReceivedMessage: React.FC<Props> = ({content, index}) => {
    return (
        <List.Item key={index} style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Typography style={{
                backgroundColor: 'rgb(229,229,229)', padding: 8, borderRadius: 10, marginLeft: 10,
                whiteSpace: 'normal', maxWidth: 200
            }}
            >
                <Typography.Text>
                    {content}
                </Typography.Text>
            </Typography>
        </List.Item>
    )
}

export default ReceivedMessage;