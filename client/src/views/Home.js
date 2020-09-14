import { Router } from '@reach/router';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Standings from '../components/Standings';

const Home = () => {

    return (
        <div>
            <NavBar />
            <br />
            <Router>
                <Standings path="/standings"/>
            </Router>
        </div>
    )
}

export default Home;