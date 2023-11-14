import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialIcons from './SocialIcons';
import styles from './UnderConstruction.module.scss';
import Video from './Video';

export default function UnderConstruction() {

    return (
        <Container >
            <Row className='font-container'>
                <Col className={`d-flex flex-column align-items-center justify-content-center ${styles.font}`} >
                    <h1>Under Construction</h1>
                    <p>My portfolio is getting a facelift, and will be coming soon. <br />Thanks for stopping by!</p>
                </Col>
                <Col className='d-flex flex-column align-items-center justify-content-center'>
                    <Video />
                </Col>
            </Row>
            <SocialIcons />
        </Container>
    );
}