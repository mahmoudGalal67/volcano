import React, { useContext } from 'react'
import { langContext } from '../components/context/Language'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Contactus() {

  const {lang} = useContext(langContext)
  

  return (
    <div>
      <Nav />
      <img src={require("../components/assets/images/contactus.png")} alt="" />
      <section className='bg-dark-blue p-12'>
        <div className='contact-info flex toggle:flex-row flex-col items-center gap-16 justify-center'>
          <img src={require("../components/assets/images/map.png")} alt="" />
          <div className="info text-white">
            <div className="title text-2xl font-bold">
            {lang==="EN"?"Connect us":"توصل معنا"}
            </div>
            <div className='flex sm:flex-row flex-col gap-12'>
            <div className="left">
              <div className='text-lg text-yellow my-3'>{lang==="EN"?"Visit us":" قم بزيارتنا"}</div>
              <p className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
            <div className="right">
              <div className='text-lg text-yellow my-3'>{lang==="EN"?"Connect":"التوصل"}</div>
              <p className='text-sm'>(406) 555-0120</p>
            </div>
            </div>
            <div className="icons flex items-center gap-6 my-8 justify-center">
              <img src={require("../components/assets/images/Facebook.png")} alt="" />
              <img src={require("../components/assets/images/Instagram.png")} alt="" />
            </div>
            <div className="subscribe flex sm:flex-row flex-col  justify-center gap-1">
              <input type="text" placeholder={lang==="EN"?"ُEmail or phone number":"أيميل او رقم الهاتف"}/>
              <div className='bg-yellow w-40 py-3 text-center rounded-md sm:m-0 m-auto text-black hover:text-yellow hover:bg-light-yellow'>{lang==="EN"?"Subscribe":"اشترك"}</div>
            </div>
          </div>
        </div>
          <div className="call my-16 text-white flex flex-col gap-6 font-bold text-sm sm:text-2xl">
            <div className='py-3 px-8 flex  justify-center items-center w-fit m-auto gap-6 border-2 rounded-xl border-yellow'>
              <img src={require("../components/assets/images/Whatsapp.png")} alt="" />
              <div>Connect on WhatsApp</div>
            </div>
            <div className='py-3 px-8 flex  justify-center items-center w-fit m-auto gap-6 border-2 rounded-xl border-yellow'>
              <img src={require("../components/assets/images/Telephone.png")} alt="" />
              <div>Call the phone number</div>
            </div>
          </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contactus