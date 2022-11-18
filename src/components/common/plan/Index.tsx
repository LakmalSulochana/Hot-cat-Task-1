import React from 'react'

export default function Plan() {
  return (
   <div>
     <div className='flex flex-row border-solid rounded-2xl border-[#FE5000] w-[1191px] h-[376px] border-4'>
      <div className='bg-family bg-cover bg-right bg-no-repeat basis-3/6 rounded-tl-2xl rounded-bl-2xl '></div>

      <div className=' basis-4/6 flex flex-col space-y-4'>
        <div flex-col space-y-4>
        <h1 className='font-bold font-inter text-base tracking-wide text-[24px] pt-6 pl-1'>Smart Life Health Plan</h1>
        <h2 className='pt-6 pl-1 font-open text-[14px] text-[#707070]'>
        Secure your child's higher education needs with regular<br/> investments to achieve their dreams with additional <br/>benefits as per your need
        </h2>
        <button className='pl-1 rounded-2xl mt-5 bg-[#FE5000] w-32 font-bold text-white'>
            5 years Pay
        </button>
        </div>

        <div className='flex flex-col pt-3 pl-1' >
          <div className='font-bold font-inter text-[16px] text-[#707070] '>
          Selected protection Add-ons
          </div >

          <div className='pt-2 pl-6 font-open font-semibold text-[#555555] text-[14px]'>Health 360</div>
          <div className='pt-2 pl-6 font-open font-semibold text-[#555555] text-[14px]'>Waiver of premium</div>
          <div className='pt-2 pl-6 font-open font-semibold text-[#555555] text-[14px]'>Suwamaga Benifit</div>
        </div>
        

      </div>
      {/* last part */}
      <div className=' basis-2/6 rounded-tr-2xl rounded-br-2xl pl-16'>
        <div className='mt-5 pl-12 right-6' >
          <button className='bg-[#FF8F5B] text-[16px] text-[#FFFFFF] rounded-lg font-bold font-inter box-content h-10 w-[144px] '>
          Edit in DAT
          </button>
        </div>
        <div>
       <h1 className=' pt-4 pl-4 font-open text-[#707070] text-[14px] font-normal'>Illustrated Matuarity at 10%</h1>
       <h1 className=' font-openBold text-[#000000] text-[32px] font-bold'>Rs.5,000,000</h1>
        </div>
      <div>
      <h1 className=' pt-4 pl-10 font-open text-[#707070] text-[14px] font-normal'>Total approx. Premium</h1>
       <h1 className=' pl-4 font-openBold text-[#000000] text-[32px] font-bold'>Rs. 122,000</h1>
      </div>
      <div className='x-border h-[74px] w-[248px] p-4 bg-[#FF9C6F]'>
        <h1 className=''>Need gap covered</h1>

      </div>
        
      </div>

    </div>
   </div>
  )
}
