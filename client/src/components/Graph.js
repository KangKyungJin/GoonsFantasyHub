import React from 'react';
import { Row, Table, Col } from 'react-bootstrap';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, ResponsiveContainer, Legend, Scatter, ScatterChart } from 'recharts';
import logo from '../logo.svg';

const Graph = props => {
    //example data for learning how to use Recharts
    const data1 = [{ x: 1, y: 1}, {x: 2, y: 2}, { x: 3, y: 2},{ x: 4, y: 3},{ x: 5, y: 3},{ x: 6, y: 3},]
    const data2 = [{ x: 1, y: 2}, {x: 2, y: 1}, { x: 3, y: 1},{ x: 4, y: 1},{ x: 5, y: 1},{ x: 6, y: 1},]
    const data3 = [{ x: 1, y: 3}, {x: 2, y: 3}, { x: 3, y: 2},{ x: 4, y: 2},{ x: 5, y: 2},{ x: 6, y: 2},]

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="week" />
                    <YAxis type="number" dataKey="y" name="ranking" />
                    <Tooltip />
                    <Legend />
                    <Scatter name="Team 1" data={data1} fill="#8884d8" line shape={logo} />
                    <Scatter name="Team 2" data={data2} fill="#82ca9d" line shape="diamond" />
                    <Scatter name="Team 3" data={data3} fill="#202020" line shape="triangle" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>

    )
}

export default Graph;
