import React, {useState} from "react";
import './login.css'
import Axios from 'axios'

import {FaHandHoldingWater} from 'react-icons/fa'
import {FaUserShield } from 'react-icons/fa'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import {MdOutlineSwipeRight} from 'react-icons/md'
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [loginAccountNo, setLoginAccountNo] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  const loginUser = (e)=>{


    e.preventDefault();
    Axios.post('http://localhost:3002/login', {

      
      LoginAccountNo: loginAccountNo,
      LoginPassword: loginPassword
      
    }).then((response)=>{
      
      if (response.data.message) {
        console.log(response.data.message);

        navigateTo('/')
      }
      else{
        console.log(response.data);
        navigateTo('/consumer/:activepage')
      }

    })

  }
    return(
      <>
      <div className="loginformDiv flex">
        <div className="headerDiv">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <FaHandHoldingWater className="icon"/> 
            </a>
          </div>
          <h3>Welcome All!</h3>
        </div>

        <form action="" className='form grid'>
          <span>Login Status will go here</span>
          <div className="inputDiv">
            <label htmlFor="Accountno">Consumer Account Number</label>
            <div className="input flex">
              <FaUserShield className='icon' />
              <input type="text" id='Accountno' placeholder='Enter your Account Number'onChange={(event)=>{
                setLoginAccountNo(event.target.value)

              }}/>
            </div>

          </div>

          <div className="inputDiv">
            <label htmlFor="pwd">Password</label>
            <div className="input flex">
              <MdOutlineVerifiedUser className='icon' />
              <input type="password" id='pwd' placeholder='Enter your Password' onChange={(event)=>{
                setLoginPassword(event.target.value)

              }}/>
            </div>

          </div>

          <button type='submit' className='btn' onClick={loginUser}>
            <span>Login</span>
            <MdOutlineSwipeRight className='icon' />
          </button>
        </form>
      </div>
        
      
      
      
      </>
    )
    
  }
  export default Login