import React from 'react'
import './Home.css'
import Featureinfo from '../../Featuredinfo/Featureinfo'
import Chart from '../../charts/Chart'
import { userData } from '../../../dummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'

export default function Home() {
return (
    <div className="home">
        <Featureinfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
        <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />

        </div>
    </div>
)
}
