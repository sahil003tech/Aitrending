import React from 'react'
import community from '../../Images/community.jpg'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link, NavLink } from "react-router-dom";
import { BsArrowRightShort } from 'react-icons/bs'
import '../../Aboutcss/gradient.css'

const Section1Community = () => {
    return (
        <div style={{ backgroundColor: '#E3E2F8', overflow:'hidden' }}>
            <div className='col-sm-9 col-lg-10 col-11 row mx-auto'>
                <div className='mb-2 ' style={{ paddingTop: '100px' }} >
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-6 ' style={{ marginRight: '0px' }}>
                            <h6 style={{ color: '#BD10E0' }} className='px-3'>COMMUNITY BUILDER</h6>
                            <h1 style={{ color: 'black', borderLeft: '2px solid #BD10E0' }} className=' display-4 fw-bolder my-3 px-2 col-9 '>Build Your Community On Our Platform</h1>
                            <p className='my-3 px-3' style={{ color: 'black' }}>Community Builder is more than just a platform for interaction; it's a comprehensive suite of tools designed to help community leaders engage, educate, and grow their membership base. It enables you to showcase your trading results, strategies, and insights, providing transparent and compelling evidence of your success to attract and retain community members.</p>
                        </div>
                        <div className='col-lg-6 col-sm-11 col-11 px-0' style={{ marginRight: '0px' }}>
                            <img className='my-1' style={{ width: '100%' }} src={community} alt="circle" />
                        </div>
                    </div>
                </div>
                </div>

                <div className="gradient-box my-5"></div>
                <div className='col-sm-9 col-lg-10 col-11  mx-auto' >
                <div className='row d-flex justify-content-start ' style={{ marginTop: '100px' }}>
                    <div className='col-sm-9 col-11 ' style={{ marginRight: '0px' }}>
                        <h6 className='px-3' style={{ color: '#BD10E0' }}>GET CONTROL OF YOUR COMMUNITY</h6>
                        <h1 style={{ color: 'black', borderLeft: '2px solid #BD10E0' }} className=' fw-bolder my-3 px-2 col-lg-9 col-11 '>Integrated Community Builder with AITradingSpy Platform</h1>
                        <p className='my-3 px-3' style={{ color: 'black' }}>Unlike standard communication platforms like Discord, Community Builder is deeply integrated into AITradingSpy's trading environment. This unique feature allows community leaders to demonstrate their strategies in real-time, sharing their successes and learning experiences, all within the context of actual market events</p>
                    </div>
                </div>

                <div className='row px-4' style={{}}>
                    <div className='col-lg-6 col-11 my-5'>
                        <p className=' fst-italic' style={{ color: 'black' }}>Please note that there is no guarantee that any investment strategy will achieve its objectives.</p>
                    </div>
                    <div className='col-lg-6 col-11 my-5'>
                        <h3 className='mb-3' style={{ color: '#BD10E0' }}>Build for the Future</h3>
                        <p style={{ color: 'black' }}>In addition to showcasing your trading acumen, Community Builder also offers advanced tools to monetize your community effectively. With built-in payment gateways, managing subscription fees becomes a breeze. You set the terms for access to your community or specific content, providing an additional stream of income while offering valuable insights to your followers.</p>

                        <ul className='  ' >
                            <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Trade Performance</p>
                            <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Assett Performance</p>
                            <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Stratergy Performance</p>
                            <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Overall Community Performance</p>
                        </ul>
                    </div>

                    <div className='col-lg-6 col-11 my-5'>
                        <h3 className='mb-3' style={{ color: '#BD10E0' }}>Improve your Communities Trading</h3>
                        <p style={{ color: 'black' }}>Community Builder on AITradingSpy reimagines what a trading community can be, offering superior tools for interaction, monetization, and growth. Nurture your private communities with us, and take your trading conversation to the next level. With Community Builder, your trading community becomes more than a place to share insights – it becomes a powerful vehicle for success.</p>

                        <ul >
                            <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Nurture your community</p>
                            <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Tailor your content</p>
                            <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Watch your community thrive</p>
                            <p className='   break-words text-start mb-0 ' style={{ color: 'black' }}><AiFillCheckCircle className='me-2 mb-1' style={{ color: '#D3C5F3' }} />Trends and preferences of your community members</p>
                        </ul>
                    </div>

                </div>

                {/* <div className='d-flex justify-content-center row px-3 py-5' style={{}}>
                    <h3 style={{ color: '#BD10E0' }} className='text-center col-12'>Build and Nurture Your Community Grow</h3>
                    <button type="button" style={{ backgroundColor: '#E9E8F9 ', boxShadow: '2px 2px lightgrey', width: '200px' }} className="btn my-3 text-center mx-auto rounded-pill">Request Early Access<BsArrowRightShort /></button>
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

export default Section1Community