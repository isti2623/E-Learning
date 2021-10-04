import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const ShowMongo = (props) => {
    const { name, img, price } = props.mongo;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {price}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="success">Show Details</Button>
                </Card>
            </Col>
        </div>
    );
};

export default ShowMongo;