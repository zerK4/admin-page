import React from 'react'
import './topbar.css'
import Avatar from './img/avatar.jpg' 
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">theApp</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className='iconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src={Avatar} alt="" className='avatar'></img>
            </div>
            
        </div>
    </div>
)
}
