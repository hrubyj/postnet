import React from "react";
import {Form, Input, Modal} from "antd";


interface Values {
    content: string;
    author: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}

const NewAnnounModal: React.FC<CollectionCreateFormProps> = ({
                                                               visible,
                                                               onCreate,
                                                               onCancel,
                                                           }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Nové oznámení"
            okText="Zveřejnit"
            cancelText="Zrušit"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{modifier: 'public'}}
            >
                <Form.Item
                    name="content"
                    rules={[{required: true, message: 'Napište prosím nějaký text'}]}
                >
                    <Input.TextArea
                        placeholder="napište oznámení..."
                        showCount maxLength={1000}/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default NewAnnounModal;