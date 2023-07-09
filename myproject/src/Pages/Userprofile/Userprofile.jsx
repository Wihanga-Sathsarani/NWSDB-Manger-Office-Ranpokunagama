import React from "react";
import { useParams } from "react-router-dom";
import Singlebanner from "../../Components/Singlebanner/Singlebanner";
import Userslidebar from "../../Components/Userslidebar/Userslidebar";
import Complaints from "../../Components/Userslidebar/Complaints";
import './userprofile.css'

import Namechange from "../../Components/Userslidebar/Namechange";

import Notification from "../../Components/Userslidebar/Notification";
import Calmybill from "../../Components/Userslidebar/Calmybill";
import Consumerbill from "../../Components/Userslidebar/Consumerbill";


const Userprofile = () => {

  const {activepage} =useParams()
  //alert (activepage)

  return (
    <div className='userprofile'>

      <Singlebanner
      heading={`My Profile `}
      bannerimage='https://gray-ktuu-prod.cdn.arcpublishing.com/resizer/ftSQhuZ1oz2iFvx7Uop8UZsVRiw=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/I6PAH3RYPZMLXDNFHSRNR3Q6N4.jpg' />  
      {/*User Profile showing {activepage}*/}

      <div className='userprofilein'>
        <div className='left'>
          <Userslidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'complaints' && <Complaints/>}
          {activepage === 'namechange' && <Namechange/>}
          {activepage === 'consumerbill' && <Consumerbill/>}
          {activepage === 'calmybill' && <Calmybill/>}
          {activepage === 'notification' && <Notification/>}
        </div>

      </div>
    </div>
  )
}

export default Userprofile