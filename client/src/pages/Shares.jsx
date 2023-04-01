import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { langContext } from '../components/context/Language'
import Apple from '../components/charts/shares/Apple'
import Amazon from '../components/charts/shares/Amazon'
import Tesla from "../components/charts/shares/Tesla"
import Google from '../components/charts/shares/Google'
import Facebook from '../components/charts/shares/Facebook'
import ARApple from '../components/charts/shares/ARApple'
import ARtesla from '../components/charts/shares/ARtesla'
import ARFacebook from '../components/charts/shares/ARfacebook'
import ARamazon from '../components/charts/shares/ARamazon'
import ARgoogle from '../components/charts/shares/ARgoogle'

import Slider from "react-slick";


function Shares() {
  const {lang} = useContext(langContext)

  const settings = {
    autoplay: true,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  }

  return (
    <div className='bg-dark-blue'>
      <Nav />
      <div className="hero-shares relative">
        <img src={require("../components/assets/images/jobs.png")} alt="" />
        <div className="wrapper absolute w-full h-full top-0 left-0 flex justify-center items-center bg-fade">
        <div className='text-yellow text-center md:text-6xl text-4xl font-bold'>{lang==="EN"?"Shares":"الأسهم"}</div>
        </div>
      </div>
      <div className="shares">
      <Slider className='opor-slider' {...settings}>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
          {lang==="EN"?<Apple />:<ARApple />}
        </div>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Tesla />:<ARtesla />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Facebook />:<ARFacebook />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Amazon />:<ARamazon />}
        </div>  
        <div className="share-diagram p-8 h-96 sm:h-600">
        {lang==="EN"?<Google />:<ARgoogle />}
        </div>  
        </Slider>
      </div>
      <Footer />
    </div>
  )
}

export default Shares