import React, { useState } from 'react';
import { Row, Col, Progress, Button, List } from 'antd';
import { Typography } from 'antd';
import styles from './style.css';

import ModalPopup from './../../components/modal';

const { Title } = Typography;

const Battlefield = ({ id }) => {
    const [playerhealth, setPlayerhealth] = useState(100);
    const [covidMonsterHealth, setCovidMonsterHealth] = useState(100);
    const [battleFieldID, setBattleFieldID] = useState('');
    const [winner, setWinner] = useState('');
    const [commentary, setCommentary] = useState([]);
    const [winnerModal, setWinnerModal] = useState(false);

    const attackCovidMonster = () => {
        var attackMonster = randomAttackNumber(1, 10);
        var attackPlayer = randomAttackNumber(1, 10);

        var updatedCommentary = [...commentary, "Monster attacks the player by " + attackPlayer];
        setCommentary(updatedCommentary);
        updatedCommentary = [...updatedCommentary, "Player attacks the monster by " + attackMonster];
        setCommentary(updatedCommentary);

        setCovidMonsterHealth(covidMonsterHealth - attackMonster);
        setPlayerhealth(playerhealth - attackPlayer);
        checkForWinner();
    }

    const blastCovidMonster = () => {
        var attackMonster = randomAttackNumber(10, 20);
        var attackPlayer = randomAttackNumber(10, 20);

        var updatedCommentary = [...commentary, "Monster blast the player by " + attackPlayer];
        setCommentary(updatedCommentary);
        updatedCommentary = [...updatedCommentary, "Player blast the monster by " + attackMonster];
        setCommentary(updatedCommentary);

        setCovidMonsterHealth(covidMonsterHealth - attackMonster);
        setPlayerhealth(playerhealth - attackPlayer);
        checkForWinner();
    }

    const healCovidMonster = () => {
        var attackPlayer = randomAttackNumber(1, 10);
        var healPlayer = randomAttackNumber(10, 20);

        var updatedCommentary = [...commentary, "Monster attacks the player by " + attackPlayer];
        setCommentary(updatedCommentary);
        updatedCommentary = [...updatedCommentary, "Player heals by " + healPlayer];
        setCommentary(updatedCommentary);

        setPlayerhealth(playerhealth + healPlayer);
        setPlayerhealth(playerhealth - attackPlayer);
        checkForWinner();
    }

    const randomAttackNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const checkForWinner = () => {
        if (covidMonsterHealth <= 0 && playerhealth > 0) {
            setWinner('Player');
            setWinnerModal(true)
        } else if (playerhealth <= 0 && covidMonsterHealth > 0) {
            setWinner('Monster');
            setWinnerModal(true)
        }
    }

    return (
        <>
            <ModalPopup title="Winner Winner Chicken Dinner" content={winner} visible={winnerModal} />
            <Row>
                <Col span={12} offset={3}>
                    <Row className="battleField">
                        <Col span={20} offset={2}>
                            <Title level={2}>I am a timer</Title>
                        </Col>
                    </Row>
                    <Row className="battleField">
                        <Col span={12}>
                            <Title level={2}>You</Title>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#ED2938',
                                    '20%': '#ED2938',
                                    '40%': '#B25F4A',
                                    '60%': '#77945C',
                                    '80%': '#3BCA6D',
                                    '100%': '#00FF7F',
                                }}
                                percent={playerhealth}
                            />
                        </Col>
                        <Col span={12}>
                            <Title level={2}>Covid Monster</Title>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#ED2938',
                                    '20%': '#ED2938',
                                    '40%': '#B25F4A',
                                    '60%': '#77945C',
                                    '80%': '#3BCA6D',
                                    '100%': '#00FF7F',
                                }}
                                percent={covidMonsterHealth}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} offset={2}>
                            <Button type="danger" block size="large" onClick={attackCovidMonster}>
                                Attack
                            </Button>
                        </Col>
                        <Col span={4} offset={2}>
                            <Button type="danger" block size="large" onClick={blastCovidMonster}>
                                Blast
                            </Button>
                        </Col>
                        <Col span={4} offset={2}>
                            <Button type="success"
                                style={{ background: "#00cc00", borderColor: "#00cc00", color: "#fff" }}
                                block size="large" onClick={healCovidMonster}>
                                Heal
                            </Button>
                        </Col>
                        <Col span={4} offset={2}>
                            <Button type="primary" block size="large" onClick={attackCovidMonster}>
                                Give Up!
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={6} offset={1}>
                    <Title level={2}>Commentary Box</Title>
                    <List
                        className="scrollableList"
                        size="small"
                        bordered
                        dataSource={commentary}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Col>
            </Row>
        </>
    );

};

export default Battlefield;