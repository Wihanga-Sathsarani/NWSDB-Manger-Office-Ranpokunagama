import React, { useState } from "react";
import Axios from 'axios'
import {FaHandHoldingWater} from 'react-icons/fa'
import {FaUserShield } from 'react-icons/fa'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import {MdOutlineSwipeRight} from 'react-icons/md'
import './adminlogin.css'
import { useNavigate } from "react-router-dom";

const Adminlogin =() =>{

  const [loginadminuname , setLoginadminuname] = useState('')
  const [loginadminpassword, setLoginadminpassword] = useState('')
  const navigateTo = useNavigate()

  const loginAdmin = (e)=>{


    e.preventDefault();
    Axios.post('http://localhost:3002/adminlogin', {

      
      Loginadminuname: loginadminuname,
      Loginadminpassword: loginadminpassword
      
    }).then((response)=>{
      
      if (response.data.message) {
        console.log(response.data.message);

        navigateTo('/')
      }
      else{
        console.log(response.data);
        navigateTo('/admin/:activepage')
      }

    })

  }
    return(
        <>
        <div className="adminloginformDiv flex">
          <div className="headerDiv">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <FaHandHoldingWater className="icon"/> 
              </a>
            </div>
            <h3>Admin Login</h3>
          </div>
  
          <form action="" className='form grid'>
            <span>Login Status will go here</span>
            <div className="inputDiv">
              <label htmlFor="Adminuname">User Name</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input type="text" id='Adminuname' placeholder='Enter User Name' onChange={(event)=>{
                setLoginadminuname(event.target.value)

              }}/>
              </div>
  
            </div>
  
            <div className="inputDiv">
              <label htmlFor="adminpwd">Password</label>
              <div className="input flex">
                <MdOutlineVerifiedUser className='icon' />
                <input type="password" id='adminpwd' placeholder='Enter Password' onChange={(event)=>{
                setLoginadminpassword(event.target.value)

              }} />
              </div>
  
            </div>
  
            <button type='submit' className='btn' onClick={loginAdmin}>
              <span>Login</span>
              <MdOutlineSwipeRight className='icon' />
            </button>
          </form>
        </div>
          
        
        
        
        </>
      )
      
    }
export default Adminlogin