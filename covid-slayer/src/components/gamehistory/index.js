import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Table, Tag, Typography, Space } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const Gamehistorydata = () => {
    const [gameHistory, setGameHistory] = useState([]);
    //const domain = process.env.REACT_APP_API_URL;
    const domain = "https://64.227.185.251/public/index.php/";
   
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
                    <div>Check Game Log</div>
                </Space>
            ),
        },
    ];

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

    useEffect(() => {
        fetchUserGames();
    }, [fetchUserGames]);


    return (
        <Row>
            <Col span={16} >
                <Title level={2}>Your Game History</Title>
                <Table columns={playerGameColumns} dataSource={gameHistory} size="small" />
            </Col>
        </Row>
    );

};

export default Gamehistorydata;