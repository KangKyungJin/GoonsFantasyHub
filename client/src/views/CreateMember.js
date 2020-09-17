import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import MemberForm from '../components/MemberForm';
import { Nav } from 'react-bootstrap';
import NavBar from '../components/NavBar';

const CreateMember = props => {
    const [members, setMembers] = useState();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`https://fantasy.espn.com/apis/v3/games/ffl/seasons/2020/segments/0/leagues/548652?view=mTeam`)
            .then(res => {
                setMembers(res.data)
            })
    }, [])

    const createMember = member => {
        axios.post('http://localhost:8000/api/members', member)
            .then(res => navigate('/'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr= [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return(
        <div>
            <NavBar />
            <div className="container">
                {
                    errors.map((err, i) => <p key={i} style={{color:"red"}}>{err}</p>)
                }
                <MemberForm initialName="" initialYear="" initialStats="" onSubmitProp={createMember} />
            </div>
        </div>
    )
    
}

export default CreateMember;