import React, {useState} from "react";
import './register.css'

import Axios from 'axios'


import {FaUserShield} from 'react-icons/fa'
import {BsCalendarDate} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'
import {BsFillHouseCheckFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import {MdOutlineSwipeRight} from 'react-icons/md'
import {FaHandHoldingWater} from 'react-icons/fa'

const Register =() =>{

  const [username, setUserName] = useState('')
  const [Accountno, setAccountNo] = useState('')
  const [mobile, setMobile] = useState('')
  const [nic, setNIC] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('');

  const createUser = ()=>{

   // Validate AccountNo pattern and length
   const accountNoPattern = /^(?:\d{2}-\d{2}-\d{3}-\d{3}-\d{2})$/;
   if (!accountNoPattern.test(Accountno) || Accountno.length !== 16) {
     setError('Invalid AccountNo');
     return;
   }

    Axios.post('http://localhost:3002/register', {

      UserName: username,
      AccountNo: Accountno,
      Mobile: mobile,
      Nic: nic,
      Address: address,
      Email: email,
      Password: password,
      RegDate: date
    }).then(()=>{
      console.log('User has been created')
    })

  }

  
  return(
      <>
      <div className="formDiv flex">
        <div className="headerDiv">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <FaHandHoldingWater className="icon"/> 
            </a>
          </div>
          <h3>Welcome All!</h3><br/>
          <h4>Register Status will go here</h4>

          {error && (
        <div className="error-box">
          <span className="error-message">{error}</span>
        </div>
      )}
        </div>

        <form action="" className='form grid'>
        {error && <span className="error">{error}</span>}
          
          <div className="inputDiv">
            <label htmlFor="username">Consumer Name</label>
            <div className="input flex">
              <FaUserShield className='icon' />
              <input type="text" id='username' placeholder='Enter your Name' onChange={(event)=>{
                setUserName(event.target.value)

              }}/>
            </div>

          </div>

          <div className="inputDiv">
            <label htmlFor="Accountno">Consumer Account Number</label>
            <div className="input flex">
              <MdOutlineVerifiedUser className='icon' />
              <input type="text" id='Accountno' placeholder='Enter your Account Number' onChange={(event)=>{
                setAccountNo(event.target.value)

              }} />
            </div>

          </div>

          <div className="inputDiv">
            <label htmlFor="mobile">Mobile Number</label>
            <div className="input flex">
              <BsTelephoneFill className='icon' />
              <input type="text" id='mobile' placeholder='Enter your Mobile Number' onChange={(event)=>{
                setMobile(event.target.value)

              }}/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="nic">Consumer NIC</label>
            <div className="input flex">
              <FaUserShield className='icon' />
              <input type="text" id='nic' placeholder='Enter your NIC' onChange={(event)=>{
                setNIC(event.target.value)

              }}/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="address">Consumer Address</label>
            <div className="input flex">
              <BsFillHouseCheckFill className='icon' />
              <textarea name="address" rows="5" cols="28" onChange={(event)=>{
                setAddress(event.target.value)

              }}/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="email">Consumer Email</label>
            <div className="input flex">
              <MdEmail className='icon' />
              <input type="email" id='email' placeholder='Enter your Email' onChange={(event)=>{
                setEmail(event.target.value)

              }}/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="pwd">Consumer Password</label>
            <div className="input flex">
              <RiLockPasswordLine className='icon' />
              <input type="password" id='pwd' placeholder='Enter your Password' onChange={(event)=>{
                setPassword(event.target.value)

              }}/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="regDate">Date</label>
            <div className="input flex">
              <BsCalendarDate className='icon' />
              <input type="date" id='regDate' placeholder='Select Date' onChange={(event)=>{
                setDate(event.target.value)

              }}/>
            </div>
          </div>

          <button type='submit' className='btn' onClick={createUser}>
            <span>Register</span>
            <MdOutlineSwipeRight className='icon' />
          </button>
        </form>
        
      </div>
      
      

      
    </>
  )
    
}
export default Register