import React from 'react';
import { Row, Table, Col } from 'react-bootstrap';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, ResponsiveContainer, Legend, Scatter, ScatterChart } from 'recharts';
import logo from '../logo.svg';

const Graph = props => {
    //example data for learning how to use Recharts
    const data1 = [{ week: 1, ranking: 1}, {week: 2, ranking: 2}, { week: 3, ranking: 2},{ week: 4, ranking: 3},{ week: 5, ranking: 3},{ week: 6, ranking: 3},]
    const data2 = [{ week: 1, ranking: 2}, {week: 2, ranking: 1}, { week: 3, ranking: 1},{ week: 4, ranking: 1},{ week: 5, ranking: 1},{ week: 6, ranking: 1},]
    const data3 = [{ week: 1, ranking: 3}, {week: 2, ranking: 3}, { week: 3, ranking: 2},{ week: 4, ranking: 2},{ week: 5, ranking: 2},{ week: 6, ranking: 2},]

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="week" name="week" />
                    <YAxis type="number" dataKey="ranking" name="ranking" />
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
