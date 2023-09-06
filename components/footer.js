import React from 'react'

export default function Home() {
    return (
        <div className='bg-sky-950'>
            <div className='max-w-[270px] m-auto sm:max-w-[550px] md:max-w-[700px] lg:max-w-[934px] lg:grid lg:grid-cols-3'>
                <div className='pt-8 sm:pt-12'>
                    <div className='w-[100px] sm:w-[130px] lg:w-[100px]'>
                        <img className='w-full' src='images/white-finswheet.png' />
                    </div>
                    <div className='pt-6 sm:pt-12 lg:pt-6'>
                        <p className='text-white text-[26px] font-semibold max-w-[400px] leading-[28px] sm:text-[50px] sm:text-center sm:leading-[52px] sm:max-w-full md:text-[53px] md:leading-[55px] lg:text-start lg:text-[28px] lg:leading-[32px]'>Bespoke software solutions</p>
                    </div>
                    <div className='flex gap-4 pt-6 sm:gap-8 sm:pt-12 sm:justify-center lg:justify-start  lg:gap-4 lg:pt-'>
                        <img className='w-[15px] h-[20px] sm:w-[20px] sm:h-[30px] lg:w-[15px] lg:h-[20px]' src='images/facebook.png' />
                        <img className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[20px] lg:h-[20px]' src='images/youtube.png' />
                        <img className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[20px] lg:h-[20px]' src='images/instagram.png' />
                        <img className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[20px] lg:h-[20px]' src='images/twitter.png' />
                    </div>
                </div>
                    <div className='flex gap-8 pt-14 sm:gap-28 justify-center md:gap-32 md:pt-20 lg:justify-start lg:gap-0'>
                        <div className='text-white'>
                            <div>
                                <p className='text-[20px] font-bold sm:text-[26px]'>Company</p>
                            </div>
                            <div className='pt-4 leading-8 sm:text-[20px] sm:leading-10'>
                                <p>About Us</p>
                                <p>Careers</p>
                                <p>Services</p>
                                <p>Blog</p>
                            </div>
                        </div>
                        <div className='text-white'>
                            <div>
                                <p className='text-[20px] font-bold sm:text-[26px]'>Connect</p>
                            </div>
                            <div className='pt-4 leading-8 sm:text-[20px] sm:leading-10'>
                                <p>hi@finsweet.com</p>
                                <p className=''>+(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-12 sm:pt-16'>
                        <div>
                            <p className='text-[20px] font-bold text-white'>Join Newsletter</p>
                        </div>
                        <div className='pt-6'>
                            <div className='bg-white p-3 rounded-full pl-8'>
                                <p className='font-semibold text-gray-500'>Type email here</p>
                            </div>
                        </div>
                        <div className='pt-2 sm:pt-4'>
                            <div className='bg-orange-400 p-3 rounded-full pl-8 max-w-[140px] sm:pl-12 sm:max-w-[170px] sm:m-auto lg:m-0'>
                                <p className='text-white font-semibold'>Subscribe</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='text-white max-w-[270px] sm:max-w-[550px] m-auto pt-10 pb-8 md:pt-14 lg:max-w-[934px]'>
                <p className='text-center lg:text-start sm:text-[20px] md:text-[24px]'>© All rights reserved – Finsweet</p>
                <div className='flex gap-5 pt-2 text-[12px] justify-center sm:text-[14px] md:text-[16px] lg:justify-start'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}