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

      <div className='bg-red-400 basis-2/6 rounded-tr-2xl rounded-br-2xl'>
        <div className='mt-5'>
          <button className='rounded-md'>
          Edit in DAT
          </button>
        </div>
      </div>

    </div>
   </div>
  )
}
