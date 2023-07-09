import React, { useEffect, useState } from "react";
import Axios from 'axios';

import { Link } from "react-router-dom";


function Registereddisplay() {

    const [data, setData] =useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:3002/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));

        
    }, []) 

    
    const handleDelete = (Accountno) => {
        Axios.delete('http://localhost:3002/delete/' + Accountno)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
    




    return(
        <div className='d-flex  align-items-center bg-dark '>
            <div className='bg-white rounded w-60 p-3'>
                <h2>Registered Consumers</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Account Number</th>
                            <th>Mobile</th>
                            <th>NIC</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Date</th>
                            <th>Action</th>

                           
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => {
                            return <tr key={i}>
                            
                                <td>{d.Cons_name}</td>
                                <td>{d.Account_no}</td>
                                <td>{d.Mobile}</td>
                                <td>{d.Nic}</td>
                                <td>{d.Address}</td>
                                <td>{d.Email}</td>
                                <td>{d.Password}</td>
                                <td>{d.Date}</td>
                                <td>
                                    <Link to={`/nameupdate/${d.Account_no}`} className='btn btn-sm btn-primary' >Update</Link>
                                    <button onClick={ () => handleDelete(d.Account_no)} className='btn btn-sm btn-danger' >Delete</button>

                                </td>
                            </tr>
                        })}
                    </tbody>
                    

                </table>

            </div>

        </div>
    )
}

export default Registereddisplay