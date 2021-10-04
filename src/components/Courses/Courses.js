import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowCourses from '../ShowCourses/ShowCourses';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/isti2623/fake-data/main/all.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="fw-bold text-dark fs-1 text-center  my-5">Our Courses</h2>
            </div>

            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 my-3">
                    {
                        courses.map(course => <ShowCourses
                            key={course.id}
                            course={course}
                        >
                        </ShowCourses>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Courses;