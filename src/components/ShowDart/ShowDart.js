
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowDart = (props) => {
    const { name, img, price } = props.dart;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price :{price}$
                        </Card.Text>
                    </Card.Body>
                    {/*  <Button variant="primary">Show Details</Button> */}
                </Card>
            </Col>
        </div>
    );
};

export default ShowDart;