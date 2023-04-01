import React, { useContext } from 'react'
import Email from "../components/assets/images/footer/email.svg"
import Phone from "../components/assets/images/footer/phone.svg"
import Location from "../components/assets/images/footer/location.svg"
import { langContext } from './context/Language'
import { Link } from 'react-router-dom'

import {data} from "../components/context/data"

function Footer() {

  const {lang} = useContext(langContext)
  

  return (
    <footer className='footer bg-light-blue'>
      <div className="wrappper flex md:flex-row justify-center flex-col flex-wrap px-5 py-8 text-white border-b-2 border-white">
        <div className="left text-center flex-1">
          <div className='my-6 text-2xl'>Connect us</div>
          <div className='my-4 flex items-center gap-6'><img className='w-8 text-white' src={Email} alt="" /> <span>{data[lang].home.footer.contact[0]}</span></div>
          <div className='my-4 flex items-center gap-6'><img className='w-8 text-white' src={Phone} alt="" /> <span>{data[lang].home.footer.contact[1]}</span></div>
          <div className='my-4 flex items-center gap-6'><img className='w-8 text-white' src={Location} alt="" /> <span>{data[lang].home.footer.contact[2]}</span></div>
        </div>
        <div className="center text-center  flex-1">
          <div className='my-6 text-2xl'>Volcano capital</div>
          <ul>
            <li className='my-4'><Link to="/">{data[lang].home.footer.links[0]} &larr;</Link></li>
            <li className='my-4'><Link to="/about">{data[lang].home.footer.links[1]} &larr;</Link></li>
            <li className='my-4'><Link to="/jobs">{data[lang].home.footer.links[2]} &larr;</Link></li>
          </ul>
        </div>
        <div className="right min-w-60 flex-1">
          <img className='m-auto h-60' src={require("../components/assets/images/header/logo.png")} alt="" />
          <p className='text-center'>{data[lang].home.footer.par}</p>
        </div>
      </div>
      <div className='p-5 text-center text-white'>Design &copy; 2023. Design and developed by <a className='text-yellow' href='https://www.adsamy.com/index.html#'>Adsamy Marketing Agency</a></div>
    </footer>
  )
}

export default Footer