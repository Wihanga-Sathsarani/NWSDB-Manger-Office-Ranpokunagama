import React from "react";
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import {AiOutlineTwitter} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FiChevronRight} from 'react-icons/fi'
import {FaHandHoldingWater} from 'react-icons/fa'
import img4 from './../../Assets/img4.png'

import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                <img src={img4} alt="Logo Image" />
                    <div className="text">
                        
                        <small>MINISTRY OF WATER SUPPLY</small>
                        
                        <h2>KEEP IN TOUCH</h2>

                    </div>

                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <FaHandHoldingWater className="icon"/>NWSDB Online eServices
                            </a>
                        </div>
                        <div className="footerParagraph">
                        The National Water Supply and Drainage Board (NWSDB) has been serving for the island 
                        nation supplying of purified drinking water, maintain hygiene for the past four decades having 
                        established in 1975 as a prestigious statutory body in the discipline of sanitation engineering 
                        NWSDB is a statutory board, which presently functions under the Ministry of Water Supply and 
                        Drainage.
                        </div>

                        <div className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <SiGmail className="icon"/>
                            <AiOutlineWhatsApp className="icon"/>
                            <BsFacebook className="icon"/>

                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                Contact US
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                E-Mail
                            </li>

                            <p className="iconDetails">
                                einfo@waterboard.lk
                            </p>
                            <br/>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Address
                            </li>

                            <p className="iconDetails">
                                Water Supply Scheme,<br/>
                                No. F1/B/05/12,<br/>
                                Ranpokunagama<br/>
                                Nittambuwa<br/>
                            </p>
                            <br/>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Hotline
                            </li>
                            <p className="iconDetails">
                                1939
                            </p>
                            

                        </div>


                        

                    </div>

                    <div className="footerDiv flex">
                        <small>Copyright 2023 National Water Supply and Drainage Board.</small>
                        <small>All Rights Reserved.-Designed & Developed by 
                            Wihanga</small>        
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Footer