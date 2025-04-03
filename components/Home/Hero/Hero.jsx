import Image from 'next/image'
import React from 'react'
export default function Hero() {
    return (
        <div id='home' className='w-full pt-[12vh]  pb-20 bg-[#f7f6fb]'>
            <div className='lg:max-w-[80%] max-w-[80%] mx-auto flex justify-center'>
                <div className='grid  grid-cols-1 lg:grid-cols-2 items-center'>
                    <div className='space-y-5'>
                        <div className='bg-white shadow-md px-5 flex space-x-3 items-center py-2 rounded-full w-fit'>
                            <div className='px-5 bg-blue-700 rounded-full text-[18px] text-white'>
                                New
                            </div>
                            <div>
                                We have updated our term & condition policy
                            </div>

                        </div>
                        <h1 className='text-[48px] font-black leading-15'>
                            The premier workspace companion for your daily needs.
                        </h1>
                        <p className='text-gray-700 text-[18px]'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ipsam laudantium qui velit assumenda commodi laboriosam cumque laborum perferendis totam.
                        </p>
                        <div className='flex gap-7'>
                            <img src="/images/gp.png" alt="" width={150} height={150} />
                            <img src="/images/as.png" alt="" width={150} height={150} />
                        </div>
                    </div>
                    <Image className='lg:block hidden' src='/images/hero.png' alt='hero' width={700} height={700} />
                </div>
            </div>

        </div>
    )
}
