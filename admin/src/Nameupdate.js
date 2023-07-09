
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from "axios";


function Nameupdate() {
    const {Accountno} = useParams();
    const [username, setUserName] = useState('')
    useEffect(()=>{
        Axios.get('http://localhost:3002/edit/'+Accountno)
        .then(res => {
            setUserName(res.data[0].Cons_name);
        })
        .catch(err => console.log(err));
    }, [])
    

    const navigate = useNavigate();
    const hanldeSubmit = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3002/nameupdate/'+Accountno, {username})
        .then(res => {
            if(res.data.updated) {
                navigate('/admin/registeredconsumers')
            } else {
                alert("Not Updated");
            }
        })
    }
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={hanldeSubmit}>
                    <h2>Name change</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' value={username}
                        onChange={e => setUserName(e.target.value)}/>
                    </div>
                    
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Nameupdate