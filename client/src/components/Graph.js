import React from 'react';
import { Row, Table, Col } from 'react-bootstrap';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts';

const Graph = props => {
    //example data for learning how to use Recharts
    const data = [
        {name: 'Page A', uv: 4000, pv: 2400},
        {name: 'Page B', uv: 3000, pv: 1398},
        {name: 'Page C', uv: 2000, pv: 9800}
    ]

    return (
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
    )
}

export default Graph;