import React from 'react'

import Slider from 'react-slick'
import './bannerslider.css'

const Bannerslider = () => {
    const data = [
        {
            id: 1,
            image: 'https://tse4.mm.bing.net/th/id/OIP.XyS7BjG5eb3ZdtiQj_zd6QHaEO?pid=ImgDet&rs=1',
            title: 'Our Vision',
            description: 'To be the most prestigious utility organization in Sri Lanka through technological and service excellence.'
        },

        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZCUyMHdhc2hpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Our Mission',
            description: 'Serve the nation by providing sustainable water & sanitation solutions ensuring total user satisfaction.'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return(
        
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
            {
                data.map(item=>{
                    return (
                        <div className='imagecont' key={item.id}>
                            <img src={item.image} alt='noimg' />
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            </Slider>

        </div>
    )
}
export default Bannerslider