import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

import { FaStarHalfAlt } from "react-icons/fa";

export default function Card({ name, image,desc }) {
    return (
        <div className='lg:max-w-[90%] md:max-w-[90%] w-full relative mx-auto p-6 bg-white shadow-lg rounded-lg'>
            <div className='flex lg:flex-row md:flex-row flex-col items-center'>
                <div className='flex flex-col gap-7 py-5'>
                    <p className='text-[20px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo fugit.
                    </p>
                    <div className='flex gap-1'>
                        <FaStar className='text-[20px] text-yellow-600' />
                        <FaStar className='text-[20px] text-yellow-600' />
                        <FaStar className='text-[20px] text-yellow-600' />
                        <FaStar className='text-[20px] text-yellow-600' />
                        <FaStarHalfAlt
                        className='text-[20px] text-yellow-600' />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-[20px]'>{name}</h1>
                        <p className=' text-gray-700 text-[20px]'>{desc}</p>
                    </div>
                </div>
                <img className='w-[250px]  h-[250px] rounded-full' src={image} alt="" />
            </div>
        </div>
    )
}
