import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { langContext } from '../components/context/Language';

function Blogsevents() {

  const {lang} = useContext(langContext)
  

  const handlePageClick = (e)=>{
    console.log(e);
  }

  return (
  <div>
    <Nav/>
    <div className='blogs md:py-24 sm:py-16 py-8 px-5'>
      <div style={lang==="EN"?{}:{marginLeft:"auto",textAlign:"end"}} className="left-4 sm:w-1/2 w-full md:text-3xl text-xl font-bold  text-white">{lang==="EN"?"The Volcano Capital Blog":"مدونة فولكانو كابيتال"}</div>
      <p style={lang==="EN"?{}:{marginLeft:"auto",textAlign:"end"}} className='text-white my-5 md:text-2xl text-xl'>{lang==="EN"?"Get all the relevant market news and company updates in one place.":"احصل علي جميع اخبار الاسواق وتحديثات الشركات في مكان واحد"}</p>
    </div>
    <div className="blogs-cards p-8 bg-dark-blue">
      <div className="nav flex tems-center flex-wrap sm:text-sm text-xs gap-3 text-white">
        <div className='sm:px-5 px-2 py-1 cursor-pointer border-2 border-white rounded-3xl hover:bg-dark'>All</div>
        <div className='sm:px-5 px-2 py-1 cursor-pointer border-2 border-white rounded-3xl hover:bg-dark'>Company News</div>
        <div className='sm:px-5 px-2 py-1 cursor-pointer border-2 border-white rounded-3xl hover:bg-dark'>Cryptocurrencies</div>
        <div className='sm:px-5 px-2 py-1 cursor-pointer border-2 border-white rounded-3xl hover:bg-dark'>Education</div>
        <div className='sm:px-5 px-2 py-1 cursor-pointer border-2 border-white rounded-3xl hover:bg-dark'>Insights</div>
        <div className='sm:px-5 px-2 py-1 cursor-pointer border-2 border-white rounded-3xl hover:bg-dark'>Market Analysis</div>
        <div className='sm:px-5 px-2 py-1 cursor-pointer border-2 border-white rounded-3xl hover:bg-dark'>Market News</div>
        <div className='sm:px-5 px-2 py-1 cursor-pointer border-2 border-white rounded-3xl hover:bg-dark'>Technical Analysis</div>
      </div>
      <div className="cards my-12 flex flex-wrap justify-around">
        <div className="card w-80 m-5 text-white">
          <img className='w-full h-48' src={require("../components/assets/images/blog1.png")} alt="" />
          <div className='my-3 flex justify-between items-center'><div className="date text-xs">21 February 2023</div><div className='text-sm py-2 px-1 bg-white text-black hover:bg-dark cursor-pointer hover:text-white'>INSIGHTS</div></div>
          <div className="title text-xl font-bold mb-3">Spotlight on BlackBerry</div>
          <p>BlackBerry (ticker: BB) is no longer just the mobile phone company that faded away after the iPhone's big debut. Do Blackberry stocks offer opportunities for traders in 2023?</p>
        </div>
        <div className="card w-80 m-5 text-white">
          <img className='w-full h-48' src={require("../components/assets/images/blog2.png")} alt="" />
          <div className='my-3 flex justify-between items-center'><div className="date text-xs">21 February 2023</div><div className='text-sm py-2 px-1 bg-white text-black hover:bg-dark cursor-pointer hover:text-white'>INSIGHTS</div></div>
          <div className="title text-xl font-bold mb-3">Is a goldilocks market good for traders?</div>
          <p>The "Goldilocks scenario" refers to economic conditions that are not too hot, not too cold, but is it really creating a favorable market for traders?</p>
        </div>
        <div className="card w-80 m-5 text-white">
          <img className='w-full h-48' src={require("../components/assets/images/blog3.png")} alt="" />
          <div className='my-3 flex justify-between items-center'><div className="date text-xs">21 February 2023</div><div className='text-sm py-2 px-1 bg-white text-black hover:bg-dark cursor-pointer hover:text-white'>INSIGHTS</div></div>
          <div className="title text-xl font-bold mb-3">Are tech stocks about to burn long traders?</div>
          <p>Big brand tech stock prices have been making a solid comeback in Q1 and traders are jumping on what they think is a digital money train heading for the hills.</p>
        </div>
        <div className="card w-80 m-5 text-white">
          <img className='w-full h-48' src={require("../components/assets/images/blog4.png")} alt="" />
          <div className='my-3 flex justify-between items-center'><div className="date text-xs">21 February 2023</div><div className='text-sm py-2 px-1 bg-white text-black hover:bg-dark cursor-pointer hover:text-white'>INSIGHTS</div></div>
          <div className="title text-xl font-bold mb-3">Possible bounce on Crude Oil after FED chair comments</div>
          <p>A weaker US currency makes oil cheaper for buyers holding other currencies and OPEC+ decided to keep the output limitations in place.</p>
        </div>
        <div className="card w-80 m-5 text-white">
          <img className='w-full h-48' src={require("../components/assets/images/blog5.png")} alt="" />
          <div className='my-3 flex justify-between items-center'><div className="date text-xs">21 February 2023</div><div className='text-sm py-2 px-1 bg-white text-black hover:bg-dark cursor-pointer hover:text-white'>INSIGHTS</div></div>
          <div className="title text-xl font-bold mb-3">Crypto market forecasting with indicators</div>
          <p>The crypto market is showing signs of life, so why not brush up on the best indicators for crypto market technical analysis?</p>
        </div>
        <div className="card w-80 m-5 text-white">
          <img className='w-full h-48' src={require("../components/assets/images/blog1.png")} alt="" />
          <div className='my-3 flex justify-between items-center'><div className="date text-xs">21 February 2023</div><div className='text-sm py-2 px-1 bg-white text-black hover:bg-dark cursor-pointer hover:text-white'>INSIGHTS</div></div>
          <div className="title text-xl font-bold mb-3">Can ChatGPT trade better than humans?</div>
          <p>AI machine learning models are a hot topic right now, and ChatGPT is the name on everyone’s lips, but does it have any practical application in the trading world?</p>
        </div>
      </div>
      <ReactPaginate className='pagination'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={60}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeLinkClassName="active"
      />
    </div>
      <div className="ready text-white relative">
        <img src={require("../components/assets/images/blogBanner.png")} alt="" />
        <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center bg-fade'>
          <div className='text-center p-5'>
          <div className='text-2xl'>{lang==="EN"?"Ready to get started?":"هل انت مستعد لكي تبدأ"}</div>
          <p className='text-center my-8'>{lang==="EN"?"It only takes 3 minutes to get your account set up and ready for trading":"لن يستغرق الامر اكثر من ثلات دقائق حتي تبدأ وتحصل علي حسابك لتبدأ التداول"}</p>
          <Link to="/register" className='bg-yellow text-black w-40 text-center py-3 px-5 text-sm  my-8 m-auto hover:text-yellow hover:bg-light-yellow' >{lang==="EN"?"Open account":"افتح حساب"}</Link>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  )
}

export default Blogsevents