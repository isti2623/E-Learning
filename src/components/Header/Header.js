import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink
                    className="text-white fs-2 fw-bold"
                    to="/"

                >
                    E-Learning
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                                className="text-white text-decoration-none"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    textDecoration: "underline"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="text-white text-decoration-none"
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    textDecoration: "underline"
                                }}
                            >
                                About E-Learing
                            </NavLink>
                            <NavLink
                                className="text-white text-decoration-none"
                                to="/courses"
                                activeStyle={{
                                    fontWeight: "bold",
                                    textDecoration: "underline"
                                }}
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                className="text-white text-decoration-none"
                                to="/cart"
                                activeStyle={{
                                    fontWeight: "bold",
                                    textDecoration: "underline"
                                }}
                            >
                                Cart<FontAwesomeIcon icon={faCartPlus} />
                            </NavLink>
                        </Stack>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;