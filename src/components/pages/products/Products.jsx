import './Products.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from "@material-ui/icons"
import { productRows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from 'react'

export default function Products() {

    const [data, setData] = useState(productRows)
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { 
            field: 'product', 
            headerName: 'Product', 
            width: 200, 
            renderCell: (params)=>{
            return(
                <div className='productList'>
                    <img src={params.row.image} alt="avatar" className='productListImg'/>
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 170 },
        { field: 'status', headerName: 'Status', width: 170 },
        { field: 'price', headerName: 'Price', width: 170 },
        { field: 'action', headerName: "Action", width: 150, renderCell: (params)=>{
            return(
                <>
                <Link to={"/product/"+ params.row.id}>
                <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        }}
        ];

    return (
        <div className="products">
            <DataGrid 
            rows={data} 
            disableSelectionOnClick 
            columns={columns} 
            pageSize={12} 
            checkboxSelection />
        </div>
    )
}
