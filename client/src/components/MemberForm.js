import React, {useState} from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';

const MemberForm = props => {
    const {initialName, initialYear, initialStats, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    const [year, setYear] = useState(initialYear);
    const [stats, setStats] = useState(initialStats);
    const newStats = {
        week: 0,
        posRank: 0,
        powScore: 0,
        powRank: 0,
        pointsF: 0,
        pointsA: 0
    }

    
    const onSubmitHandler = e => {
        e.preventDefault();
        setStats([...stats, newStats])
        onSubmitProp({name, year, stats})
    }

    return (
        <div>
            <div className="container w-50">
                <Card>
                    <Card.Body>
                        <form onSubmit={onSubmitHandler}>
                            <Row>
                                <Col>
                                    <label>Team Name</label>
                                    <input className="form-control" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Year</label>
                                    <input className="form-control" type="number" name="year" value={year} onChange={(e) => setYear(e.target.value)} />
                                </Col>
                                <Col>
                                    <label>Week</label>
                                    <input className="form-control" type="number" name="week" onChange={(e) => newStats.week = e.target.value} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Position Rank</label>
                                    <input className="form-control" type="number" name="posRank" onChange={(e) => newStats.posRank = e.target.value} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Power Score</label>
                                    <input className="form-control" step=".01" type="number" name="powScore" onChange={(e) => newStats.powScore = e.target.value} />
                                </Col>
                                <Col>
                                    <label>Power Rank</label>
                                    <input className="form-control" type="number" name="powRank" onChange={(e) => newStats.powRank = e.target.value} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Points For</label>
                                    <input className="form-control" step=".01" type="number" name="pointsF" onChange={(e) => newStats.pointsF = e.target.value} />
                                </Col>
                                <Col>
                                    <label>Points Against</label>
                                    <input className="form-control" step=".01" type="number" name="pointsA" onChange={(e) => newStats.pointsA = e.target.value} />
                                </Col>
                            </Row>
                            <br />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default MemberForm;