import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <div id='contact' className='pt-[80px]'>
            <div className='py-10 max-w-[85%] mx-auto'>
                <div className='flex flex-wrap justify-between gap-5'>
                    <div className='w-[250px]'>
                        <h1 className="text-xl md:text-2xl font-bold">
                            <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
                        </h1>
                        <p className='mt-5 text-gray-800'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-[20px] font-bold'>About Us</li>
                        <li className='font-bold text-gray-600'>Support Center</li>
                        <li className='font-bold text-gray-600'>Customer Support</li>
                        <li className='font-bold text-gray-600'>About Us</li>
                        <li className='font-bold text-gray-600'>Copyright</li>
                        <li className='font-bold text-gray-600'>Popular Campaign</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-[20px] font-bold'>Our Information</li>
                        <li className='font-bold text-gray-600'>Return Policy</li>
                        <li className='font-bold text-gray-600'>Privacy Policy</li>
                        <li className='font-bold text-gray-600'>Terms & Conditi</li>
                        <li className='font-bold text-gray-600'>Site Map</li>
                        <li className='font-bold text-gray-600'>Store Hours</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-[20px] font-bold'> Contact Info</li>
                        <li> Amsterdam,Netherlands</li>
                        <li className='font-bold text-gray-600'>+01 23454 65456</li>
                        <li className='font-bold text-gray-600'>7 Days - 8am - 10am</li>
                        <li className='font-bold text-gray-600'>info.example@gmail.com</li>
                    </ul>
                </div>
                <hr className='border-gray-300 mt-7' />
                <div className='mt-7 flex flex-col  lg:flex-row lg:justify-between justify-center items-center'>
                    <p className='text-gray-700 text-center lg:text-start'>Copyright © 2025 Webdev. All rights reserved</p>
                    <div className='text-gray-700 flex gap-2.5'>
                        <p>
                            Social :
                        </p>
                        <div className='flex items-center gap-2.5'>
                            <FaFacebook className='cursor-pointer text-gray-600 hover:text-gray-800'/>
                            <FaInstagram className='cursor-pointer text-gray-600 hover:text-gray-800'/>
                            <FaTwitter className='cursor-pointer text-gray-600 hover:text-gray-800'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
