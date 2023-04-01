import React, { useContext } from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { langContext } from '../components/context/Language'

function Gallary() {
  
  const {lang} = useContext(langContext)


  return (
    <div className='bg-dark-blue'>
      <Nav />
      <div className="hero-gallary py-4 sm:py-8 px-8 sm:px-24">
        <img src={require("../components/assets/images/gallaruBanner.png")} alt="" />
      </div>
      <div className="gallary p-8">
        <div className='sm:text-6xl text-3xl text-center font-bold my-5 text-yellow'>{lang==="EN"?"Gallary":"المعرض"}</div>
        <div className="gallary-items flex flex-wrap">
          <div className="gallary-item">
            <img src={require("../components/assets/images/gallary.png")} alt="" />
          </div>
          <div className="gallary-item">
            <img src={require("../components/assets/images/gallary.png")} alt="" />
          </div>
          <div className="gallary-item">
            <img src={require("../components/assets/images/gallary.png")} alt="" />
          </div>
          <div className="gallary-item">
            <img src={require("../components/assets/images/gallary.png")} alt="" />
          </div>
          <div className="gallary-item">
            <img src={require("../components/assets/images/gallary.png")} alt="" />
          </div>
          <div className="gallary-item">
            <img src={require("../components/assets/images/gallary.png")} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallary