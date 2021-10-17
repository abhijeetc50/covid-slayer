import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Table, Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const Topgamers = () => {
    const [topGainer, setTopGainers] = useState([]);
    const [topLosers, setTopLosers] = useState([]);
   //const domain = process.env.REACT_APP_API_URL;
   const domain = "https://64.227.185.251/public/index.php/";
    const topGainerLosersColumns = [
        {
            title: 'NAME',
            dataIndex: 'NAME',
            key: 'NAME',
        }, {
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
        fetchTopGainerLoser();
    }, [fetchTopGainerLoser]);


    return (
        <Row>
            <Col span={11}>
                <Title level={2}>Top Players</Title>
                <Table columns={topGainerLosersColumns} dataSource={topGainer} size="small" />
            </Col>
            <Col span={11} offset={1}>
                <Title level={2}>Top Losers</Title>
                <Table columns={topGainerLosersColumns} dataSource={topLosers} size="small" />
            </Col>
        </Row>
    );

};

export default Topgamers;