import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css';
import axios from 'axios';
import { useAlert } from 'react-alert';

var md5 = require('md5');
const Login = () => {
    const alert = useAlert();
    const history = useHistory();
    const domain = process.env.REACT_APP_API_URL;

    const onFinish = (values) => {
        const formData = new FormData();
        formData.append('username', values.username ? values.username : '');
        formData.append('password', values.password ? md5(values.password) : '');

        axios.post(domain + 'v1/login', formData)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.status === 'true') {
                        localStorage.setItem("name", response.data.name);
                        localStorage.setItem("user_id", response.data.user_id);
                        alert.success('Welcome, ' + response.data.name)
                        history.push('dashboard/');
                    }else{
                        alert.error('Sorry, the credentials dont match. Please try again.')
                    }
                } else {
                    alert.error('Something went wrong! Please try again.')
                }
            }, (error) => {
                console.log(error)
            });

    };

    const gotoRegister = () => {
        history.push('/register');
    }

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
                        <Button type="primary" size="large" htmlType="submit" block className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <Divider>OR</Divider>
                <Button type="primary" ghost block size="large" onClick={gotoRegister}>
                    Register
                </Button>
            </Col>
        </Row>
    );
};

export default Login;