import React, { useContext } from 'react'
import { langContext } from '../components/context/Language'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import { data } from '../components/context/data';

function About() {

  const {lang} = useContext(langContext)

  return (
    <div className='bg-dark-blue'>
      <Nav />
      <div className="hero">
        <img src={require("../components/assets/images/about.png")} alt="" />
      </div>
      <div className="about text-white sm:p-16 p-8">
        <div className='text-2xl font-bold' style={lang==="AR"?{textAlign:"end"}:{}}>{data[lang].about.who.title}</div>
        <p className='my-5' style={lang==="AR"?{textAlign:"end"}:{}}>{data[lang].about.who.desc}</p>
        <div className='my-3 text-2xl' style={lang==="AR"?{textAlign:"end"}:{}}>{data[lang].about.why.title}</div>
          {data[lang].about.why.desc.map(item=>(
            <div style={lang==="AR"?{flexDirection:"row-reverse",textAlign:"end"}:{}} className='flex items-start gap-2 my-3'><img src={require("../components/assets/images/dot.png")} alt="" /><p>{item}</p></div>
          ))}
        <div className='text-2xl font-bold my-5' style={lang==="AR"?{textAlign:"end"}:{}}>{data[lang].about.indviduals.title}</div>
        <div style={lang==="AR"?{textAlign:"end"}:{}}  className='my-5'>{data[lang].about.indviduals.desc}</div>
        <div className='text-2xl font-bold my-5' style={lang==="AR"?{textAlign:"end"}:{}}>{data[lang].about.investors.title}</div>
        <div  style={lang==="AR"?{textAlign:"end"}:{}} className='my-5'>{data[lang].about.investors.desc}</div>
        <div className='text-2xl font-bold my-5' style={lang==="AR"?{textAlign:"end"}:{}}>{data[lang].about.strategy.title}</div>
          {data[lang].about.strategy.desc.map(item=>(
            <div style={lang==="AR"?{flexDirection:"row-reverse",textAlign:"end"}:{}} className='flex items-start gap-2 my-3'><img src={require("../components/assets/images/dot.png")} alt="" /><p> {item}</p></div>
          ))}
      </div>
      <Footer/>
    </div>
  )
}

export default About