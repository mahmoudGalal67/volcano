import React, { useContext } from 'react'
import { langContext } from '../components/context/Language'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import Us from "../components/charts/pointers/Us"
import ARus from "../components/charts/pointers/ARus"
import Dowj from "../components/charts/pointers/Dowj"
import ARdowj from "../components/charts/pointers/ARdowj"
import Btc from "../components/charts/pointers/Btc"
import ARbtc from "../components/charts/pointers/ARbtc"
import Cfd from "../components/charts/pointers/Cfd"
import ARcfd from "../components/charts/pointers/ARcfd"
import Usdt from "../components/charts/pointers/Usdt"
import ARusdt from "../components/charts/pointers/ARusdt"

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
        <div className='text-yellow text-center md:text-6xl text-4xl font-bold'>{lang==="EN"?"Pointers":"المؤشرات"}</div>
        </div>
      </div>
      <div className="shares">
      <Slider className='opor-slider' {...settings}>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Dowj />:<ARdowj />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Us />:<ARus />}
        </div>
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Btc />:<ARbtc />}
        </div>  
        <div className="share-diagram p-8 border-b-2 h-96 sm:h-600 border-yellow">
        {lang==="EN"?<Cfd />:<ARcfd />}
        </div>  
        <div className="share-diagram p-8 h-96 sm:h-600">
        {lang==="EN"?<Usdt/>:<ARusdt />}
        </div>  
        </Slider>
      </div>
      <Footer />
    </div>
  )
}

export default Shares