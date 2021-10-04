import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowWeb from '../ShowWeb/ShowWeb';

const Web = () => {
    const [webs, setWebs] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/isti2623/fake-data/main/web.json")
            .then(res => res.json())
            .then(data => setWebs(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="fw-bold text-danger  mt-3">Web Development</h2>
            </div>

            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 my-3">
                    {
                        webs.slice(0, 3).map(web => <ShowWeb
                            key={web.id}
                            web={web}
                        >
                        </ShowWeb>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Web;