import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button,  Tag, Typography, Card } from 'antd';
import axios from 'axios';
import './style.css';
import Logout from './../../components/logout';
import Gamehistorydata from './../../components/gamehistory';
import Topgamers from './../../components/topgamers';

const { Title } = Typography;

const Dashboard = () => {
    const [userGameWon, setUserGameWon] = useState(0);
    const [userGameLost, setUserGameLost] = useState(0);
    const history = useHistory();
    const domain = process.env.REACT_APP_API_URL;
    var name = localStorage.getItem("name");
    if (localStorage.getItem("user_id") == null) {
        history.push('/');
        console.log(localStorage.getItem("user_id"))
    }

    const fetchUserGameCount = useCallback(async () => {
        const formData = new FormData();
        formData.append('id', localStorage.getItem("user_id"));

        axios.post(domain + 'v1/getUserGameCount', formData)
            .then((response) => {
                if (response.status === 200) {
                    setUserGameWon(response.data.WON[0].WON)
                    setUserGameLost(response.data.LOST[0].LOST)
                } else {
                    console.log("failed");
                }
            }, (error) => {
                console.log(error)
            });
    }, [domain]);



    useEffect(() => {
        fetchUserGameCount();
    }, [fetchUserGameCount]);


    const newGame = () => {
        var battleFieldID = generateBattlefieldID()
        const formData = new FormData();
        formData.append('game_id', battleFieldID);
        formData.append('user_id', localStorage.getItem("user_id"));

        axios.post(domain + 'v1/registerGame', formData)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.status === 'true') {
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
        <>
            <Logout />
            <Row>
                <Col span={18} offset={3}>
                    <Button type="primary" onClick={newGame}>
                        New Game
                    </Button>
                    <br />
                    <br />
                    <Title level={1}>Welcome, {name}</Title>
                    <br />
                    <br />
                    <Row className="textCenter">
                        <Col span={11}>
                            <Card title="Games Won" bordered={false}>
                                <Tag color="green">
                                    <Title level={2}>{userGameWon}</Title>
                                </Tag>
                            </Card>
                        </Col>
                        <Col span={11} offset={1}>
                            <Card title="Games Lost" bordered={false}>
                                <Tag color="volcano">
                                    <Title level={2}>{userGameLost}</Title>
                                </Tag>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Gamehistorydata />
                    <Topgamers />
                </Col>
            </Row>


        </>
    );

};

export default Dashboard;