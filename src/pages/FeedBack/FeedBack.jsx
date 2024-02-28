import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteRight,
    faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const FeedBack = () => {
  return (
      <div
          className=' h-screen sm:h-screen flex sm:justify-center items-center flex-col sm:mt-0 mt-5 mb-5'>
          <h1 className=' text-4xl font-semibold text-cyan-950'>Feedback</h1>
          <h1 className=' text-2xl font-semibold text-cyan-950 mb-10'>Some of our user's words</h1>
          <div className=' w-11/12 sm:h-[35%] h-full flex justify-center items-center border bg-slate-100 flex-col sm:flex-row rounded-lg'>
              <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                  }}
                  keyboard={{
                      enabled: true,
                  }}
                  pagination={{
                      clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper h-full w-full "
              >
                  <SwiperSlide
                      className=''>
                      <div className=' flex w-full h-full justify-center items-center'>
                          <div className=' flex sm:flex-row flex-col justify-center items-center w-[80%] h-full'>
                              <div className=' flex flex-col justify-center sm:items-start items-center p-4'>
                                  <h1 className='text-xl font-medium underline '>Keshab Das</h1>
                                  <div className=' w-full flex flex-col justify-center'>
                                      <FontAwesomeIcon icon={faQuoteLeft} className=' text-4xl text-slate-300' />
                                      <p className=' text-xl'>I must say I was delighted with the service you provided - it was just what I wanted. This is the second time I have used your services, and both times you provided a faultless experience.</p>
                                      <FontAwesomeIcon icon={faQuoteRight} className=' text-4xl text-slate-300' />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide
                      className=''>
                      <div className=' flex w-full h-full justify-center items-center'>
                          <div className=' flex sm:flex-row flex-col justify-center items-center w-[80%] h-full'>
                              <div className=' flex flex-col justify-center sm:items-start items-center p-4'>
                                  <h1 className='text-xl font-medium underline '>Keshab Das</h1>
                                  <div className=' w-full flex flex-col justify-center'>
                                      <FontAwesomeIcon icon={faQuoteLeft} className=' text-4xl text-slate-300' />
                                      <p className=' text-xl'>I must say I was delighted with the service you provided - it was just what I wanted. This is the second time I have used your services, and both times you provided a faultless experience.</p>
                                      <FontAwesomeIcon icon={faQuoteRight} className=' text-4xl text-slate-300' />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide
                      className=''>
                      <div className=' flex w-full h-full justify-center items-center'>
                          <div className=' flex sm:flex-row flex-col justify-center items-center w-[80%] h-full'>
                              <div className=' flex flex-col justify-center sm:items-start items-center p-4'>
                                  <h1 className='text-xl font-medium underline '>Keshab Das</h1>
                                  <div className=' w-full flex flex-col justify-center'>
                                      <FontAwesomeIcon icon={faQuoteLeft} className=' text-4xl text-slate-300' />
                                      <p className=' text-xl'>I must say I was delighted with the service you provided - it was just what I wanted. This is the second time I have used your services, and both times you provided a faultless experience.</p>
                                      <FontAwesomeIcon icon={faQuoteRight} className=' text-4xl text-slate-300' />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide
                      className=''>
                      <div className=' flex w-full h-full justify-center items-center'>
                          <div className=' flex sm:flex-row flex-col justify-center items-center w-[80%] h-full'>
                              <div className=' flex flex-col justify-center sm:items-start items-center p-4'>
                                  <h1 className='text-xl font-medium underline '>Keshab Das</h1>
                                  <div className=' w-full flex flex-col justify-center'>
                                      <FontAwesomeIcon icon={faQuoteLeft} className=' text-4xl text-slate-300' />
                                      <p className=' text-xl'>I must say I was delighted with the service you provided - it was just what I wanted. This is the second time I have used your services, and both times you provided a faultless experience.</p>
                                      <FontAwesomeIcon icon={faQuoteRight} className=' text-4xl text-slate-300' />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>


              </Swiper>
          </div>
      </div>
  )
}

export default FeedBack
