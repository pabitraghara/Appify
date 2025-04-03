import Image from 'next/image';
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
export default function About() {
    return (
        <div id='about' className='w-full pt-[64px] pb-[64px]'>
            <div className='max-w-[90%]  mx-auto'>
                <h2 className='text-[35px] font-bold text-center'>
                    Why you choose this application
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-[64px] pb-[64px]'>
                    <div className='flex flex-col items-center justify-center gap-5 text-center'>
                        <img src="/images/i1.png" alt="" />
                        <h3 className='text-lg font-bold text-center'>
                            Create Free Account
                        </h3>
                        <p className='text-center text-gray-700'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.
                        </p>
                        <div className='flex item-center justify-center gap-2 text-[20px] font-bold text-blue-900 text-center'>
                            <p className='text-[19px] '>
                                Start Earning
                            </p>
                            <div className='flex items-center text-[19px]'>
                                →
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <img src="/images/i2.png" alt="" />
                        <h3 className='text-lg font-bold text-center'>
                            Create Free Account
                        </h3>
                        <p className='text-center text-gray-700'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.
                        </p>
                        <div className='flex item-center justify-center gap-2 text-[20px] font-bold text-blue-900 text-center'>
                            <p className='text-[19px]'>
                                Start Earning
                            </p>
                            <div className='flex items-center text-[19px]'>
                                →
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <img src="/images/i3.png" alt="" />
                        <h3 className='text-lg font-bold text-center'>
                            Create Free Account
                        </h3>
                        <p className='text-center text-gray-700'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.
                        </p>
                        <div className='flex item-center justify-center gap-2 text-[20px] font-bold text-blue-900'>
                            <p className='text-[19px]'>
                                Start Earning
                            </p>
                            <div className='flex items-center text-[19px]'>
                                →
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <img src="/images/i4.png" alt="" />
                        <h3 className='text-lg font-bold text-center'>
                            Create Free Account
                        </h3>
                        <p className='text-center text-gray-700'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.
                        </p>
                        <div className='flex item-center justify-center gap-2 text-[20px] font-bold text-blue-900'>
                            <p className='text-[19px]'>
                                Start Earning
                            </p>
                            <div className='flex items-center text-[19px]'>
                                →
                            </div>
                        </div>
                    </div>
                </div>



                <div className='max-w-[80%] mx-auto pt-[64px]'>
                    <div className='grid lg:grid-cols-2 items-center gap-30'>
                        <img src="/images/a.jpg" width={700} height={700} alt="" />
                        <div className=''>
                            <h1 className='font-semibold text-orange-500 text-[18px]'>
                                Audience tracking and insights
                            </h1>
                            <h1 className='font-bold text-[30px] leading-8 mt-5'>
                                Powerful analytics tools that put you in control and are fully customizable.

                            </h1>
                            <p className='mt-5 text-gray-700'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi dolorem, sint ipsa voluptate maiores quidem. Velit tempora minus tempore aperiam enim, voluptate laborum doloremque.
                            </p>

                            <div className='mt-9 flex items-center text-[18px]'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                <p className='font-bold text-gray-800 '>Chat prompt module supported</p>
                            </div>
                            <div className='mt-2 flex items-center text-[18px]'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                <p className='font-bold text-gray-800 '>Enjoy unlimited features by paid plan</p>

                            </div>
                            <div className='mt-2 flex items-center text-[18px]'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                <p className='font-bold text-gray-800 '>
                                    Manage ultimate conversation
                                </p>


                            </div>
                            <button className='mt-6 px-10 py-3 bg-gray-200 font-bold text-[17px] rounded-full hover:bg-blue-700 transition-all duration-200 hover:text-white cursor-pointer'>
                                Explore More →
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
