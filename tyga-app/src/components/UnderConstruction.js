import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Giphy from './Giphy';


function UnderConstruction() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Coming Soon!</h1>
                    <p>My portfolio is getting a facelift! Coming soon, so keep those eyes peeled. Thanks for stopping by!</p>
                </Col>
                <Col>
                    <Giphy />
                </Col>
            </Row>
        </Container>
    );
}

export default UnderConstruction;