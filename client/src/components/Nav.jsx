import React,{useContext} from 'react'
import { Link } from 'react-router-dom'

import {data} from "../components/context/data"
import { langContext } from './context/Language'
import { userContext } from './context/user'

function Nav() {
  const {lang,setlang} = useContext(langContext)
  const {user,logOut} = useContext(userContext)

  let textLang={
    flexDirection : lang==="EN"?"":"row-reverse"
  }

  return (
    <nav className='flex justify-between items-center py-3 px-5 bg-blue'>
      <div className="left w-20 sm:w-32">
        <Link to="/"><img className='w-full' src={require("./assets/images/header/logo.png")} alt="" /></Link>
      </div>
      <div className="center toggle:block hidden">
      <ul className='flex justify-between text-center gap-3 text-md text-white font-bold' style={textLang}>
        <Link to="/"><li>{data[lang].home.nav[0]}</li></Link>
        <Link to="/crypto"><li>{data[lang].home.nav[1]}</li></Link>
        <Link to="/shares"><li>{data[lang].home.nav[2]}</li></Link>
        <Link to="/forex"><li>{data[lang].home.nav[3]}</li></Link>
        <Link to="/goods"><li>{data[lang].home.nav[4]}</li></Link>
        <Link to="/pointers"><li>{data[lang].home.nav[5]}</li></Link>
        <Link to="/blogs&events"><li>{data[lang].home.nav[6]}</li></Link>
        <Link to="/jobs"><li>{data[lang].home.nav[7]}</li></Link>
        <Link to="/gallary"><li>{data[lang].home.nav[8]}</li></Link>
        <Link to="/contact"><li>{data[lang].home.nav[9]}</li></Link>
        <Link to="/about"><li>{data[lang].home.nav[10]}</li></Link>
        {user?.verify&&<Link to="/dashboard"><li>{data[lang].home.nav[11]}</li></Link>}
      </ul>
      </div>
      <div className="right hidden justify-center gap-5 text-white items-center sm:flex">
        <Link to="/register"><div onClick={logOut} className='border-2 border-white py-3 px-5 rounded-3xl font-bold hover:border-yellow text-center'>{lang==="EN"?!user?"Join volcano":"Log out" :!user?"انضم الان":"تسجيل خروج"}</div></Link>
        {lang==="AR"?<img className='w-20 h-10 cursor-pointer' src={require("./assets/images/header/—Pngtree—british flag_5405119.png")} alt="" onClick={()=>setlang("EN")}/>:
        <img className='w-20 h-10 cursor-pointer' src={require("./assets/images/header/Flag_of_the_United_Arab_Emirates 1.png")} alt="" onClick={()=>setlang("AR")}/>
        }
      </div>


  <div className="togller toggle:hidden block">
        <div id="menuToggle" className='sm:top-12 top-8'>
        <input type="checkbox" />
    
        <span></span>
        <span></span>
        <span></span>
    
    <ul id="menu" className='bg-blue text-white'>
      <div className="right text-white sm:hidden block text-center my-3">
        <Link to="/register"><div className='border-2 border-white py-3 px-5 rounded-3xl font-bold my-3'>{lang==="EN"?"Join volcano":"انضم الي فولكانو"}</div></Link>
        {lang==="AR"?<img className='w-20 h-10 cursor-pointer' src={require("./assets/images/header/—Pngtree—british flag_5405119.png")} alt="" onClick={()=>setlang("EN")}/>:
        <img className='w-20 h-10 cursor-pointer' src={require("./assets/images/header/Flag_of_the_United_Arab_Emirates 1.png")} alt="" onClick={()=>setlang("AR")}/>
        }
      </div>
        <Link to="/"><li>{data[lang].home.nav[0]}</li></Link>
        <Link to="/crypto"><li>{data[lang].home.nav[1]}</li></Link>
        <Link to="/shares"><li>{data[lang].home.nav[2]}</li></Link>
        <Link to="/forex"><li>{data[lang].home.nav[3]}</li></Link>
        <Link to="/goods"><li>{data[lang].home.nav[4]}</li></Link>
        <Link to="/pointers"><li>{data[lang].home.nav[5]}</li></Link>
        <Link to="/blogs&events"><li>{data[lang].home.nav[6]}</li></Link>
        <Link to="/jobs"><li>{data[lang].home.nav[7]}</li></Link>
        <Link to="/gallary"><li>{data[lang].home.nav[8]}</li></Link>
        <Link to="/contact"><li>{data[lang].home.nav[9]}</li></Link>
        <Link to="/about"><li>{data[lang].home.nav[10]}</li></Link>
        {user?.verify&&<Link to="/dashboard"><li>{data[lang].home.nav[11]}</li></Link>}
    </ul>
      </div>
      </div>
    </nav>
  )
}

export default Nav