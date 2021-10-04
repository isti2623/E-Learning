import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowMongo from '../ShowMongo/ShowMongo';

const Mongo = () => {
    const [mongos, setMongos] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/isti2623/fake-data/main/mongo.json")
            .then(res => res.json())
            .then(data => setMongos(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="fw-bold text-success  mt-3">Mongo DB</h2>
            </div>

            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 my-3">
                    {
                        mongos.slice(0, 3).map(mongo => <ShowMongo
                            key={mongo.id}
                            mongo={mongo}
                        >
                        </ShowMongo>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Mongo;