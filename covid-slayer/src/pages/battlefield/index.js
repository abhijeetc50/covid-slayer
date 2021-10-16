import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Progress, Button, List } from 'antd';
import { Typography } from 'antd';
import styles from './style.css';
import axios from 'axios';

import ModalPopup from './../../components/modal';

const { Title } = Typography;

const Battlefield = (match) => {
    const history = useHistory();
    const domain = "http://localhost:8080/";
    const battleFieldID = match.match.params.id
    const [playerhealth, setPlayerhealth] = useState(100);
    const [covidMonsterHealth, setCovidMonsterHealth] = useState(100);
    const [winner, setWinner] = useState('');
    const [commentary, setCommentary] = useState([]);
    const [winnerModal, setWinnerModal] = useState(false);

    const attackCovidMonster = (type) => {
        var attackMonster = '';
        var attackPlayer = '';
        if (type == 'attack') {
            attackMonster = randomAttackNumber(1, 10);
            attackPlayer = randomAttackNumber(1, 10);
            logGame(-attackMonster, 'player', 'attack');
            logGame(-attackPlayer, 'monster', 'attack');
        } else {
            attackMonster = randomAttackNumber(10, 20);
            attackPlayer = randomAttackNumber(10, 20);
            logGame(-attackMonster, 'player', 'blast');
            logGame(-attackPlayer, 'monster', 'blast');
        }

        var updatedCommentary = [...commentary, "Monster " + type + " the player by " + attackPlayer];
        setCommentary(updatedCommentary);
        updatedCommentary = [...updatedCommentary, "Player " + type + " the monster by " + attackMonster];
        setCommentary(updatedCommentary);

        var covidMonsterHealthTemp = covidMonsterHealth;
        var playerhealthTemp = playerhealth;

        setCovidMonsterHealth(covidMonsterHealthTemp - attackMonster);
        setPlayerhealth(playerhealthTemp - attackPlayer);
        checkForWinner(covidMonsterHealthTemp - attackMonster, playerhealthTemp - attackPlayer);
    }

    const healCovidMonster = () => {
        var attackPlayer = randomAttackNumber(1, 10);
        var healPlayer = randomAttackNumber(10, 20);
        logGame(healPlayer, 'player', 'heal');
        logGame(-attackPlayer, 'monster', 'attack');

        var updatedCommentary = [...commentary, "Monster attacks the player by " + attackPlayer];
        setCommentary(updatedCommentary);
        updatedCommentary = [...updatedCommentary, "Player heals by " + healPlayer];
        setCommentary(updatedCommentary);

        var covidMonsterHealthTemp = covidMonsterHealth;
        var playerhealthTemp = playerhealth;
        var playerhealthTemp = playerhealthTemp + healPlayer;
        var playerhealthTemp = playerhealthTemp - attackPlayer

        setPlayerhealth(playerhealthTemp);

        checkForWinner(covidMonsterHealthTemp, playerhealthTemp);
    }

    const giveUp = () => {
        logGameWinner('Monster');
        history.push('../dashboard/');
    }

    const randomAttackNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const checkForWinner = (newMonsterHealth, newPlayerHealth) => {

        if (newMonsterHealth <= 0) {
            setWinner('Player');
            setWinnerModal(true)
            logGameWinner('Player');
            history.push('../dashboard/');
        } else if (newPlayerHealth <= 0) {
            setWinner('Monster');
            setWinnerModal(true)
            logGameWinner('Monster');
            history.push('../dashboard/');
        }
    }

    const logGameWinner = (winnerPlayer) => {

        const formData = new FormData();
        formData.append('game_id', battleFieldID);
        formData.append('winner', winnerPlayer);

        axios.post(domain + 'v1/logGameWinner', formData)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.status == 'true') {

                    }
                } else {
                    console.log("failed");
                }
            }, (error) => {
                console.log(error)
            });
    }

    const logGame = (point, playertype, type) => {

        const formData = new FormData();
        formData.append('game_id', battleFieldID);
        formData.append('point', point);
        formData.append('playertype', playertype);
        formData.append('type', type);

        axios.post(domain + 'v1/logGame', formData)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.status == 'true') {

                    }
                } else {
                    console.log("failed");
                }
            }, (error) => {
                console.log(error)
            });
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
                            <Button type="danger" block size="large" onClick={() => attackCovidMonster('attack')}>
                                Attack
                            </Button>
                        </Col>
                        <Col span={4} offset={2}>
                            <Button type="danger" block size="large" onClick={() => attackCovidMonster('blast')}>
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
                            <Button type="primary" block size="large" onClick={giveUp}>
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