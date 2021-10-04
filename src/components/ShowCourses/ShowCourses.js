import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ShowCourses = (props) => {
    const { name, img, price, id } = props.course;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/fooddetails/${id}`);
    }
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
                    <Button onClick={handleClick} variant="primary">Show Details</Button>
                </Card>
            </Col>
        </div>
    );
};

export default ShowCourses;