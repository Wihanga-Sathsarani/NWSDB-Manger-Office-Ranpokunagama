import React from "react";
import './adminsinglebanner.css'
const Adminsinglebanner= ({bannerimage, heading}) => {
    return (
        <div className='adminsinglebanner'>
            <div className='bannerimgfilter'></div>
            <img className='bannerimg' src={bannerimage} alt='noimg'/>
            <div className='bannerheading'>
                <h1>{heading}</h1>
            </div>
        </div>
    )
}

export default Adminsinglebanner