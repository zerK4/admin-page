import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneIphone, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from "react-router-dom"
import "./User.css"

export default function User() {
return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80" alt="" className="userShowImg" />

                <div className="userShowTopTitle">
                    <span className="userShowUsername">Sebastian Pavel</span>
                    <span className="userShowUserTitle">Software engineer</span>
                </div>
                </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">p.sebastian</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfoTitle">21.07.1995</span>
                </div>
                <span className="userShowTitle">Contact details</span>
                <div className="userShowInfo">
                <PhoneIphone className='userShowIcon'/>
                <span className="userShowInfoTitle">sebastian.v.pavel@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfoTitle">0747942342</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className='userShowIcon'/>
                <span className="userShowInfoTitle">S. Pep. 707317</span>
                </div>
            </div>
        </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='p.sebastian' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Pavel Sebastian' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='sebastian.v.pavel@gmail.com' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='0747942342' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Address' className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
            </form>
            </div>
        </div>
    </div>
)
}
