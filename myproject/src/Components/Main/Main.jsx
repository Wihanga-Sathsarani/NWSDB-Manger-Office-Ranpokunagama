import React from "react";
import './main.css'
import { Link } from "react-router-dom";


import img from './../../Assets/img.jpg'
import img1 from './../../Assets/img1.jpg'
import img2 from './../../Assets/img2.jpg'  
import img3 from './../../Assets/img3.jpg'  
import {FiSend} from 'react-icons/fi'


const Data =[
    {
        id:1,
        imgSrc: img,
        iconTitle: 'Notification',
        description: 'You can check your notification here'
    },

    {
        id:2,
        imgSrc: img1,
        iconTitle: 'Complaint',
        description: 'You can put your complaints here'
    },

    {
        id:3,
        imgSrc: img2,
        iconTitle: 'Bill',
        description: 'You can check your bill here'
    },
    {
        id:4,
        imgSrc: img3,
        iconTitle: 'Cal My Bill',
        description: 'You can calculate your bill here'
    },

    {
        id:5,
        imgSrc: img3,
        iconTitle: 'Disconnection',
        description: 'You can request to disconnect watersuply here'
    },

    {
        id:6,
        imgSrc: img3,
        iconTitle: 'Name change',
        description: 'You can request to change your bill name here'
    },
    
]

const Main = () => {
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Services
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, iconTitle, description })=>{
                        return(
                            <div key={id} className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={iconTitle} />
                                    
                                </div>

                                <div className="cardInfo">
                                    <h4 className="iconTitle">{iconTitle}</h4>
                                    <div className="desc">
                                    <p>{description}</p>
                                    </div>

                                    <Link to="/login"  className='btn flex'>
                                        Go <FiSend className="icon"/>
                                    </Link>
                                </div>

                                

                               
                                

                            </div>
                        )

                    })
                        
                   
                }

            </div>

        </section>
    )
}

export default Main