import React, { useContext, useState } from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Link, useHistory } from 'react-router-dom'
import Hide from "../components/assets/hide.svg"
import Show from "../components/assets/show.svg"
import axios from "axios"
import { userContext } from '../components/context/user'

import { langContext } from '../components/context/Language'
import { data } from '../components/context/data';

function Login() {
  const baseURL = "https://api.volcanocapital.net"
  const {setUser} = useContext(userContext)
  const {lang} = useContext(langContext)
  
  let textLang={
    textAlign : lang==="EN"?"start":"end"
  }

  const history = useHistory()
  const [showPass, setshowPass] = useState(false)
  const [userInfo,setuserInfo] = useState({})
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)


  const login =async (e)=>{
    e.preventDefault()
    if(!userInfo.email||!userInfo.password) return seterror("Please add all fields")
    else{
      setloading(true)
      try{
        const {data} = await axios.post(`${baseURL}/auth/login`,{email:userInfo.email,password:userInfo.password})
        setUser(data)
        setloading(false)
        history.push("/")
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
        <div className="form-wrapper px-5 py-12 pb-24 text-light text-sm sm:w-7/12">
          <h3 className='text-3xl mb-5'style={textLang}>{lang==="EN"?"Sign in":"تسجيل الدخول"}</h3>
          <form onSubmit={login} className='sm:px-16 sm:w-full px-4 sm:py-16 py-4 flex flex-col bg-light-blue text-xs'>
            <input className='my-5' name='email' type="email" placeholder={data[lang].login[0]} onChange={(e)=>setuserInfo((prev)=>({...prev,[e.target.name]:e.target.value}))}/>
            <div className='relative'><input className='my-5 w-full' name='password' type={showPass?"text":"password"} placeholder={data[lang].login[1]} onChange={(e)=>setuserInfo((prev)=>({...prev,[e.target.name]:e.target.value}))} autoComplete={userInfo.password}/><img src={showPass?Hide:Show} onClick={()=>setshowPass((prev)=>!prev)} className="w-5 absolute right-1 top-6 cursor-pointer" alt="" /></div>
            <div className='text-center text-lg my-5 text-red-600'>{error}</div>
            <button type='submit' className='bg-yellow text-black hover:text-yellow hover:bg-light-yellow sm:py-4 py-2 sm:px-8 px-4 text-xl'>{lang==="EN"?"Continue":"الاستمرار"}</button>
          </form>
          <Link to="/register"><div className='text-center my-7 text-xl'>{lang==="EN"?"New to Volcano Capital?":"جديد في فولكانو كابيتال؟"}<span className='text-light-blue'> {lang==="EN"?"Create an account":"إنشاء حساب"}</span></div></Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login