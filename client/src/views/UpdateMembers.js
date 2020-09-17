import { Link } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import MemberForm from '../components/MemberForm';
import NavBar from '../components/NavBar';

const UpdateMembers = props => {
    const [members, setMembers] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/members")
            .then(res => {
                setMembers(res.data);
                setLoaded(true);
            })
    })

    return (
        <div>
            <NavBar />
            <div className="container">
                {
                    loaded && members.map((member, i) => {
                        return( <h5 key={i}>{member.name}</h5>)
                    })
                }
                <MemberForm />
            </div>
        </div>
    )
}

export default UpdateMembers;