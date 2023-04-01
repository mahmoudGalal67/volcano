import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { langContext } from '../components/context/Language'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Jobs() {

  const {lang} = useContext(langContext)

  return (
    <div className='bg-dark-blue'>
      <Nav />
      <div className="hero-jobs relative">
        <img src={require("../components/assets/images/jobs.png")} alt="" />
        <div className="wrapper absolute w-full h-full top-0 left-0 flex justify-center items-center bg-fade">
        <div className='text-white text-center md:text-6xl text-xl font-bold'>{lang==="EN"?"Join the Volcano Capital family":"انضم الي عائلة فولكانو"}</div>
        </div>
      </div>
      <div className="hr-assistant p-12 text-white" style={lang==="AR"?{textAlign:"end"}:{}}>
        <div className='sm:text-3xl text-xl font-bold'>{lang==="EN"?"HR Assistant":"مساعد مدير  الموارد البشرية"}</div>
        <div className='sm:text-2xl text:lg my-5'>{lang==="EN"?"Job":"وصف"} <br /> {lang==="EN"?"Desription":"الوظيفة"}</div>
        <p>{lang==="EN"?"We are looking for a skilled HR Officer who recruits, supports and develops talent through developing policies and management procedures, is responsible for administrative tasks and contributes to making the company a better place to work.":"نحن نبحث عن موظف موارد بشرية ماهر يقوم بتوظيف المواهب ودعمها وتطويرها من خلال تطوير السياسات وإجراءات الإدارة ، ويكون مسؤولاً عن المهام الإدارية ويساهم في جعل الشركة مكانًا أفضل للعمل"}</p>
        <Link to="/courses"><div style={lang==="AR"?{marginLeft:"auto"}:{}} className='bg-yellow text-black w-40 text-center py-3 px-5 text-sm  my-8 hover:text-yellow hover:bg-light-yellow' >{lang==="EN"?"More details":"المزيد من التفاصيل"}</div></Link>
        <div style={lang==="AR"?{marginLeft:"auto"}:{}} className='separator w-10/12 bg-white'></div>
      </div>
      <Footer />
    </div>
  )
}

export default Jobs