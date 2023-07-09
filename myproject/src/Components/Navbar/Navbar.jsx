import React ,{useState} from "react";
import './navbar.css'

import {FaHandHoldingWater} from "react-icons/fa";
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link } from "react-router-dom";
import img4 from './../../Assets/img4.png'

const Navbar = () =>{
    const [active, setActive] = useState('navBar')

    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    
    const removeNav = ()=>{
        setActive('navBar')
    }    

     return(
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><FaHandHoldingWater className="icon"/>  NWSDB Online eServices</h1>
                </a>

                
            </div>

            <img src={img4} alt="Logo Image" />

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <Link to="/" className="navLink">Home</Link>
                    </li>

                    <li className="navItem">
                        <Link to="/login" className="navLink">Profile</Link>
                    </li>

                    <li className="navItem">
                        <Link to="/about" className="navLink">About Us</Link>
                    </li>

                    <li className="navItem">
                        <Link to="/consumerrequests" className="navLink">Requests</Link>
                    </li>
                    

                    
                    <Link to={"/register"}>
                    <button className='btn'>
                        <a href="#">REGISTER</a>
                    </button>
                    </Link>

                    <Link to={"/login"}>
                    <button className='btn'>
                        <a href="#">LOGIN</a>
                    </button>
                    </Link>
                </ul>

                <div onClick={removeNav}className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
                </div>

            </div>

            <div onClick={showNav}className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>

        </header>

    </section>
    )

}
export default Navbar