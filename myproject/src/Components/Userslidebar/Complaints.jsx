import React from "react";
import './complaints.css'

import {FaUserShield } from 'react-icons/fa'
import {BsCalendarDate} from 'react-icons/bs'
import {BsTelephoneFill} from 'react-icons/bs'
import {BsFillHouseCheckFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import {MdSpeakerNotes } from 'react-icons/md'
import {BiSelectMultiple } from 'react-icons/bi'
import {MdOutlineSwipeRight } from 'react-icons/md'
const Complaints = () =>{
    return (
        <div className='complaints'>
            <h1 className='mainhead1'> Capture Complaints</h1>
            <form action="" className='form grid'>
                
                <div className="inputDiv">
                    <label htmlFor="AccountNo">Consumer Account Number</label>
                    <div className="input flex">
                        <MdOutlineVerifiedUser className='icon' />
                        <input type="text" id='AccountNO' placeholder='Enter your Account Number'/>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="username">Consumer Name</label>
                    <div className="input flex">
                        <FaUserShield className='icon' />
                        <input type="text" id='username' placeholder='Enter your Namer'/>
                    </div>
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Consumer Email</label>
                    <div className="input flex">
                        <MdEmail className='icon' />
                        <input type="email" id='email' placeholder='Enter your Email'/>
                    </div>
                </div>
                <div className="inputDiv">
                    <label htmlFor="mobile">Consumer Mobile Number</label>
                    <div className="input flex">
                        <BsTelephoneFill className='icon' />
                        <input type="text" id='mobile' placeholder='Enter your Mobile Number'/>
                    </div>
                </div>
                <div className="inputDiv">
                    <label htmlFor="compltype">Complaint Type</label>
                    <div className="input flex">
                        <BiSelectMultiple className='icon' />
                        <select id="compltype" name="compltype">
                            <option value="connectionleak"> Conection Leak</option>
                            <option value="nowater"> No water</option>
                            <option value="waterleak"> Water leak</option>
                            <option value="quality"> Water Quality Problems</option>
                            <option value="other"> Other</option>
                            
                        </select>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="compldes">Complaint Description</label>
                    <div className="input flex">
                        <MdSpeakerNotes className='icon' />
                        <input type="text" id='compldes' placeholder='Enter your Complaint'/>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="address">Consumer Address</label>
                    <div className="input flex">
                        <BsFillHouseCheckFill className='icon' />
                        <textarea name="address" rows="5" cols="28"></textarea>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="regDate">Complaint Description</label>
                    <div className="input flex">
                        <BsCalendarDate className='icon' />
                        <input type="date" id='regDate' placeholder='Select Date'/>
                    </div>
                </div>
                
                <button className='btn'>
                    <span>Submit</span>
                    <MdOutlineSwipeRight className='icon' />
                </button>
                
            </form>
            

            
        </div>
    )
}
export default Complaints