import React from 'react';
import { Card, Container } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h2 className="text-center text-info my-5 fw-bold fs-1">Changing learning for the better</h2>
            <p className="text-center fw-bold">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.
            </p>
            <Container className="my-5">
                <Card className="my-5">
                    <Card.Header>Varun Patil
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                E-Learning fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.

                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                                Senior Manager of HR Development
                                <cite title="Source Title">HR Development</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className="my-5">
                    <Card.Header>Vargdgun Patilgd
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                In total, it was a big success, I would get emails about what a fantastic resource it was.

                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                                Senior Web of HR Development
                                <cite title="Source Title">HR Development</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className="my-5">
                    <Card.Header>ggedd Patil
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                E-Learning responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers.

                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                                Senior SEO of HR Development
                                <cite title="Source Title">HR Development</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default About;