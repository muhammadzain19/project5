import React from 'react'
export default function Home() {
    return (
        <div className='relative bg-[#063255]'>
            <div className='max-w-[270px] m-auto sm:max-w-[550px] md:max-w-[700px] lg:max-w-[934px] lg:grid lg:grid-cols-3 lg:pt-8 xl:max-w-[1190px] xl:pt-20 2xl:max-w-[1446px]'>
               <img className='absolute left-0 bottom-0 w-[49px] sm:w-[59px] lg:w-[39px] xl:w-[49px] 2xl:w-[59px]' src='images/Shape-Left.png'/>
               <img className='absolute right-0  pt-48 w-[43px] sm:w-[53px] lg:pt-0 lg:w-[36px] xl:w-[43px] 2xl:w-[53px]' src='images/Shape Right.png'/>
                <div className='pt-8 sm:pt-12 lg:pt-0'>
                    <div className='w-[100px] sm:w-[130px] lg:w-[100px] 2xl:w-[130px]'>
                        <img className='w-full' src='images/white-finswheet.png' />
                    </div>
                    <div className='pt-6 sm:pt-12 lg:pt-6 xl:pt-8'>
                        <p className='text-white text-[26px] font-semibold max-w-[400px] leading-[28px] sm:text-[50px] sm:text-center sm:leading-[52px] sm:max-w-full md:text-[53px] md:leading-[55px] lg:text-start lg:text-[26px] lg:leading-[30px] xl:text-[30px] xl:leading-[34px] 2xl:text-[38px] 2xl:leading-[42px]'>Bespoke software solutions</p>
                    </div>
                    <div className='flex gap-4 pt-6 sm:gap-8 sm:pt-12 sm:justify-center lg:justify-start  lg:gap-4 lg:pt-8 xl:pt-8 2xl:gap-6'>
                        <img className='w-[15px] h-[20px] sm:w-[20px] sm:h-[30px] lg:w-[15px] lg:h-[20px] 2xl:w-[18px] 2xl:h-[25px]' src='images/facebook.png' />
                        <img className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[20px] lg:h-[20px] 2xl:w-[25px] 2xl:h-[25px]' src='images/youtube.png' />
                        <img className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[20px] lg:h-[20px] 2xl:w-[25px] 2xl:h-[25px]' src='images/instagram.png' />
                        <img className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[20px] lg:h-[20px] 2xl:w-[25px] 2xl:h-[25px]' src='images/twitter.png' />
                    </div>
                </div>
                    <div className='flex gap-8 pt-14 sm:gap-28 justify-center md:gap-32 md:pt-20 lg:justify-start lg:pl-6 lg:gap-10 lg:pt-0 xl:gap-20 2xl:gap-28 xl:pl-8'>
                        <div className='text-white'>
                            <div>
                                <p className='text-[20px] font-bold sm:text-[26px] lg:text-[18px] 2xl:text-[22px]'>Company</p>
                            </div>
                            <div className=' cursor-pointer pt-4 leading-8 sm:text-[20px] sm:leading-10 lg:text-[14px] lg:pt-2 lg:leading-9 2xl:text-[18px] 2xl:pt-4 2xl:leading-10'>
                                <p>About Us</p>
                                <p>Careers</p>
                                <p>Services</p>
                                <p>Blog</p>
                            </div>
                        </div>
                        <div className='text-white'>
                            <div>
                                <p className='text-[20px] font-bold sm:text-[26px] lg:text-[18px] 2xl:text-[22px]'>Connect</p>
                            </div>
                            <div className=' cursor-pointer pt-4 leading-8 sm:text-[20px] sm:leading-10 lg:text-[14px] lg:pt-2 2xl:text-[18px] 2xl:pt-4 2xl:leading-10'>
                                <p>hi@finsweet.com</p>
                                <p className=''>+(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-12 sm:pt-16 lg:pt-0 xl:pl-12 lg:pl-8'>
                        <div>
                            <p className='text-[20px] font-bold text-white lg:text-[18px] 2xl:text-[22px]'>Join Newsletter</p>
                        </div>
                        <div className='pt-6'>
                            <div className=''>
                            <input  className='bg-white sm:pr-72 md:pr-[440px] lg:pr-5 xl:pr-20 2xl:pr-32  p-3 rounded-full pl-8 2xl:p-4 2xl:pl-10  2xl:text-[18px] border-none' type="text" name="entername" placeholder="Type email here"></input>
                            </div>
                        </div>
                        <div className='pt-2 sm:pt-4'>
                            <div className='bg-[#F58A07] p-3 rounded-full pl-8 max-w-[140px] sm:pl-12 sm:max-w-[170px] sm:m-auto lg:m-0 xl:pl-7 xl:max-w-[140px] 2xl:p-4 2xl:max-w-[170px] 2xl:pl-10'>
                                <p className='text-white font-semibold 2xl:text-[18px] cursor-pointer'>Subscribe</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='text-white max-w-[270px] sm:max-w-[550px] m-auto pt-10 pb-8 md:pt-14 lg:max-w-[934px] lg:flex lg:justify-between xl:max-w-[1190px] xl:pt-20 2xl:max-w-[1446px] 2xl:pt-24 xl:pb-20'>
                <p className='text-center lg:text-start sm:text-[20px] md:text-[24px] lg:text-[16px] 2xl:text-[18px]'>© All rights reserved – Finsweet</p>
                <div className=' cursor-pointer flex gap-5 pt-2 text-[12px] justify-center sm:text-[14px] md:text-[16px] lg:justify-start lg:pt-0 lg:text-[16px] xl:gap-10 2xl:text-[16px]'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}