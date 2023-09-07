import "../app/globals.css"
import Footer from "../components/footer"
import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <header className='flex justify-between pb-3 max-w-[270px] sm:max-w-[550px] m-auto pt-3 md:max-w-[700px] lg:max-w-[934px] xl:max-w-[1190px] sm:pb-4 2xl:max-w-[1446px] 2xl:pb-5'>
        <div className='w-[80px] pt-2 sm:w-[90px] sm:pt-2 md:w-[100px] lg:w-[110px] xl:w-[140px] 2xl:w-[160px] 2xl:pt-3'>
          <img src="images/finsweet-logo.png" />
        </div>
        <div className='flex gap-10 sm:gap-2 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 '>
          <div className=' cursor-pointer font-Roboto hidden font-semibold text-gray-600 sm:flex sm:pt-3 sm:text-[10px] sm:gap-3 md:text-[12px] lg:text-[13px] lg:gap-4 xl:text-[16px] xl:gap-6 xl:font-bold 2xl:gap-8 2xl:text-[18px] 2xl:pt-4'>
            <p>About Us</p>
            <p>Careers</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact us</p>
          </div>
          <div>
            <p className='font-bold text-orange-400 bg-orange-50 p-3 pl-3 pr-3  rounded-full text-[9px] sm:pl-3 sm:pr-3 md:text-[12px] md:p-3 md:pl-4 md:pr-4 lg:text-[13px] lg:pr-5 lg:pl-5 xl:text-[16px] xl:pr-7 xl:pl-7 2xl:text-[22px] 2xl:pl-9 2xl:pr-9 2xl:p-4 2xl:rounded-full cursor-pointer'>Clone Project</p>
          </div>
        </div>
      </header>
      <div className='bg-image bg-[#DCEAF5] pb-4 sm:pb-0'>
        <div className="flex flex-col-reverse pt-5 max-w-[270px] m-auto sm:flex-row sm:max-w-[550px] sm:pt-10 md:max-w-[700px] md:pt-16 lg:max-w-[934px] xl:max-w-[1190px] xl:pt-24 2xl:max-w-[1446px]">
          <div className='pt-4 sm:pt-2' >
            <p className="text-[28px] text-center text-gray-800 font-bold leading-[32px] sm:text-left sm:text-[30px] sm:leading-[34px] md:text-[34px] md:leading-[38px] lg:text-[40px] lg:leading-[44px] xl:text-[56px] xl:leading-[60px] 2xl:text-[68px] 2xl:leading-[74px]">
              Prosper with our bespoke solutions
            </p>
            <p className="text-[14px] text-center text-gray-500 font-medium max-w-[270px] leading-[18px] pt-3 sm:text-left sm:text-[12px] sm:max-w-[240px] sm:leading-[16px] sm:pt-2 md:text-[14px] md:max-w-[270px] md:leading-[20px] md:pt-4 lg:text-[16px] lg:max-w-[340px] lg:pt-6 xl:text-[18px] xl:max-w-[480px] xl:pt-8 xl:leading-[28px] 2xl:text-[22px] 2xl:leading-[32px] 2xl:max-w-[620px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="flex justify-center gap-2 pt-3 sm:justify-start sm:pt-2 sm:gap-2 md:pt-4 md:gap-4 lg:gap-5 lg:pt-6 xl:pt-8 xl:gap-8 2xl:gap-12 2xl:pt-11">
              <p className="text-[11px]  cursor-pointer text-white font-semibold bg-orange-400 p-3 pl-3 pr-3 sm:pl-7 sm:pr-7 rounded-[30px] sm:text-[10px] sm:p-3 md:text-[12px] md:p-4 lg:text-[13px] lg:pl-4 lg:pr-4 xl:text-[15px] xl:pr-7 xl:pl-7 2xl:text-[18px] 2xl:pl-9 2xl:pr-9 2xl:p-5 2xl:rounded-full">
                See Our Services
              </p>
              <p className="text-[11px]  cursor-pointer text-gray-800 font-semibold pt-[13px] sm:text-[12px] sm:pt-[11px] md:text-[13px] md:pt-[15px] lg:text-[14px] xl:text-[16px] xl:pt-[16px] 2xl:text-[18px] 2xl:pt-[21px]">
                See All Services
              </p>
            </div>
            <p className="text-[15px] text-center text-gray-400 font-medium pt-3 sm:text-left sm:text-[14px] sm:pt-2 md:text-[15px] md:pt-4 lg:pt-6 lg:text-[16px] xl:text-[18px] xl:pt-8 2xl:text-[22px] 2xl:pt-12">
              Worked with 100+ Companies
            </p>
            <div className="flex justify-center gap-[20px] pt-4 sm:justify-start sm:pt-3 sm:gap-[16px] md:pt-5 md:gap-[19px] lg:gap-[25px] lg:pt-6 xl:gap-[35px] 2xl:gap-[39px]">
              <div>
                <img className="w-[75px] h-[15px] sm:w-[75px] sm:h-[20px] md:w-[110px] 2xl:w-[130px] 2xl:h-[34px]" src="images/logoipsum1.png" />
              </div>
              <div>
                <img className="w-[75px] h-[15px] sm:w-[75px] sm:h-[20px] md:w-[110px] 2xl:w-[130px] 2xl:h-[34px]" src="images/logoipsum2.png" />
              </div>
              <div>
                <img className="w-[75px] h-[15px] sm:w-[75px] sm:h-[20px] md:w-[110px] 2xl:w-[130px] 2xl:h-[34px]" src="images/logoipsum3.png" />
              </div>
            </div>
          </div>
          <div>
            <img className="w-[400px] h-[190px] sm:w-[540px] sm:h-[260px] md:w-[700px] md:h-[340px] lg:w-[900px] lg:h-[400px] xl:w-[1200px] xl:h-[460px] 2xl:w-[1600px] 2xl:h-[570px]" src="images/menmen-img.png" />
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[270px] m-auto pt-10  sm:max-w-[550px] sm:pt-14 md:max-w-[700px] md:pt-20   lg:max-w-[934px] lg:pt-24 xl:max-w-[1190px] 2xl:max-w-[1446px]">
          <p className="text-[26px] text-gray-800 font-bold leading-[30px]   sm:text-[31px] sm:max-w-[440px] sm:leading-[35px]  md:text-[40px] md:max-w-[580px] md:leading-[44px] lg:text-[42px] lg:leading-[46px] xl:text-[46px] lg:max-w-[680px] 2xl:text-[56px] 2xl:max-w-[750px] 2xl:leading-[60px]">We help more than 1500 companies from all sectors</p>
          <p className="text-[12px] text-gray-600 font-semibold max-w-[250px] leading-[18px] pt-[16px] sm:text-[14px] sm:max-w-[390px]  md:text-[16px] md:max-w-[580px] md:leading-[28px] md:pt-[20px] lg:text-[17px] lg:leading-[32px] lg:pt-[24px] lg:max-w-[600px] xl:max-w-[700px] 2xl:text-[22px] 2xl:max-w-[840px] 2xl:leading-[30px] 2xl:pt-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          <div className="grid grid-cols-1 gap-7 pt-[25px] sm:grid-cols-2 sm:pt-[36px] lg:grid-cols-3 lg:gap-5 lg:pt-[42px] xl:gap-3 xl:pt-[60px] 2xl:grid-cols-3 2xl:gap-1 2xl:pt-[70px]">
            <div>
              <img className="h-[250px] 2xl:w-[430px]" src="images/box1.png" />
              <p className="text-[20px] font-semibold pt-2 md:text-[22px] md:pt-3 lg:pt-4 xl:text-[24px] xl:pt-5 2xl:text-[30px] 2xl:pt-6">Business strategy</p>
              <p className="text-[12px] font-semibold pt-1 text-gray-600 md:text-[14px] md:pt-2 xl:text-[15px] xl:max-w-[360px] xl:pt-4 2xl:text-[20px] 2xl:max-w-[450px] 2xl:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
              <div className="flex">
                <p className="text-[16px] font-semibold pt-4 text-orange-400 2xl:text-[20px] cursor-pointer">Learn More</p>
                <div className="pt-6 pl-2 2xl:pt-7 2xl:pl-4">
                  <img className="w-[22px] h-[10px] 2xl:w-[26px] 2xl:h-[11px]" src="images/arow.png" />
                </div>
              </div>
            </div>
            <div>
              <img className=" h-[250px] 2xl:w-[430px]" src="images/box2.png" />
              <p className="text-[20px] font-semibold pt-2 md:text-[22px] md:pt-3 lg:pt-4 xl:text-[24px] xl:pt-5 2xl:text-[30px] 2xl:pt-6">Digitalization</p>
              <p className="text-[12px] font-semibold pt-2 text-gray-600 md:text-[14px] md:pt-2 xl:text-[15px] xl:max-w-[360px] xl:pt-4 2xl:text-[20px] 2xl:max-w-[450px] 2xl:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
              <div className="flex">
                <p className="text-[16px] font-semibold pt-4 text-orange-400 2xl:text-[20px] cursor-pointer">Learn More</p>
                <div className="pt-6 pl-2 2xl:pt-7 2xl:pl-4">
                  <img className="w-[22px] h-[10px] 2xl:w-[26px] 2xl:h-[11px]" src="images/arow.png" />
                </div>
              </div>
            </div>
            <div>
              <img className=" h-[250px] 2xl:w-[430px]" src="images/box3.png" />
              <p className="text-[20px] font-semibold pt-2 md:text-[22px] md:pt-3 lg:pt-4 xl:text-[24px] xl:pt-5 2xl:text-[30px] 2xl:pt-6">Risk assessment</p>
              <p className="text-[12px] font-semibold pt-1 text-gray-600 md:text-[14px] md:pt-2 xl:text-[15px] xl:max-w-[360px] xl:pt-4 2xl:text-[20px] 2xl:max-w-[450px] 2xl:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
              <div className="flex">
                <p className="text-[16px] font-semibold pt-4 text-orange-400 2xl:text-[20px] cursor-pointer">Learn More</p>
                <div className="pt-6 pl-2 2xl:pt-7 2xl:pl-4">
                  <img className="w-[22px] h-[10px] 2xl:w-[26px] 2xl:h-[11px]" src="images/arow.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 xl:pt-20">
        <div className="bg-[#EDF7FF] pt-10 pb-6 sm:pt-12  md:pt-14 lg:pt-20 lg:pb-10 xl:pt-24 xl:pb-20 2xl:pb-28 2xl:pt-32">
          <div className="m-auto max-w-[270px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[934px] xl:max-w-[1190px] 2xl:max-w-[1446px]">
            <div className="xl:flex xl:justify-between">
              <p className="text-[20px] leading-[22px] sm:text-[26px] sm:max-w-[500px] sm:leading-[30px] md:text-[28px] md:max-w-[520px] md:leading-[32px] lg:text-[30px] lg:max-w-[560px] xl:text-[32px] font-bold xl:max-w-[540px] xl:leading-[40px] 2xl:text-[42px] 2xl:max-w-[740px] 2xl:leading-[46px]">
                We are building software solution that solves your business challenges
              </p>
              <p className="text-[12px] leading-[16px] pt-3 sm:text-[14px] sm:max-w-[480px] sm:pt-4 md:text-[15px] md:leading-[19px] md:max-w-[560px] md:pt-5 lg:pt-6 xl:text-[16px] xl:leading-[20px] text-gray-700 font-semibold xl:max-w-[570px] xl:pt-2 2xl:text-[20px] 2xl:leading-[24px] 2xl:max-w-[670px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 md:pt-8 md:grid-cols-2 lg:pt-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 xl:pt-16">
              <div className="bg-white pt-6 pl-4 pb-3  lg:pt-8 xl:pt-12 xl:pl-10 xl:pb-5 rounded-2xl 2xl:pb-6">
                <img className="w-[25px] h-[26px] md:w-[28px] md:h-[29px] lg:w-[30px] lg:h-[31px] xl:w-[33px] xl:h-[34px]  2xl:w-[42px] 2xl:h-[43px]" src="images/section3-box1-img.png" />
                <p className="pt-2 text-[16px] sm:text-[18px] md:text-[20px] md:pt-3 xl:text-[24px] font-bold xl:pt-6 2xl:text-[28px]">Invoicing</p>
                <p className="pt-1 text-[12px] md:text-[14px] md:pt-3 xl:text-[16px] text-gray-500 font-semibold xl:max-w-[330px] xl:pt-3 2xl:text-[18px] 2xl:pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
              </div>
              <div className="bg-white pt-6 pl-4 pb-3  lg:pt-8 xl:pt-12 xl:pl-10 xl:pb-5 rounded-2xl  2xl:pb-6">
                <img className="w-[25px] h-[26px] md:w-[28px] md:h-[29px]  lg:w-[30px] lg:h-[31px] xl:w-[33px] xl:h-[34px]  2xl:w-[42px] 2xl:h-[43px]" src="images/section3-box2-img.png" />
                <p className="pt-2 text-[16px] sm:text-[18px] md:text-[20px] md:pt-3 xl:text-[24px] font-bold xl:pt-6 2xl:text-[28px]">Support</p>
                <p className="pt-1 text-[12px] md:text-[14px] md:pt-3 xl:text-[16px] text-gray-500 font-semibold xl:max-w-[330px] xl:pt-3 2xl:text-[18px] 2xl:pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
              </div>
              <div className="bg-white pt-6 pl-4 pb-3 lg:pt-8 xl:pt-12 xl:pl-10 xl:pb-5 rounded-2xl 2xl:pb-6">
                <img className="w-[25px] h-[26px] md:w-[28px] md:h-[29px]  lg:w-[30px] lg:h-[31px] xl:w-[33px] xl:h-[34px]  2xl:w-[42px] 2xl:h-[43px]" src="images/section3-box3-img.png" />
                <p className="pt-2 text-[16px] sm:text-[18px] md:text-[20px] md:pt-3 xl:text-[24px] font-bold xl:pt-6 2xl:text-[28px]">Surveying</p>
                <p className="pt-1 text-[12px] md:text-[14px] md:pt-3 xl:text-[16px] text-gray-500 font-semibold xl:max-w-[330px] xl:pt-3 2xl:text-[18px] 2xl:pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-[270px] pt-6 sm:max-w-[550px] md:max-w-[700px] sm:pt-8 md:flex md:flex-row-reverse lg:max-w-[934px] xl:max-w-[1190px] 2xl:max-w-[1446px] lg:pt-10 lg:justify-between">
        <div className="flex justify-center md:justify-start">
          <img className="w-[265px] h-[260px] sm:w-[320px] sm:h-[315px] md:w-[420px] md:h-[365px] xl:w-[580px] xl:h-[560px] 2xl:w-[710px] 2xl:h-[690px] " src="images/section5-girl-image.png" />
        </div>
        <div>
          <p className="text-[20px] font-bold leading-[24px] max-w-[250px] pt-4 sm:text-[26px] sm:max-w-[450px] sm:m-auto sm:text-center sm:leading-[30px] sm:pt-6 md:text-start md:m-0 md:text-[24px] md:pt-0 lg:text-[32px] lg:leading-[36px] lg:pt-2 xl:text-[46px] xl:leading-[50px] xl:max-w-[550px] xl:pt-12 2xl:pt-16 2xl:text-[56px] 2xl:leading-[60px] 2xl:max-w-[700px]">The energy of a start-up combined with 30 years of experience.</p>
          <p className="text-[14px] font-semibold leading-[18px] max-w-[270px] text-gray-600 pt-4 sm:text-[16px] sm:leading-[20px] sm:max-w-[400px] sm:text-center sm:m-auto sm:pt-6 md:text-start md:m-0 md:max-w-[340px] md:pt-3 lg:max-w-[490px] lg:pt-8 xl:text-[18px] xl:leading-[22px] xl:text-gray-500 2xl:text-[24px] 2xl:leading-[28px] 2xl:max-w-[600px] 2xl:pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          <div className="sm:flex sm:justify-center sm:pt-4 md:justify-start lg:justify-between">
            <div>
              <p className="text-[20px] font-extrabold text-orange-500 pt-3 sm:text-center md:text-start md:pt-0 lg:pt-4 xl:text-[36px] xl:pt-5 2xl:text-[48px]">15+</p>
              <p className="text-[18px] font-bold pt-1 sm:text-center md:text-start xl:text-[22px] 2xl:text-[26px]">Awards received</p>
              <p className="text-[14px] font-semibold text-gray-600 pt-1 sm:max-w-[180px] sm:text-center md:text-start lg:max-w-[230px] 2xl:text-[18px] 2xl:max-w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </div>
            <div>
              <p className="text-[20px] font-extrabold text-orange-500 pt-3 sm:text-center md:text-start md:pt-0 lg:pt-4 xl:text-[36px] 2xl:text-[48px]">500+</p>
              <p className="text-[18px] font-bold pt-1 sm:text-center md:text-start xl:text-[22px] 2xl:text-[26px]">Clients served</p>
              <p className="text-[14px] font-semibold text-gray-600 pt-1 sm:max-w-[180px] sm:text-center md:text-start  lg:max-w-[230px] 2xl:text-[18px] 2xl:max-w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 lg:max-w-[934px] lg:m-auto lg:pt-16 xl:max-w-[1190px] 2xl:max-w-[1446px]">
        <div className="bg-[#EDF7FF] pb-10 lg:rounded-xl">
          <div className="max-w-[270px] m-auto pt-12 sm:max-w-[550px] md:max-w-[700px] lg:max-w-[830px] lg:pt-10 xl:max-w-[1094px] xl:pt-14 2xl:max-w-[1350px]">
            <div className="hidden lg:block lg:flex lg:gap-8">
              <div className="bg-orange-50 lg:rounded-full lg:p-1 lg:pl-3 lg:pr-3 xl:p-2 xl:pl-5 xl:pr-5">
                <p className="text-orange-400 text-[12px] font-bold xl:text-[16px] cursor-pointer">Business strategy</p>
              </div>
              <div className="">
                <p className=" text-[12px] font-bold text-gray-400 lg:border lg:border-gray-400 lg:rounded-full lg:p-1 lg:pl-3 lg:pr-3  xl:p-2 xl:pl-5 xl:pr-5 xl:text-[16px] cursor-pointer">Digitalization</p>
              </div>
              <div className="">
                <p className=" text-[12px] font-bold text-gray-400 lg:border lg:border-gray-400 lg:rounded-full lg:p-1 lg:pl-3 lg:pr-3  xl:p-2 xl:pl-5 xl:pr-5 xl:text-[16px] cursor-pointer">Risk assessment</p>
              </div>
            </div>
            <div className="md:flex md:flex-row-reverse lg:pt-12 xl:justify-between xl:pt-20">
              <div className="sm:max-w-[320px] md:max-w-[335px] xl:max-w-[440px] sm:m-auto md:m-0 2xl:max-w-[560px]">
                <img className="w-full" src="images/section4-img-group.png" />
              </div>
              <div className="pt-5 md:pt-2 xl:pt-3 lg:m-0">
                <div>
                  <p className="text-[26px] font-bold leading-[26px] sm:text-[26px] sm:max-w-[450px] sm:m-auto sm:text-center sm:leading-[30px] sm:pt-4 md:text-start md:m-0 md:text-[28px] md:pt-0 xl:text-[46px] xl:leading-[50px] xl:max-w-[550px] 2xl:text-[60px] 2xl:leading-[60px] 2xl:max-w-[670px]">Helping clients with research and strategy for their business</p>
                  <p className="text-[13px] font-semibold text-gray-600 leading-[17px] pt-4 sm:text-[14px] sm:leading-[20px] sm:max-w-[400px] sm:text-center sm:m-auto sm:pt-4 md:text-start md:m-0 md:max-w-[340px] md:pt-5 md:text-[16px] xl:text-[18px] xl:leading-[24px] xl:max-w-[540px] xl:pt-10  2xl:text-[24px] 2xl:leading-[28px] 2xl:max-w-[660px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                  <p className="text-[13px] font-semibold text-gray-600 leading-[17px] pt-3 sm:text-[14px] sm:leading-[20px] sm:max-w-[400px] sm:text-center sm:m-auto sm:pt-3 md:text-start md:m-0 md:max-w-[340px] md:pt-4 md:text-[16px] xl:text-[18px] xl:leading-[24px] xl:max-w-[540px] xl:pt-8  2xl:text-[24px] 2xl:leading-[28px] 2xl:max-w-[660px]">Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque. </p>
                </div>
                <div className="flex gap-2 sm:justify-center sm:pt-4 md:justify-start md:pt-3 xl:pt-8 xl:gap-3 2xl:gap-4 2xl:pt-12">
                  <p className="text-[13px] font-semibold text-orange-400 leading-[17px] pt-3  md:text-[16px] xl:text-[18px] 2xl:text-[24px] cursor-pointer">See all services</p>
                  <div className="pt-[18px] 2xl:pt-[16px]">
                    <img className="w-[18px] h-[8px] md:w-[20px] md:h-[9px] xl:w-[22px] xl:h-[10px]  2xl:w-[30px] 2xl:h-[15px] " src="images/arow.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#F58A07] md:bg-transparent">
        <div className="pt-12 pb-10 md:grid md:grid-cols-2 md:pt-20 md:pb-0 lg:pt-24 xl:pt-32">
          <div className="max-w-[270px] m-auto sm:max-w-[320px] md:m-0 md:max-w-full">
            <img className="w-full  h-[240px] md:h-[320px] lg:h-[420px] xl:h-[510px] 2xl:h-[518px]" src="images/section6-img.png" />
          </div>
          <div>
            <div className="max-w-[270px] m-auto sm:max-w-[450px] sm:text-center bg-[#F58A07] md:m-0 md:text-start md:max-w-full">
              <div className="md:pl-10 lg:pl-16 xl:pl-28 2xl:pl-32">
                <p className="text-white font-bold text-[24px] leading-[26px] pt-6 sm:text-[28px] sm:leading-[30px] md:leading-[30px] md:text-[28px] md:max-w-[300px] md:font-semibold md:pt-[82px] lg:pt-[109px] lg:text-[37px] lg:max-w-[430px] lg:leading-[39px] xl:pt-[134px] xl:text-[47px] xl:leading-[49px] xl:max-w-[500px] 2xl:text-[52px] 2xl:leading-[52px] 2xl:max-w-[600px]">Energy of a start-up combined with 30 years of experience.</p>
                <div className="pt-4 sm:pt-6 md:pb-[82px] lg:pt-8 xl:pt-10 lg:pb-[109px] xl:pb-[133px]">
                  <div className="bg-white rounded-full p-2 pl-3 pr-3 max-w-[135px] sm:max-w-[180px] sm:flex sm:justify-center sm:p-3 sm:pl-5 sm:m-auto md:justify-start md:m-0 md:p-3 md:pl-5 md:max-w-[150px] lg:p-4 lg:pl-7 lg:max-w-[180px] xl:max-w-[210px] xl:p-4 xl:pl-8">
                    <p className="text-[#F58A07] text-[12px] font-semibold sm:text-[14px]  md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:font-bold cursor-pointer">See Job Vacancies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="m-auto max-w-[270px] pt-6 sm:max-w-[550px] md:max-w-[700px] sm:pt-8 md:flex md:flex-row-reverse lg:max-w-[934px] xl:max-w-[1190px] 2xl:max-w-[1446px] lg:pt-10 lg:justify-between xl:pt-24">
        <div className="flex justify-center md:justify-start">
          <img className="w-[265px] h-[260px] sm:w-[320px] sm:h-[315px] md:w-[420px] md:h-[310px] lg:w-[490px] lg:h-[370px] xl:w-[580px] xl:h-[470px] 2xl:w-[710px] 2xl:h-[630px] " src="images/section7-img.png" />
        </div>
        <div className="md:pt-8 lg:pt-10 xl:pt-16 2xl:pt-24">
          <p className="text-[20px] font-bold leading-[24px] max-w-[270px] pt-4 sm:text-[26px] sm:max-w-[450px] sm:m-auto sm:text-center sm:leading-[30px] sm:pt-6 md:text-start md:m-0 md:text-[28px] md:leading-[32px] md:max-w-[400px] md:pt-0 lg:text-[38px] lg:leading-[42px] lg:max-w-[500px] lg:pt-2 xl:text-[46px] xl:leading-[52px] xl:max-w-[550px] 2xl:text-[58px] 2xl:leading-[62px] 2xl:max-w-[700px]">Finsweet Was A Dream To Work With</p>
          <p className="text-[14px] font-semibold leading-[18px] max-w-[270px] text-gray-600 pt-4 sm:text-[16px] sm:leading-[20px] sm:max-w-[400px] sm:text-center sm:m-auto sm:pt-6 md:text-start md:m-0 md:max-w-[340px] md:pt-5 lg:max-w-[440px] lg:leading-[24px] lg:pt-8 xl:text-[18px] xl:max-w-[520px] xl:leading-[26px] xl:text-gray-500 2xl:text-[24px]  2xl:leading-[36px] 2xl:max-w-[700px] 2xl:pt-12">Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
          <div className="sm:flex sm:justify-center md:justify-start">
            <div className="flex pt-3 sm:pt-5 md:pt-6 xl:pt-10 2xl:pt-12">
              <div className="w-[60px] xl:w-[80px] 2xl:w-[100px]">
                <img className="w-full" src="images/section7-subimg.png" />
              </div>
              <div className="pt-[6px] pl-2 lg:pt-[10px] xl:pl-5 2xl:pt-[18px] 2xl:pl-6">
                <p className="font-bold text-[14px] xl:text-[18px] 2xl:text-[22px] cursor-pointer">Chikelu Neo</p>
                <p className="text-orange-400 font-semibold text-[14px] xl:text-[18px] 2xl:text-[22px] cursor-pointer">CEO at MazeAI</p>
              </div>
            </div >
          </div>
        </div>
      </div>


      <div className="pt-10 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-36">
        <div className="bg-[#DCEAF5]">
          <div className="max-w-[270px] m-auto pt-6  sm:max-w-[550px] sm:pt-14 md:max-w-[700px] md:pt-16 lg:max-w-[934px] lg:pt-20 xl:pt-24 xl:max-w-[1190px] 2xl:pt-32 2xl:max-w-[1446px]">
            <p className="text-[22px] text-gray-800 font-bold leading-[30px]   sm:text-[31px] sm:max-w-[440px] sm:leading-[35px]  md:text-[40px] md:max-w-[580px] md:leading-[44px] lg:text-[42px] lg:leading-[46px] xl:text-[46px] lg:max-w-[680px] 2xl:text-[56px] 2xl:max-w-[750px] 2xl:leading-[60px]">Latest Blog & News</p>
            <div className="grid grid-cols-1 gap-7 pt-[25px]  pb-10 xl:pb-16 2xl:pb-24 sm:grid-cols-2 sm:pt-[36px] lg:grid-cols-3 lg:gap-5 lg:pt-[42px] xl:gap-5 xl:pt-[60px] 2xl:grid-cols-3 2xl:gap-10 2xl:pt-[70px]">
              <div className="bg-white 2xl:max-w-[482px] rounded-3xl pb-4 2xl:pb-8">
                <img className="h-[160px] md:h-[180px] md:w-[350px] xl:w-[400px] 2xl:w-[455px] 2xl:h-[210px]" src="images/setion8-img1.png" />
                <div className="max-w-[230px] m-auto md:max-w-[280px]  xl:max-w-[340px] 2xl:max-w-[400px]">
                  <p className="text-[16px] font-semibold pt-2 md:text-[20px] md:pt-3 lg:pt-4 xl:text-[24px] xl:pt-5 2xl:text-[30px] 2xl:pt-6">Why you have to digitalize in 2021</p>
                  <p className="text-[12px] font-semibold pt-1 text-gray-600 md:text-[14px] md:pt-2 xl:text-[17px] xl:max-w-[340px] xl:pt-4 2xl:text-[20px] 2xl:max-w-[430px] 2xl:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                  <div className="flex">
                    <p className="text-[12px] font-semibold pt-4 text-orange-400 xl:text-[16px] 2xl:text-[20px] cursor-pointer">Learn More</p>
                    <div className="pt-[22px] pl-2 xl:pt-[24px] 2xl:pt-7 2xl:pl-4">
                      <img className="w-[18px] h-[8px] xl:h-[10px] xl:w-[22px] 2xl:w-[26px] 2xl:h-[11px]" src="images/arow.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white 2xl:max-w-[482px] rounded-3xl pb-4 2xl:pb-8">
                <img className=" h-[160px]  md:h-[180px] md:w-[350px]  xl:w-[400px] 2xl:w-[455px] 2xl:h-[210px]" src="images/section8-img2.png" />
                <div className="max-w-[230px] m-auto md:max-w-[280px]  xl:max-w-[340px] 2xl:max-w-[400px]">
                  <p className="text-[16px] font-semibold pt-2 md:text-[20px] md:pt-3 lg:pt-4 xl:text-[24px] xl:pt-5 2xl:text-[30px] 2xl:pt-6">Our internal process and longerm vision</p>
                  <p className="text-[12px] font-semibold pt-2 text-gray-600 md:text-[14px] md:pt-2 xl:text-[17px] xl:max-w-[340px] xl:pt-4 2xl:text-[20px] 2xl:max-w-[430px] 2xl:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                  <div className="flex">
                    <p className="text-[12px] font-semibold pt-4 text-orange-400 xl:text-[16px] 2xl:text-[20px] cursor-pointer">Learn More</p>
                    <div className="pt-[22px] pl-2 xl:pt-[24px] 2xl:pt-7 2xl:pl-4">
                      <img className="w-[18px] h-[8px] xl:h-[10px] xl:w-[22px] 2xl:w-[26px] 2xl:h-[11px]" src="images/arow.png" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="bg-white 2xl:max-w-[482px] rounded-3xl pb-4 2xl:pb-8">
                <img className=" h-[160px]  md:h-[180px] md:w-[350px]  xl:w-[400px] 2xl:w-[455px] 2xl:h-[210px]" src="images/section8-img3.png" />
                <div className="max-w-[230px] m-auto md:max-w-[280px] xl:max-w-[340px] 2xl:max-w-[410px]">
                  <p className="text-[16px] font-semibold pt-2 md:text-[20px] md:pt-3 lg:pt-4 xl:text-[24px] xl:pt-5 2xl:text-[30px] 2xl:pt-6">Helping the next generation of leaders</p>
                  <p className="text-[12px] font-semibold pt-1 text-gray-600 md:text-[14px] md:pt-2 xl:text-[17px] xl:max-w-[340px] xl:pt-4 2xl:text-[20px] 2xl:max-w-[430px] 2xl:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                  <div className="flex">
                    <p className="text-[12px] font-semibold pt-4 text-orange-400 xl:text-[16px] 2xl:text-[20px] cursor-pointer">Learn More</p>
                    <div className="pt-[22px] pl-2 xl:pt-[24px] 2xl:pt-7 2xl:pl-4">
                      <img className="w-[18px] h-[8px] xl:h-[10px] xl:w-[22px] 2xl:w-[26px] 2xl:h-[11px]" src="images/arow.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
