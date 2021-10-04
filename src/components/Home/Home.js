import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Dart from '../Dart/Dart';
import Mongo from '../Mongo/Mongo';
import Web from '../Web/Web';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Dart></Dart>
            <Web></Web>
            <Mongo></Mongo>
        </Container>
    );
};

export default Home;