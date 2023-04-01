import React, { useContext } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from "../components/Footer"

import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { StockMarket } from "react-ts-tradingview-widgets";

import Typewriter from 'typewriter-effect';

import { data } from '../components/context/data';

import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { langContext } from '../components/context/Language';

const settings = {
  infinite: false,
  dots: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
};

function Home() {
  const {lang} = useContext(langContext)
  
  let textLang={
    textAlign : lang==="EN"?"start":"end"
  }

  return (
    <div className='bg-dark-blue'>
      <Nav />
      <Header />
      <div className="opportunities  py-8 px-4">
        <div className='text-2xl font-bold text-white mb-5' style={textLang}>{lang==="EN"?"We provide a world of opportunities":"نحن نقدم  عالم من الفرص"}</div>
        <Slider className='opor-slider' {...settings}>
          <div className="slider-item gap-3 flex-col items-center justify-center">
            <img  src={require("../components/assets/images/opportunities-icons/crypto-trading.svg.png")} alt="" />
            <div className='text-center text-white text-lg'>{data[lang].home.opor[0]}</div>
          </div>
          <div className="slider-item gap-3 flex-col items-center justify-center">
            <img  src={require("../components/assets/images/opportunities-icons/metal-trading.svg.png")} alt="" />
            <div className='text-center text-white text-lg'>{data[lang].home.opor[1]}</div>
          </div>
          <div className="slider-item gap-3 flex-col items-center justify-center">
            <img  src={require("../components/assets/images/opportunities-icons/commodities-trading.svg.png")} alt="" />
            <div className='text-center text-white text-lg'>{data[lang].home.opor[2]}</div>
          </div>
          <div className="slider-item gap-3 flex-col items-center justify-center">
            <img  src={require("../components/assets/images/opportunities-icons/indices-trading.svg.png")} alt="" />
            <div className='text-center text-white text-lg'>{data[lang].home.opor[3]}</div>
          </div>
          <div className="slider-item gap-3 flex-col items-center justify-center">
            <img  src={require("../components/assets/images/opportunities-icons/forex-trading.svg.png")} alt="" />
            <div className='text-center text-white text-lg'>{data[lang].home.opor[4]}</div>
          </div>
        </Slider>
        <div className="popular-crypto">
          <div className="wrapper px-12">
          <div className='text-2xl font-bold text-white my-5' style={textLang}>{lang==="EN"?"Popular cryptocurrencies":"أشهر العملات الرقمية"}</div>
          <CryptoCurrencyMarket colorTheme="dark" width="100%" height={400} locale={lang==="EN"?"en":"ar_AE"}></CryptoCurrencyMarket>
          <div className='text-2xl font-bold text-white my-5' style={textLang}>{lang==="EN"?"Sign up now to build your own portfolio for free!":"اشترك الآن لبناء محفظتك الخاصة مجانًا!"}</div>
          <Link to="/register" className='bg-yellow text-black w-40 text-center py-3 px-5 hover:text-yellow hover:bg-light-yellow '>{lang==="EN"?"Get Started":"ابدأ الأن"}</Link>
          </div>
        </div>
      </div>
        <div className="get-started my-8">
        <div className='sm:text-5xl text-3xl text-white my-8 text-center'>{lang==="EN"?"How to ":"كيف"}
        {
          lang==="EN"?
          <div className='text-yellow'>
            <Typewriter
            options={{
            strings: ['Get started'],
            autoStart: true,
            loop: true,
          }}
        />
          </div>:
        <div className='text-yellow'>
          <Typewriter
          options={{
            strings: ['تبدأ'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
        }
        {lang==="EN"?"with volcano":"مع فولكانو"}</div>
        <div style={lang==="AR"&&window.innerWidth<=815?{flexDirection:"column-reverse"}:{}} className="steps flex flex-wrap justify-around my-5 relative py-3 px-12">
          {data[lang].home.start.map((item,index)=>(
            <div key={index} className="item mx-4 my-3 w-80 p-5 bg-light-blue relative rounded-md">
            <img className='object-cover' src={require(`../components/assets/images/opportunities-icons/step${item.imageNum}.png`)} alt="" />
            <div className='my-3 text-white text-2xl'>{item.title}</div>
            <p className='text-light'>{item.par}</p>
            <div className='absolute w-10 h-10 flex items-center justify-center top-5 right-8 rounded-full text-yellow bg-light-yellow'>{item.number}</div>
            </div>
          ))}
        </div>
        <Link to="register" className='text-center bg-yellow text-black w-40 px-5 py-3 rounded-3xl m-auto hover:text-yellow hover:bg-light-yellow'>{lang==="EN"?"Create account":"انشأ حساب"}</Link>
      </div>
      <div className='info text-white p-6 bg-light-blue'>
        <h3 className='890:w-1/2 w-full text-3xl text-bold my-5'>{data[lang].home.desc.heading}</h3>
        <p className='890:w-1/2 w-full text-xl my-4'>{data[lang].home.desc.title}</p>
        <div className='flex 890:flex-row flex-col items-center'>
        <div className="wrapper">
          <div className="item flex gap-4 items-start my-3 text-lg">
            <img src={require("../components/assets/Accept.png")} alt="" />
            <div>{data[lang].home.desc.list[0]}</div>
          </div>
          <div className="item flex gap-4 items-start my-3 text-lg">
            <img src={require("../components/assets/Accept.png")} alt="" />
            <div>{data[lang].home.desc.list[1]}</div>
          </div>
          <div className="item flex gap-4 items-start my-3 text-lg">
            <img src={require("../components/assets/Accept.png")} alt="" />
            <div>{data[lang].home.desc.list[2]}</div>
          </div>
          <div className="item flex gap-4 items-start my-3 text-lg">
            <img src={require("../components/assets/Accept.png")} alt="" />
            <div>{data[lang].home.desc.list[3]}</div>
          </div>
          <Link to="/register" className='my-8 mx-auto bg-yellow text-black w-40 text-center py-3 px-5 hover:text-yellow hover:bg-light-yellow '>{lang==="EN"?"TRY DEMO":"جرب الان"}</Link>
        </div>
        <img className='980:w-1/2 w-full' src={require("../components/assets/education.png.png")} alt="" />
        </div>
      </div>
      <div className='stocks-shares p-16'>
        <StockMarket colorTheme="dark" height="600" width="100%" locale={lang==="EN"?"en":"ar_AE"}></StockMarket>
      </div>
      <div className="trading-forex gap-5 flex justify-around items-center md:flex-row flex-col p-16">
        <img className='w-80 flex-1' src={require("../components/assets/images/barrel.png")} alt="" />
        <p style={lang==="AR"?{textAlign:"end"}:{}} className='leading-12 sm:text-2xl text-lg flex-1 text-white'>{data[lang].home.tradingForex[0]} <br /> <br /> <span className='text-yellow'>Volcano</span><br />  {data[lang].home.tradingForex[1]}</p>
      </div>
      <div className="enjoy p-5 text-center text-white bg-light-blue my-8">
        <div className='text-2xl font-bold'>{data[lang].home.account.title}</div>
        <p className='my-3 text-xl'>{data[lang].home.account.par}</p>
        <Link to="/register" className='bg-yellow w-40 py-3 rounded-md text-black m-auto hover:text-yellow hover:bg-light-yellow'>{lang==="EN"?"Open an account":"أفتح حساب"}</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Home