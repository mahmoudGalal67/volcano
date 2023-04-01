import React, { useContext, useState } from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Link, useHistory } from 'react-router-dom'
import Hide from "../components/assets/hide.svg"
import Show from "../components/assets/show.svg"
import { langContext } from '../components/context/Language'
import axios from 'axios'

import { data } from '../components/context/data';


function Register() {
  const baseURL = "https://api.volcanocapital.net"
  const {lang} = useContext(langContext)
  const history = useHistory()
  const [showPass, setshowPass] = useState(false)
  const [userInfo,setuserInfo] = useState({})
  const [declare, setdeclare] = useState(false)
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)
  
  let textLang={
    textAlign : lang==="EN"?"start":"end"
  }

  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
  const setPassword = (e)=>{
    setuserInfo((prev)=>({...prev,password:e.target.value}))
    if(!regex.test(e.target.value)){
      seterror("Please add a confirmed password")
    }
    else if(!userInfo.country||!userInfo.email) seterror("Please add all fields")
    else{
      seterror("")
    }
  }

  const register = async(e)=>{
    e.preventDefault()
    if(!userInfo.country||!userInfo.email||!userInfo.password) return seterror("Please add all fields")
    if(!regex.test(userInfo.password)){
      seterror("Please add a confirmed password")
    }
    else{
      setloading(true)
      try{
        await axios.post(`${baseURL}/auth/register`,{country:userInfo.country,email:userInfo.email,password:userInfo.password})
        history.push("/login")
        setloading(false)
      }
      catch(err){
        console.log(err);
        seterror(err.response.data)
        setloading(false)
      }
    }
  }

  return (
    <div>
      {loading &&
      <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-overlay">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>}
      <Nav />
      <div className="wrapper flex items-center justify-center bg-dark-blue">
        <div className="form-wrapper sm:w-3/4 px-5 py-12 pb-24 text-light text-sm">
          <h3 className='text-3xl mb-5' style={textLang}>{lang==="EN"?"Registration":"التسجيل"}</h3>
          <form onSubmit={register} className='sm:px-16 px-4 sm:py-16 py-4 flex flex-col bg-light-blue text-xs'>
            <input className='my-5' name='country' type="text" placeholder={data[lang].register.fields[0]} onChange={(e)=>setuserInfo((prev)=>({...prev,[e.target.name]:e.target.value}))}/>
            <input className='my-5' name='email' type="email" placeholder={data[lang].register.fields[1]} onChange={(e)=>setuserInfo((prev)=>({...prev,[e.target.name]:e.target.value}))}/>
            <div className='relative'><input className='my-5 w-full' name='password' type={showPass?"text":"password"} placeholder={data[lang].register.fields[2]} autoComplete={userInfo.password} onChange={setPassword}/><img src={showPass?Hide:Show} onClick={()=>setshowPass((prev)=>!prev)} className="w-5 absolute right-1 top-6 cursor-pointer" alt="" /></div>
            <div className='flex gap-2 items-center my-2'><div className='w-4 h-4 border-2 rounded-full border-white'></div><span>{data[lang].register.conditions[0]}</span></div>
            <div className='flex gap-2 items-center my-2'><div className='w-4 h-4 rounded-full border-2 border-white'></div><span>{data[lang].register.conditions[1]}</span></div>
            <div className='flex gap-2 items-center my-2'><div className='w-4 h-4 rounded-full border-2 border-white'></div><span>{data[lang].register.conditions[2]}</span></div>
            <div className='flex items-center'><input className='my-7 mr-3' type="checkbox" onChange={()=>setdeclare(prev=>(!prev))}/><p>{data[lang].register.commit}</p></div>
            <div className='text-center text-lg text-red-600'>{error}</div>
            <button type='submit' disabled={!declare} className='bg-yellow text-black hover:text-yellow hover:bg-light-yellow sm:py-4 py-2 sm:px-8 px-4 text-xl'>{lang==="EN"?"Continue":"الاستمرار"}</button>
          </form>
          <Link to="/login"><div className='text-center my-7 text-xl'>{lang==="EN"?"Already have an account?":"لدي حساب بالفعل"} <span className='text-light-blue'>{lang==="EN"?"Sign in now":"سجل الأن"}</span></div></Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register