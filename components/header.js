import React from 'react'
import Link from 'next/link';
export default function header() {
    return (
        <div>
            <header className='flex justify-between pb-3 max-w-[270px] sm:max-w-[550px] m-auto pt-3 md:max-w-[700px] lg:max-w-[934px] xl:max-w-[1190px] sm:pb-4 2xl:max-w-[1446px] 2xl:pb-5'>
                <div className='w-[80px] pt-2 sm:w-[90px] sm:pt-2 md:w-[100px] lg:w-[110px] xl:w-[140px] 2xl:w-[160px] 2xl:pt-3'>
                    <img src="images/finsweet-logo.png" />
                </div>
                <div className='flex gap-10 sm:gap-2 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 '>
                    <div className=' cursor-pointer font-Roboto hidden font-semibold text-gray-600 sm:flex sm:pt-3 sm:text-[10px] sm:gap-3 md:text-[12px] lg:text-[13px] lg:gap-4 xl:text-[16px] xl:gap-6 xl:font-bold 2xl:gap-8 2xl:text-[18px] 2xl:pt-4'>
                        <a href='http://localhost:3000/About'>About Us</a>
                        <p>Careers</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                    </div>
                    <div>
                        <p className='font-bold text-[#F58A07] bg-[#F58A071A] p-3 pl-3 pr-3  rounded-full text-[9px] sm:pl-3 sm:pr-3 md:text-[12px] md:p-3 md:pl-4 md:pr-4 lg:text-[13px] lg:pr-5 lg:pl-5 xl:text-[16px] xl:pr-7 xl:pl-7 2xl:text-[22px] 2xl:pl-9 2xl:pr-9 2xl:p-4 2xl:rounded-full cursor-pointer'>Clone Project</p>
                    </div>
                </div>
            </header>
        </div>
    )
}
