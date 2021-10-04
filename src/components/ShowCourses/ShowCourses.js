import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const ShowCourses = (props) => {
    const { name, img, price } = props.course;
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
                    <Button variant="primary">Buy Now</Button>
                </Card>
            </Col>
        </div>
    );
};

export default ShowCourses;