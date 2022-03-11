import React from 'react'
import "./NewUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input className='inputCreate' type="text" placeholder='Name'/>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input className='inputCreate' type="text" placeholder='Full Name'/>
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input className='inputCreate' type="email" placeholder='Email'/>
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input className='inputCreate' type="Password" placeholder='Password'/>
            </div>
            <div className="newUserItem">
                <label>Phone number</label>
                <input className='inputCreate' type="text" placeholder='Phone'/>
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input className='inputCreate' type="text" placeholder='Address'/>
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name="gennder" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gennder" id="Female" value="Female" />
                    <label for="female">Female</label>
                    </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select name="active" id='active' className='newUserSelect'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">
                Create
            </button>
        </form>
    </div>
    )
}
