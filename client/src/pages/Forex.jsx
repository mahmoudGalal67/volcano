import React, { useContext } from 'react'
import { langContext } from '../components/context/Language'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import Eu from "../components/charts/forex/Eu"
import AReu from "../components/charts/forex/AReu"
import Us from "../components/charts/forex/Us"
import ARus from "../components/charts/forex/ARus"
import Brp from "../components/charts/forex/Brp"
import ARbrp from "../components/charts/forex/ARbrp"
import Aseu from "../components/charts/forex/Aseu"
import ARaseu from "../components/charts/forex/ARaseu"
import Asus from "../components/charts/forex/Asus"
import ARasus from "../components/charts/forex/ARasus"

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
        <div className='text-yellow text-center md:text-6xl text-4xl font-bold'>{lang==="EN"?"Forex":"فوركس"}</div>
        </div>
      </div>
      <div className="shares">
      <Slider className='opor-slider' {...settings}>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Eu />:<AReu />}
        </div>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Us />:<ARus />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Aseu />:<ARaseu />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Asus />:<ARasus />}
        </div>  
        <div className="share-diagram p-8  h-96 sm:h-600">
        {lang==="EN"?<Brp />:<ARbrp />}
        </div>
        </Slider>
      </div>
      <Footer />
    </div>
  )
}

export default Shares