import React from 'react';
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('user_id');
        localStorage.removeItem('name');
        history.push('/login');
    }

    return (
        <Row justify="end">
            <Col span={2} offset={11}>
                <Button type="primary" danger  onClick={logout}>
                    Logout
                </Button>
            </Col>
        </Row>
    );

};

export default Logout;