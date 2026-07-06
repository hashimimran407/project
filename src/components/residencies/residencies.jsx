import React from 'react'
import { Swiper ,SwiperSlide ,useSwiper } from 'swiper/react'
import 'swiper/css'
import './residencies.css'
import data from '../../utils/slider.json'
const residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerwidth r-comtainer">
            <div className="r-head flexColStart">
                <span className='orangeText'>Bet Choices</span>
                <span className='primaryText'>Popular Residencie</span>
            </div>
        </div>
    </section>
  )
}

export default residencies
