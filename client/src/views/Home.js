
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';


const Home = () => {
    const [memberList, setMemberList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/members")
            .then(res => {
                setMemberList(res.data);
                setLoaded(true);
            })
    })

    return (
        <div>
            <NavBar />
            <div className="wrapper">
                <h3>Welcome to the home of the Goons that play fantasy sports!</h3>
                <h3>Member List</h3>
                {
                    loaded && memberList.map((member,i) => {
                        return <h6 key={i}>{member.name}</h6>
                    })
                }
            </div>
        </div>
    )
}

export default Home;