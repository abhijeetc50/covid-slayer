import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
    Form,
    Input,
    InputNumber,
    Select,
    Row,
    Col,
    Button,
    Typography
} from 'antd';
import { useAlert } from 'react-alert';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const { Title } = Typography;
var md5 = require('md5');

const Register = () => {
    const alert = useAlert();
    const history = useHistory();
    const [form] = Form.useForm();
    //const domain = process.env.REACT_APP_API_URL;
    const domain = "https://64.227.185.251/public/index.php/";

    const onFinish = (values) => {
        const formData = new FormData();
        formData.append('name', values.name ? values.name : '');
        formData.append('email', values.email ? values.email : '');
        formData.append('age', values.age ? values.age : '');
        formData.append('gender', values.gender ? values.gender : '');
        formData.append('password', values.password ? md5(values.password) : '');

        axios.post(domain + 'v1/register', formData)
            .then((response) => {
                if (response.status === 200) {
                    history.push('/login');
                    alert.success('Registration Done. Login to Continue!')
                } else {
                    console.log("failed");
                }
            }, (error) => {
                console.log(error)
            });
    };

    return (
        <Row>
            <Col span={8} offset={8}>
                <Title level={1} className="textCenter">Registration</Title>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please select gender!',
                            },
                        ]}
                    >
                        <Select placeholder="select your gender">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="age"
                        label="Age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Age!',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Register;