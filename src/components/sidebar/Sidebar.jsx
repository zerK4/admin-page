import React from 'react'
import './Sidebar.css'
import { EqualizerOutlined ,ReportOffOutlined ,WorkOffOutlined, ChatBubbleOutline ,ForumOutlined, LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, MailOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
return (
<div className="sidebar">
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active"><LineStyle className='sidebarIcon'/>Home</li>
                <li className="sidebarListItem"><Timeline className='sidebarIcon'/>Analytics</li>
                <li className="sidebarListItem"><TrendingUp className='sidebarIcon'/>Sales</li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <Link to="/users"><li className="sidebarListItem"><PersonOutline className='sidebarIcon'/>Users</li></Link>
                <Link to="/products"><li className="sidebarListItem"><Storefront className='sidebarIcon'/>Products</li></Link>
                <li className="sidebarListItem"><AttachMoney className='sidebarIcon'/>Transactions</li>
                <li className="sidebarListItem"><EqualizerOutlined className='sidebarIcon'/>Reports</li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem"><MailOutline className='sidebarIcon'/>Mail</li>
                <li className="sidebarListItem"><ForumOutlined className='sidebarIcon'/>Feedback</li>
                <li className="sidebarListItem"><ChatBubbleOutline className='sidebarIcon'/>Messages</li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem"><WorkOffOutlined className='sidebarIcon'/>Manage</li>
                <li className="sidebarListItem"><Timeline className='sidebarIcon'/>Analytics</li>
                <li className="sidebarListItem"><ReportOffOutlined className='sidebarIcon'/>Reports</li>
            </ul>
        </div>
    </div>
</div>
)
}
