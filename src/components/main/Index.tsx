import React from 'react'

export default function MainPage() {
  return (
    <div>
        <div className='h-[75vh] w-[1220px] min-h-full flex flex-row'>
            <div className='basis-3/6 space-y-4 '>

                <div className=' font-open text-[#707070] text-[43px] font-light tracking-[.005em] '>
                    <h1 className='pt-6 mt-6 pl-4'>
                    Dear, Mr. Eshan 👋
                    </h1>
                

                </div>

                <div className='font-mont text-[#000000] text-[65px] font-bold leading-none pl-4' style={{marginTop:"-10px"}}>
                Now you have a <br/> better <br/> understanding of <br/> your financial <br/> requiremnts of <br/> your future 
                </div>

                <div className='flex flex-row pl-4'>
                    <div className='basis-2/6'>
                        <h1 className='font-open text-[#969BAB] text-[16px] font-normal'>Name </h1>
                        <h1 className='font-openBold text-[#000000] text-[16px] font-bold'>Eshan De Silva </h1>
                    </div>
                    <div className='basis-2/6'>
                        <h1 className='font-open text-[#969BAB] text-[16px] font-normal'>Date </h1>
                        <h1 className='font-openBold text-[#000000] text-[16px] font-bold'>2005-08-04</h1>
                    </div>
                    <div className='basis-2/6'>
                    <h1 className='font-open text-[#969BAB] text-[16px] font-normal'>Income </h1>
                        <h1 className='font-openBold text-[#000000] text-[16px] font-bold'>Rs. XXXX</h1>
                    </div>
                </div>
            </div>


            <div className='basis-4/6 space-y-4  pt-24 pl-5'>

                <div className='flex flex-row pl-16 ' style={{marginTop:"-80px"}}>
                    <div className=' pl-8'>
                        <button className=' pl-5 justify-around items-center flex flex-row border h-[58px] w-[133px]  border-[#707070] rounded-full font-mont text-[#707070] text-[14px] font-bold'>
                        Edit
                        <div className='bg-edit bg-no-repeat bg-center h-[61px] w-[61px]'></div>
                        </button>
                    </div>
                    <div className=' pl-6'>
                    <button className=' pl-5 justify-around items-center flex flex-row border h-[58px] w-[133px] border-[#FE5000] rounded-full font-mont text-[#FE5000] text-[14px] font-bold'>
                        share
                        <div className='bg-share bg-no-repeat bg-center h-[61px] w-[61px]'></div>
                        </button>
                    </div>
                    <div className='pl-6 ' >
                    <button className='justify-around items-center flex flex-row x-border h-[58px] w-[133px] bg-[#FF9C6F] rounded-full font-mont text-[#FFFFFF] text-[14px] font-bold'>
                    Move to DAT
                        
                    </button>
                    </div>


                </div>

                <div className='bg-imageOne bg-no-repeat bg-center h-[484px] w-[541px] pt-3'></div>
            </div>
        </div>
        
    </div>
  )
}
