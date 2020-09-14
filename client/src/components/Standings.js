import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Row, Table, Col } from 'react-bootstrap';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts';

const Standings = () => {
    const [teams, setTeams] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/548652?view=mTeam')
            .then(res => {
                setTeams(res.data.teams);
                console.log(res.data.teams);
                setLoaded(true);
            })
    }, []);

    const data = [
        {name: 'Page A', uv: 4000, pv: 2400},
        {name: 'Page B', uv: 3000, pv: 1398},
        {name: 'Page C', uv: 2000, pv: 9800}
    ]

    return (
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
                                <th>Final Standing</th>
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
                                        <td>{team.rankCalculatedFinal}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5}}>
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }}/>
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        <Line type="monotone" dataKey="pv" stroke="#387908" />
                    </LineChart>
                </Col>
            </Row>
        </div>
    )
}

export default Standings;