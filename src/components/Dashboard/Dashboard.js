import './Dashboard.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = props => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <NavBar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        information and stuff
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;
