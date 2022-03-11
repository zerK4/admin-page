import React from 'react'
import './Chart.css'
import { userData } from "../../dummyData"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart({title, data, dataKey, grid}) {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={userData}>
                    <XAxis dataKey="name" stroke='#333' />
                    <Line type="monotone" dataKey={dataKey} stroke="#333"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#f0f0f0'/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
