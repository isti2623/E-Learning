import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import not from '../../images/not.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <Container className="main-container">
                <img className="error-img" src={not} alt="" />
                <h2 className="fw-bold fs-1 text-center">Page Not Found . 404!</h2>
                <Link to="/home">
                    <Button className="btn-custom" variant="success">Back To Home Page</Button>
                </Link>

            </Container>

        </div>
    );
};

export default NotFound;