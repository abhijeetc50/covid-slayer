import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'antd';

const Dashboard = () => {
    const history = useHistory();

    const newGame = () =>{
        history.push('../battlefield/' + generateBattlefieldID());
    }

    const generateBattlefieldID = () => {
        return Math.random().toString(20).substr(2, 6)
    }

    return (
        <Row>
            <Col span={18} offset={3}>
                <Button type="primary" onClick={newGame}>
                    New Game
                </Button>
            </Col>
        </Row>
    );

};

export default Dashboard;