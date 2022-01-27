import { List, Typography } from "antd";

type Props = {
    content: string
    index: number
}

const SentMessage: React.FC<Props> = ({content, index}) => {
    return (
        <List.Item key={index} style={{display: 'flex', justifyContent: 'right'}}>
            <Typography style={{
                backgroundColor: 'rgb(0,140,255)', padding: 8, borderRadius: 10, marginRight: 10,
                whiteSpace: 'normal', maxWidth: 200
            }}
            >
                <Typography.Text style={{ color: 'rgb(255,255,255)' }}>
                    {content}
                </Typography.Text>
            </Typography>
        </List.Item>
    )
}

export default SentMessage;