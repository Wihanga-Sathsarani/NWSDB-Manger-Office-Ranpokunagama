import React from 'react' 
import './requests.css'

import {FaUserShield} from 'react-icons/fa'
import {BsCalendarDate} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'
import {BsFillHouseCheckFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import {MdOutlineSwipeRight} from 'react-icons/md'
import {FaHandHoldingWater} from 'react-icons/fa'



const Requests = () =>{
    return (


        <div className="requestformDiv flex">
        
            <div className="headerDiv">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <FaHandHoldingWater className="icon"/> 
                    </a>
                </div>
                <h3>Welcome All!</h3><br/>
                <h4>Request Status will go here</h4>
            </div>

            <form action="" className='form grid'>
                <div className="inputDiv">
                    <label htmlFor="uname"> Name</label>
                    <div className="input flex">
                        <FaUserShield className='icon' />
                        <input type="text" id='uname' placeholder='Enter your Name' />
                    </div>

                </div>

          

                <div className="inputDiv">
                    <label htmlFor="umobile">Mobile Number</label>
                    <div className="input flex">
                        <BsTelephoneFill className='icon' />
                        <input type="text" id='umobile' placeholder='Enter your Mobile Number' />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="unic">Consumer NIC</label>
                    <div className="input flex">
                        <FaUserShield className='icon' />
                        <input type="text" id='unic' placeholder='Enter your NIC' />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="uaddress">Consumer Address</label>
                    <div className="input flex">
                        <BsFillHouseCheckFill className='icon' />
                        <textarea name="uaddress" rows="5" cols="28" />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="uemail">Consumer Email</label>
                    <div className="input flex">
                        <MdEmail className='icon' />
                        <input type="uemail" id='email' placeholder='Enter your Email' />
                    </div>
                </div>

                <div className='inputDiv'>
                    <label htmlFor='reqdoc'>Attach Supported document</label>
                    <div className='input flex'>
                        <BsTelephoneFill className='icon' />
                        <input type='file' id='reqdoc'  required />
                    </div>
                </div>

                

                <div className="inputDiv">
                    <label htmlFor="reqtype">Consumer Password</label>
                    <div className="input flex">
                        <RiLockPasswordLine className='icon' />
                        <select id="reqtype" name="reqtype">
                            <option value="newconn">New Connection Requet</option>
                            <option value="chareq">Name change Request</option>
                        </select>
              
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="regDate">Date</label>
                    <div className="input flex">
                        <BsCalendarDate className='icon' />
                        <input type="date" id='regDate' placeholder='Select Date' />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="cattype">Water Category Type</label>
                    <div className="input flex">
                        <RiLockPasswordLine className='icon' />
                        <select id="cattype" name="cattype">
                            <option value=""> Select your category type </option>
                            <option value="Domestic"> Domestic </option>
                            <option value="Tempale"> Tempale </option>
                            <option value="Business"> Business </option>
                        </select>
              
                    </div>
                </div>

                

                <button type='submit' className='btn' >
                    <span>Submit</span>
                    <MdOutlineSwipeRight className='icon' />
                </button>
            </form>
        
        </div>
      
      

      
    )
}

export default Requests