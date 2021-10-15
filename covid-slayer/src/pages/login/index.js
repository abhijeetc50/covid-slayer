import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import styles from './style.css';

const Login = () => {
    const history = useHistory();

    const onFinish = (values) => {
        console.log('Success:', values);
        history.push('dashboard/');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col span={8} offset={8}>
                <Form
                    name="login"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;