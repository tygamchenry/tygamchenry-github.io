import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialIcons from './SocialIcons';
import styles from './UnderConstruction.module.scss';
import Video from './Video';

export default function UnderConstruction() {

    return (
        <Container className={`${styles.UContainer}`}>
            <Row>
                <Col className={`d-flex flex-column align-items-center justify-content-center ${styles.font}`} >
                    <h1>My new portfolio is on the way.</h1>
                    <Video />
                    <p>Until then, visit the links below to see what else I've been up to.</p>
                    <SocialIcons />
                </Col>
            </Row>
        </Container>
    );
}