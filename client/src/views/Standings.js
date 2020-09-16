import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Row, Table, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Graph from '../components/Graph';

const Standings = props => {
    const [teams, setTeams] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const year = props.year;

    useEffect(() => {
        axios.get(`https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/548652?view=mTeam`)
            .then(res => {
                setTeams(res.data.teams);
                console.log(res.data.teams);
                setLoaded(true);
            })
    }, [year]);

    return (
        <div>
            <NavBar />
            <div className="container">
                <h3>Goons Standings</h3>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Team Name</th>
                                    <th>Season Record</th>
                                    <th>Points For</th>
                                    <th>Points Against</th>
                                    <th>Standing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loaded && teams.map((team, i) => {
                                        return <tr key={i}>
                                            <td>{team.location} {team.nickname}</td>
                                            <td>{team.record.overall.wins} W | {team.record.overall.losses} L</td>
                                            <td>{team.record.overall.pointsFor}</td>
                                            <td>{team.record.overall.pointsAgainst}</td>
                                            <td>{team.currentProjectedRank}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {
                    loaded && <Graph data={teams}/>
                }
            </div>
        </div>
    )
}

export default Standings;