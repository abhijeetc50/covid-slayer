import React from 'react';
import { Typography, List } from 'antd';
import './style.css';

const { Title } = Typography;

const Commentarybox = ({ commentary }) => {
    return (
        <>
            <Title level={2}>Commentary Box</Title>
            <List
                className="scrollableList"
                size="small"
                bordered
                dataSource={commentary}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </>
    );

};

export default Commentarybox;