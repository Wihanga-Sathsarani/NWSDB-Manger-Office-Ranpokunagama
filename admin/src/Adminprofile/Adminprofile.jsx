import React from 'react'
import { useParams } from 'react-router-dom'
import Adminsinglebanner from '../Adminsinglebanner/Adminsinglebanner'
import Adminslidebar from '../Adminslidebar/Adminslidebar'
import Adminbill from '../Adminslidebar/Adminbill'
import './adminprofile.css'
import Adminnotification from '../Adminslidebar/Adminnotification'
import Registeredconsumer from '../Adminslidebar/Registeredconsumer'
import Adminnamechange from '../Adminslidebar/Adminnamechange'

const Adminprofile = () => {

    const {activepage} = useParams()

    //alert(activepage)
    return (
        <div className='adminprofile'>
            <Adminsinglebanner
            heading={`My Profile`}
            bannerimage='https://buddhify.com/wp-content/uploads/elementor/thumbs/photo-1445112098124-3e76dd67983c-o23zztcscaep8z9fvx7kz5qgg1f3pdh3gzi3yhtqqo.jpeg'
            />
           {/*} Adminprofile, showing {activepage}
           */}
           <div className='adminprofilein'>
            <div className='left'>
                <Adminslidebar activepage={activepage}/>
            </div>
            <div className='right'>
                {activepage === 'adminbill' && <Adminbill/>}
                {activepage === 'adminnotification' && <Adminnotification/>}
                {activepage === 'registeredconsumers' && <Registeredconsumer/>}
                {activepage === 'adminnamechange' && <Adminnamechange/>}
            </div>

           </div>
          
        </div>
    )
}
export default Adminprofile