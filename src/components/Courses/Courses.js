import React, { useEffect, useState } from 'react';
import { Container, FormControl, Row } from 'react-bootstrap';
import ShowCourses from '../ShowCourses/ShowCourses';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/isti2623/fake-data/main/all.json")
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setDisplayProducts(data);
            });

    }, [])
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = courses.filter(course => course.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }
    return (
        <div>

            <div>
                <h2 className="fw-bold text-dark fs-1 text-center  my-5">Our Courses</h2>
            </div>


            <Container>
                <FormControl
                    onChange={handleSearch}
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="search your e-learning courses"
                />
                <Row xs={1} md={2} lg={3} className="g-4 my-3">
                    {
                        displayProducts.map(course => <ShowCourses
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