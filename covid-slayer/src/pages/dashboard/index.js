import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Table, Tag, Typography, Space } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const playerGameColumns = [
    {
        title: 'Game ID',
        dataIndex: 'GAME_ID',
        key: 'GAME_ID',
    },
    {
        title: 'STATUS',
        key: 'STATUS',
        dataIndex: 'STATUS',
        render: STATUS => (
            <>{STATUS === 'WON' ?
                <Tag color="green" key={STATUS}>
                    {STATUS}
                </Tag>
                :
                <Tag color="volcano" key={STATUS}>
                    {STATUS}
                </Tag>
            }
            </>
        ),
    },
    {
        title: 'Date',
        dataIndex: 'DATE',
        key: 'DATE',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Check Game Log</a>
            </Space>
        ),
    },
];

const topGainerLosersColumns = [
    {
        title: 'PLAYER ID',
        dataIndex: 'USER_ID',
        key: 'USER_ID',
    },
    {
        title: 'COUNT',
        dataIndex: 'COUNT',
        key: 'COUNT',
    },
];

const Dashboard = () => {
    const [gameHistory, setGameHistory] = useState([]);
    const [topGainer, setTopGainers] = useState([]);
    const [topLosers, setTopLosers] = useState([]);
    const history = useHistory();
    const domain = "http://localhost:8080/";

    const fetchUserGames = useCallback(async () => {
        const formData = new FormData();
        formData.append('id', localStorage.getItem("user_id"));

        axios.post(domain + 'v1/getUserGameLog', formData)
            .then((response) => {
                if (response.status === 200) {
                    setGameHistory(response.data)
                } else {
                    console.log("failed");
                }
            }, (error) => {
                console.log(error)
            });
    }, [domain]);

    const fetchTopGainerLoser = useCallback(async () => {
        const formData = new FormData();
        formData.append('id', localStorage.getItem("user_id"));

        axios.post(domain + 'v1/getTopGainerandLosers', formData)
            .then((response) => {
                if (response.status === 200) {
                    setTopGainers(response.data.GAINERS);
                    setTopLosers(response.data.LOSERS);
                } else {
                    console.log("failed");
                }
            }, (error) => {
                console.log(error)
            });
    }, [domain]);

    useEffect(() => {
        fetchUserGames();
        fetchTopGainerLoser();
    }, [fetchUserGames,fetchTopGainerLoser]);


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
        <>
            <Row>
                <Col span={18} offset={3}>
                    <Button type="primary" onClick={newGame}>
                        New Game
                    </Button>
                    <Row>
                        <Col span={11} >
                            <Title level={2}>Your Game History</Title>
                            <Table columns={playerGameColumns} dataSource={gameHistory} size="small" />
                        </Col>
                        <Col span={11} offset={1}>
                            <Title level={2}>Top Players</Title>
                            <Table columns={topGainerLosersColumns} dataSource={topGainer} size="small" />
                        </Col>
                        <Col span={11} offset={1}>
                            <Title level={2}>Top Losers</Title>
                            <Table columns={topGainerLosersColumns} dataSource={topLosers} size="small" />
                        </Col>
                    </Row>
                </Col>
            </Row>


        </>
    );

};

export default Dashboard;