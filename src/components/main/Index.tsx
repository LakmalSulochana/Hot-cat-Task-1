import React from 'react'
import {FillButton, OutLineButton} from '../common/button/Index'
import imgOne from "../../assets/img/imgOne.png"

export default function MainPage() {
    return (
        <div>
            <div className='w-full'>
            <div className='flex flex-row-reverse t1:space-x-3 t1:space-x-reverse t2:space-x-3 t2:space-x-reverse lp:space-x-8 lp:space-x-reverse t1:mt-3 t2:mt-3 lp:mt-3 lp:mr-24 t1:mr-6 t2:mr-18 '>
                        <FillButton border="none" color="#FE5000" height="58px" radius="37px" width="133px">
                            <h1 className='font-mont text-[#FFFFFF] text-[14px] font-bold'>Move to DAT</h1>
                        </FillButton>
                        <OutLineButton border="solid" color="" height="58px" radius="37px" width="133px">
                            <h1 className='font-mont text-[#707070] text-[14px] font-bold'>Share</h1>
                        </OutLineButton>
                        <OutLineButton border="solid" color="" height="58px" radius="37px" width="133px">
                            <h1 className='font-mont text-[#707070] text-[14px] font-bold'>Edit</h1>
                        </OutLineButton>

                    </div>
            </div>
                    <div className=' max-w-full flex flex-row justify-around t1:h-[60vh] t2:h-[90vh] lp:h-[100vh] ml-2 mr-2'>
            <div className=''>
                <div
                    className=' font-open text-[#707070] text-[43px] font-light tracking-[.005em] t1:text-[23px] t2:text-[27px] lp:text-[43px]  '>
                    <h1 className='pt-8 mt-10 '>Dear, Mr. Eshan 👋</h1>
                </div>

                <div
                    className='font-mont text-[#000000] text-[65px] font-bold leading-none md:text-[40px] lg:text-[65px] md:pt-1'
                    style={{marginTop: "-10px"}}>
                    Now you have a <br/> better <br/> understanding of <br/> your financial <br/> requiremnts
                    of <br/> your future
                </div>

                <div className='flex flex-row pt-3 '>
                    <div className='lp:basis-2/5 t1:basis-2/5'>
                        <h1 className='font-open text-[#969BAB] lp:text-[16px] t1:text-[14px] font-normal'>Name </h1>
                        <h1 className='font-openBold text-[#000000] lp:text-[16px] t1:text-[14px] font-bold'>Eshan
                            Dessss Silvaaaaa </h1>
                    </div>
                    <div className='basis-2/6'>
                        <h1 className='font-open text-[#969BAB] lp:text-[16px] t1:text-[14px] font-normal'>Date </h1>
                        <h1 className='font-openBold text-[#000000] lp:text-[16px] t1:text-[14px] font-bold'>2005-08-04</h1>
                    </div>
                    <div className='basis-2/6'>
                        <h1 className='font-open text-[#969BAB] lp:text-[16px] t1:text-[14px] font-normal'>Income </h1>
                        <h1 className='font-openBold text-[#000000] lp:text-[16px] t1:text-[14px] font-bold'>Rs.
                            XXXX</h1>
                    </div>

                </div>
                <div className='text-[#FE5000] text-[14px] font-inter font-bold absolute left-1/2 transform -translate-x-1/2 t1:translate-y- t2:translate-y-32 lp:translate-y-28'>Scroll Down</div>

            </div>

            <div className='flex flex-col'>
             <div
                    className='bg-no-repeat bg-center t1:ml-10 t2:ml-2 t1:bg-cover t1:h-[300px] t1:w-[300px] t2:h-[370px] t2:w-[370px] lp:h-[484px] lp:w-[541px] mt-4 '>
                        <img src={imgOne} alt="" />
                    </div>
            </div>
        </div>
        </div>


    )
}
