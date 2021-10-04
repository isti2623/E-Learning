import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ShowCourseDetails = () => {
    const { id } = useParams();
    const [courseItem, setCourseItem] = useState([]);
    useEffect(() => {
        const url = `https://raw.githubusercontent.com/isti2623/fake-data/main/all.json/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setCourseItem(data));
    }
        , [id]);
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="mt-5 img-fluid" src={courseItem.img} alt="" srcset="" />
                    </Col>
                    <Col md={6}>
                        <div className="ms-5 mt-5" >
                            <h1 className="fw-bold text-warning mt-5"><span className="text-dark">Name:</span> {courseItem.name}</h1>
                            <hr />
                            <h4 className=" text-dark mt-5"> <span className="text-warning"></span> Description: {courseItem.description}</h4>
                            <h2 className=" text-dark mt-5"> <span className="text-warning">Author::</span>  {courseItem.author}</h2>
                            <Row md={6}>
                                <Col>
                                    <Button onClick="handleCart" className="fw-bold" variant="warning">Order Now</Button>
                                </Col>
                                <Col>
                                    <Button className="fw-bold" variant="warning">All Courses</Button>
                                </Col>
                            </Row>



                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShowCourseDetails;