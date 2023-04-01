import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TickerTape } from "react-ts-tradingview-widgets";
import { langContext } from './context/Language';

function Header() {
  const {lang} = useContext(langContext)

  return (
    <>
    <div className='relative'>
      <img className='w-full object-cover' src={require("./assets/images/header/banner.png")} alt="" />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-fade'>
        <div className="wrapper flex flex-col items-center">
        {/* <h1 className='text-white font-bold sm:my-12 my-4 sm:text-6xl text-3xl lg:text-big'>{lang==="EN"?"Volcano Capital":"فولكانو كابيتال"}</h1> */}
        <img src={require("../components/assets/VC-logo-v06-vertical-v02-3D-shadow 1.png")} alt="" />
        <Link to="/register"><div className='px-3 bg-yellow text-black w-32 h-12 sm:w-48 sm:h-16 flex items-center justify-center font-bold text-sm sm:text-xl rounded-3xl hover:text-yellow hover:bg-light-yellow'>{lang==="EN"?"Join volcano":"انضم الان"}</div></Link>
        </div>
      </div>
    </div>
    <TickerTape colorTheme="dark"></TickerTape>
    </>
  )
}

export default Header