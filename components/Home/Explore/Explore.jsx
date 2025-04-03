import React from 'react'

export default function Explore() {
    return (
        <div className='bg-[#000000] py-[64px]'>
            <div className='text-center px-4'>
                <h1 className='text-white text-[35px] font-bold'>
                    Explore ultimate feature with premium
                </h1>
                <p className='text-gray-500 text-[19px] mt-4'>
                    Tell us your Apple ID email address so we could send you a TestFlight invitation directly.
                </p>
                <button className='bg-blue-700 hover:bg-blue-800 cursor-pointer text-white py-3.5 px-7 rounded-full mt-5 text-[18px] font-bold'>
                    Start 14 Days Free Trial
                </button>
                <p className='text-gray-500 text-[19px]  mt-3.5'>
                    No credit Card Required
                </p>
            </div>
        </div>
    )
}
