import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import axios from 'axios';

const Dashboard = () => {
    const history = useHistory();
    const domain = "http://localhost:8080/";

    const newGame = () => {
        var battleFieldID = generateBattlefieldID()
        const formData = new FormData();
        formData.append('game_id', battleFieldID);
        formData.append('user_id', localStorage.getItem("user_id"));

        axios.post(domain + 'v1/registerGame', formData)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.status == 'true') {
                        history.push('../battlefield/' + battleFieldID);
                    }
                } else {
                    console.log("failed");
                }
            }, (error) => {
                console.log(error)
            });

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