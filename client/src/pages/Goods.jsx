import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import SB from "../components/charts/goods/ٍSB"
import ARsb from "../components/charts/goods/ARsb"
import Nq from "../components/charts/goods/Nq"
import ARnq from "../components/charts/goods/ARnq"
import Gold from "../components/charts/goods/Gold"
import ARgold from "../components/charts/goods/ARgold"
import Silver from "../components/charts/goods/Silver"
import ARsilver from "../components/charts/goods/ARsilver"
import Gas from '../components/charts/goods/Gas'
import ARgas from '../components/charts/goods/ARgas'

import { langContext } from '../components/context/Language'

import Slider from "react-slick";


function Goods() {

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
        <div className='text-yellow text-center md:text-6xl text-4xl font-bold'>{lang==="EN"?"Goods":"السلع"}</div>
        </div>
      </div>
      <div className="shares">
      <Slider className='opor-slider' {...settings}>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<SB />:<ARsb />}
        </div>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Nq />:<ARnq />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Gold />:<ARgold />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Silver />:<ARsilver />}
        </div>  
        <div className="share-diagram p-8 h-96 sm:h-600">
        {lang==="EN"?<Gas />:<ARgas />}
        </div>
        </Slider>
      </div>
      <Footer />
    </div>
  )
}

export default Goods