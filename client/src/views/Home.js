
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';


const Home = () => {

    return (
        <div>
            <NavBar />
            <div className="wrapper">
                <h3>Welcome to the home of the Goons that play fantasy sports!</h3>
            </div>
        </div>
    )
}

export default Home;