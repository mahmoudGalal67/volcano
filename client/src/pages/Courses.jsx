import React,{useContext} from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import { langContext } from '../components/context/Language';

import { data } from '../components/context/data';

function Courses() {

  const {lang} = useContext(langContext)

  return (
    <div>
      <Nav />
      <div className="hero md:py-24 py-16 px-5">
        <div style={lang==="EN"?{}:{marginLeft:"auto",textAlign:"end"}} className="left-4 sm:w-1/2 w-full md:text-3xl text-xl font-bold  text-white">{data[lang].course.mainTitle[0]} <br /> <span className='text-yellow'>Volcano</span> <br/> {data[lang].course.mainTitle[1]}</div>
      </div>
      <div className="course-contents sm:p-16 p-8 bg-dark-blue flex flex-wrap justify-between">
        <div className='text-yellow sm:text-4xl text-2xl font-bold my-5' style={lang==="AR"?{marginLeft:"auto"}:{}}>{data[lang].course.subTitle}</div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")}  alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[0]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")}  alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[1]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[2]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[3]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[4]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[5]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[6]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[7]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[8]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[9]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[10]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[11]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[12]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[13]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[14]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[15]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[16]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[17]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[18]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[19]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[20]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[21]}</p>
        </div>
        <div style={lang==="AR"?{flexDirection:"row-reverse" , marginLeft:"auto"}:{}} className="my-5 890:w-1/2 w-full course-content flex gap-2 items-center text-white">
          <img src={require(lang==="EN"?"../components/assets/images/course/Polygon 1.png":"../components/assets/images/course/Polygon 2.png")} alt="" />
          <p className='font-bold md:text-xl text-sm'>{data[lang].course.items[22]}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses