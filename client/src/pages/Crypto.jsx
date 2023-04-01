import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import Btc from "../components/charts/currencies/Btc"
import ARbtc from "../components/charts/currencies/ARbtc"
import Eth from "../components/charts/currencies/Eth"
import AReth from "../components/charts/currencies/AReth"
import Shibu from "../components/charts/currencies/Shibu"
import ARshibu from "../components/charts/currencies/ARshibu"
import Doge from "../components/charts/currencies/Doge"
import ARdoge from "../components/charts/currencies/ARdoge"
import Xrb from "../components/charts/currencies/Xrb"
import ARxrb from "../components/charts/currencies/ARxrb"
import { langContext } from '../components/context/Language'

import Slider from "react-slick";


function Crypto() {

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
        <div className='text-yellow text-center md:text-6xl text-4xl font-bold'>{lang==="EN"?"Digital currencies":"العملات الرقمية"}</div>
        </div>
      </div>
      <div className="shares">
      <Slider className='opor-slider' {...settings}>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
          {lang==="EN"?<Btc />:<ARbtc />}
        </div>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Eth />:<AReth />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Shibu />:<ARshibu />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Doge />:<ARdoge />}
        </div>  
        <div className="share-diagram p-8 h-96 sm:h-600">
        {lang==="EN"?<Xrb />:<ARxrb />}
        </div>  
        </Slider>
      </div>
      <Footer />
    </div>
  )
}

export default Crypto