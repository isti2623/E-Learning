import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowDart from '../ShowDart/ShowDart';

const Dart = () => {
    const [darts, setDarts] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/isti2623/fake-data/main/dart.json")
            .then(res => res.json())
            .then(data => setDarts(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="fw-bold text-primary  mt-3">Dart And FLutter Programming</h2>
            </div>

            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 my-3">
                    {
                        darts.slice(0, 3).map(dart => <ShowDart
                            key={dart.id}
                            dart={dart}
                        >
                        </ShowDart>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Dart;