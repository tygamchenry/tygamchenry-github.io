import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Giphy from './Giphy';
import SocialIcons from './SocialIcons';


export default function UnderConstruction() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Coming Soon!</h1>
                    <p>My portfolio is getting a facelift! Coming soon, so keep those eyes peeled. Thanks for stopping by!</p>
                    <SocialIcons />
                </Col>
                <Col>
                    <Giphy />
                </Col>
            </Row>
        </Container>
    );
}