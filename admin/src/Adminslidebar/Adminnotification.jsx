import React, { useState } from "react";
import './adminnotificaion.css'
import Axios from 'axios';


import {BsCalendarDate} from 'react-icons/bs'

import {MdOutlineVerifiedUser} from 'react-icons/md'

import {MdOutlineSwipeRight } from 'react-icons/md'
const Adminnotification = () =>{

    const [notimsg, setNotimsg] = useState('')
    const [notidate, setNotidate] = useState('')

    const createNoti = ()=>{
        Axios.post('http://localhost:3002/adminnotification', {
            Notimsg: notimsg,
            Notidate: notidate
        }).then(()=>{
            console.log('Notificaton has been created')
        })
    }
    

    return (
        <div className='adminnotification'>
            <h1 className='mainhead1'> Send Notification</h1>
            <form action="" className='form grid'>
                
                <div className="inputDiv">
                    <label htmlFor="notimsg">Message</label>
                    <div className="input flex">
                        <MdOutlineVerifiedUser className='icon' />
                        <input type="text" id='notimsg"' placeholder='Type Your Message Here' onChange={(event)=>{
                            setNotimsg(event.target.value)
                        }} required />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="notidate">Date</label>
                    <div className="input flex">
                        <BsCalendarDate className='icon' />
                        <input type="date" id='notidate' placeholder='Select Date' onChange={(event)=>{
                            setNotidate(event.target.value)
                        }} required />
                    </div>
                </div>
                
                
                <button className='btn' type="submit" onClick={createNoti}>
                    <span>Submit</span>
                    <MdOutlineSwipeRight className='icon' />
                </button>
                
            </form>
            

            
        </div>
    )
}
export default Adminnotification