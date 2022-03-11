import './Featureinfo.css'
import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function Featureinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.554</span>
                    <span className="featuredMoneyRate"> -14.5 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5.554</span>
                    <span className="featuredMoneyRate"> -1.5 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1.554</span>
                    <span className="featuredMoneyRate"> +24.5 <ArrowUpward className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
