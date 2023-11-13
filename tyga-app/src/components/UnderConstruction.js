import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Giphy from './Giphy'; 
import SocialIcons from './SocialIcons';
import styles from './UnderConstruction.module.scss';
import video from './../assets/images/lady-working.mp4';


export default function UnderConstruction() {
    return (
        <Container style={{height: '83vh'}}>
            <Row className='h-75 font-container'>
                <Col className={`d-flex flex-column align-items-center justify-content-center ${styles.font}`} md={6}>
                    <h1>Coming Soon!</h1>
                    <p>My portfolio is getting a facelift! Coming soon, so keep those eyes peeled. Thanks for stopping by!</p>
                    <SocialIcons />
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center" md={6}>
                    <video autoPlay loop muted>
                        <source 
                        src={video} 
                        type="video/mp4"
                        alt="animation of woman working at the computer"
                        />
                    </video>
                </Col>
            </Row>
        </Container>
    );
}