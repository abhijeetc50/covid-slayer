import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './style.css';
import axios from 'axios';

var md5 = require('md5');
const Login = () => {
    const history = useHistory();

    const domain = "http://localhost:8080/";

    const onFinish = (values) => {
        const formData = new FormData();
        formData.append('username', values.username ? values.username : '');
        formData.append('password', values.password ? md5(values.password) : '');

        axios.post(domain + 'v1/login', formData)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.status === 'true') {
                        localStorage.setItem("name",response.data.name);
                        localStorage.setItem("user_id",response.data.user_id);
                        history.push('dashboard/');
                    }
                } else {
                    console.log("failed");
                }
            }, (error) => {
                console.log(error)
            });

    };

    return (
        <Row>
            <Col span={6} offset={9}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;