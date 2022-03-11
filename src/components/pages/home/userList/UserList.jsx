import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from "@material-ui/icons"
import { userRows } from "../../../../dummyData"
import { Link } from "react-router-dom"

export default function UserList() {

    const [data, setData] = useState(userRows)
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }
    
const columns = [
{ field: 'id', headerName: 'ID', width: 90 },
{ field: 'username', headerName: 'Name', width: 150, renderCell: (params)=>{
    return(
        <div className='userListUser'>
            <img src={params.row.avatar} alt="avatar" className='UserListUserImg'/>
            {params.row.username}
        </div>
    )
} },
{ field: 'email', headerName: 'Email', width: 170 },
{ field: 'status', headerName: 'Status', width: 170 },
{ field: 'transaction', headerName: 'Transaction', width: 170 },
{ field: 'action', headerName: "Action", width: 150, renderCell: (params)=>{
    return(
        <>
        <Link to={"/user"+ params.row.id}>
        <button className="userListEdit">Edit</button>
        </Link>
        <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
        </>
    )
}}
];


    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
