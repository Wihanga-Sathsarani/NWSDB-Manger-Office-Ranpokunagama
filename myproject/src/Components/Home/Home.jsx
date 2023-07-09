import React from "react";
import './home.css'
import video from '../../Assets/video.mp4'
import {GLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'


const Home = () =>{
    return(
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div  className="homeContent container">
                <div className="textDiv">

                    <span className="smallText">
                        Welcome to
                    </span>
                    
                    <h1 className="homeTitle">
                        National Water Supply and Drainage Board Ranpokunagama
                    </h1>

                </div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <SiGmail className="icon"/>
                        <BsTwitter className="icon"/>
                        <AiOutlineYoutube className="icon"/>

                    </div>

                    <div className="leftIcons">
                    <BsListTask className="icon"/>
                    <TbApps className="icon"/>

                    </div>
                </div>
                

            </div>
        </section>
    )
}

export default Home