import React from 'react'
import optimize from '../../Images/optimize.jpg'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link, NavLink } from "react-router-dom";
import { BsArrowRightShort } from 'react-icons/bs'
import '../../Aboutcss/gradient.css'


const Section1optimizer = () => {
  return (
    <div style={{ backgroundColor: '#E3E2F8', overflow:'hidden' }}>
      <div className='col-sm-9 col-lg-10 col-11  mx-auto'>
        <div className='mb-3' style={{ paddingTop: '100px' }} >
          <div className='row d-flex justify-content-start'>
            <div className='col-md-9 col-xxl-8 col-11' style={{ marginRight: '0px' }}>
              <h6 className='px-3' style={{ color: '#BD10E0' }}>OPTIMIZE YOUR TRADE</h6>
              <h1 style={{ color: 'black', borderLeft: '2px solid #BD10E0' }} className='display-4 fw-bolder my-3 px-2   col-12 '> Evolve trading strategies by and optimize future trades</h1>
              <p className='  px-3' style={{ color: 'black' }}>Machine Learning turns your the risk reward ratio for your trades in your benefit</p>
            </div>
          </div>
        </div>
        </div>

        <div className="gradient-box my-3 mt-5 "></div>

        <div className='col-sm-9 col-lg-10 col-11  mx-auto' >
        <div className='row d-flex justify-content-start my-5  ' style={{paddingTop:'70px'}} >
          <div className='col-md-9 col-xxl-8 col-11 ' style={{ marginRight: '0px' }}>
            <h6 className='px-3' style={{ color: '#BD10E0' }}>Trade Optimizing For You</h6>
            <h1 style={{ color: 'black', borderLeft: '2px solid #BD10E0' }} className=' fw-bolder my-3 px-2 col-12 '> Use Machine Learning to support your trading</h1>
            <p className='my-3 px-3' style={{ color: 'black' }}>The Trade Optimizer is powered by advanced machine learning algorithms that meticulously scrutinize your trading data in relation to market data. It delves into your historical trades, studying entry and exit points, duration, and the results of each trade. By cross-referencing this with comprehensive market data, it uncovers hidden trends and patterns that you might have missed.</p>
          </div>
        </div>


        <div className='row px-3' style={{}}>
          <div className='my-5 col-lg-6 col-11'>
            <h3 className='mb-4' style={{ color: '#BD10E0' }}>Trading CoPilot to optimize your trading journey</h3>
            <p style={{ color: 'black' }}>One of the crucial insights the Trade Optimizer provides is regarding optimal trade closure times. It performs a "what-if" analysis, demonstrating how closing a trade at a different point in time could have yielded better returns. Whether it’s recognizing a pattern where staying in a trade longer could have led to higher profits, or identifying instances where early profit-taking could have minimized losses, Trade Optimizer is there to provide you with informed suggestions.</p>
            <ul>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Moving Averages : SMA, EMA, DEMA, T3, WMA</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />RSI</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Bollinger Bands</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Parabolic SAR</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Average True Range</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Aroon Oscillator</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Stochastic Oscillator</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Median Price</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Stochastic Fast</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Weighted Close Price</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Linear Regression</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />...and more</p>

              {/* <li><AiFillCheckCircle className='mt-2 me-1' style={{ color: '#D3C5F3',fontSize:'large' }} />...and more</li> */}
            </ul>
          </div>
          <div className='my-5 col-lg-6  col-12 '>
            <img style={{ width: '100%' }} src={optimize} alt="circle" />
          </div>

        </div>

        <div className='row px-3' style={{}}>
          <div className='my-5 col-lg-6 col-11'>
            <h3 className='mb-4' style={{ color: '#BD10E0' }}>Real Time Support With Trading</h3>
            <p style={{ color: 'black' }}>But the intelligence of AITradingSpy doesn't stop at post-trade analysis. Your CoPilot takes these insights and proactively applies them in real-time, guiding your decision-making in live trading situations. If you've left money on the table in the past, your CoPilot might suggest holding on to a trade a little longer. If your trading history shows a pattern of holding onto losing positions, the CoPilot might advise you to take profits early.</p>
            <ul>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Understand Trading Style and Strategy</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Trading History combined with indicators</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Uniquely personalized for you</p>
              <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />An AI CoPilot for your growth as trader</p>
            </ul>
          </div>
          <div className='my-5 col-lg-6 col-11'>
            <h3 className='mb-4' style={{ color: '#BD10E0' }}>AI Trade Optimizer with advanced Machine Learning</h3>
            <p style={{ color: 'black' }}>Trade Optimizer is your constant trading companion, delivering valuable insights from your past to inform and improve your future trades. By integrating your personal trading history with comprehensive market data, it offers a learning experience tailored uniquely to you.</p>
            <p style={{ color: 'black' }}>With AITradingSpy's Trade Optimizer, you're not just learning from your past trades; you're shaping a smarter trading future. Let AITradingSpy be your co-pilot, guiding you towards more profitable trading decisions and a more prosperous trading journey.</p>
          </div>

        </div>

        {/* <div className='d-flex justify-content-center row mx-5' style={{ padding:'100px'}}>
        <h3 style={{ color:'#BD10E0'}} className='text-center col-12'>Try using technical indicators in your portfolio</h3>
        <p style={{ color:'black'}} className='text-center col-12'>Using technical indicators can be simple and easy with Pluto</p>
        
        <button type="button" style={{backgroundColor:'transparent ', border:'1px solid #BD10E0', width:'200px'}} className="btn my-3 text-center mx-auto rounded-pill">Request Early Access</button>
        </div> */}

<div className='d-flex justify-content-center row mx-lg-5 mx-1 pt-5' style={{ paddingBottom: '100px' }}>
                    <div className="gradient-box-2 mt-1 my-3">
                        <div className='my-5 '>
                            <h3 style={{ color: '#BD10E0' }} className='text-center col-12'>Build and Nurture Your Community Grow</h3>
                            <button type="button" style={{ backgroundColor: '#E9E8F9', boxShadow: '2px 2px lightgrey', width: '200px' }} className="btn d-flex align-items-center justify-content-between my-3 text-center mx-auto rounded-pill">
                            <NavLink
                to="/early" style={{textDecoration:'none',color:'black'}}>
                  Request Early access</NavLink><BsArrowRightShort />
            </button>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Section1optimizer