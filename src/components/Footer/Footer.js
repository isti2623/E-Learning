import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark mt-5 p-5 container-custom">
            <Container>
                <Row>
                    <Col lg={4}>
                        <h2 className="text-white fw-bold">Our Location</h2>
                        <p className="text-white fw-bold">Uk Based Locally World Wide</p>
                        <p className="text-white fw-bold">2911 , Newton Road</p>
                        <p className="text-white fw-bold">Mirpur , Dhaka</p>
                    </Col>
                    <Col lg={4}>
                        <Link className="text-white my-5" to="/home">Home</Link> <br />
                        <Link className="text-white my-5" to="/about">About</Link> <br />
                        <Link className="text-white my-5" to="/courses">Courses</Link> <br />
                        <Link className="text-white mt-5" to="/cart">Cart</Link>
                    </Col>
                    <Col lg={4}>
                        <h2 className="text-white fw-bold">Contact Us</h2>
                        <p className="text-white fw-bold">+05564855566</p>
                        <p className="text-white fw-bold">Phone : +824445</p>
                        <p className="text-white fw-bold">Dhaka</p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;