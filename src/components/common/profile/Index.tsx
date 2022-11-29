import React from 'react'
import Plan from '../plan/Index'
import logo1 from '../../../assets/icn/logo1.png'

type PrivateProps = {
    year: String
    topic: String
    description: String
    totalNeed: String
    HaveCost: String
    IdentifiedNeed: String
    cover: any
    subData: any
}

export default function Profile(props: PrivateProps) {
    return (

        <div className='flex flex-col'>
            <div className='w-[100vw] flex flex-row t1:h-[73vh] t2:h-[85vh] lp:h-[97vh]'>
            
            <div className='lp:basis-14 t1:basis-1/5 t2:basis-24 flex flex-col space-y-4  bg-left-top lp:pt-6 t1:pt-4 pl-2'>
                <div className='lp:h-[60px] lp:w-20 bg-logo1 lp:bg-[length:60px_60px] t1:h-[46px] t1:w-15 t1:bg-[length:46px_46px] bg-no-repeat '>
                    
                </div>
            </div>

            <div className='flex flex-col lp:pl-1 t1:pl-3'>
                <h1 className='font-mont text-[#FFFF15F] opacity-[.67] lp:text-[65px] t1:text-[40px] font-bold leading-none'>{props.year}</h1>
                <h2 className='font-openBold text-[#000000] lp:text-[64px] font-bold  leading-none t1:text-[25px]'>{props.topic}</h2>
                <p className='font-open text-[#000000] t1:text-[16px] t2:text-[17px] lp:text-[22px] font-normal LP:whitespace-pre-line pt-3'>{props.description}</p>

                <div className='flex flex-row pt-4'>
                    <div className='flex  basis-2/4'>
                        <div className='t1:basis-full lp:basis-full flex flex-col space-y-3 mt-3'>
                            <h1 className='font-open text-[#707070] t1:text-[14px] lp:text-[22px] font-normal'>Total need</h1>
                            <h1 className='font-openBold text-[#000000] lp:text-[20px] t1:text-[18px] font-bold'> {props.totalNeed}</h1>
                        </div>
                        <div className='basis-4/5  flex flex-col space-y-3 mt-3'>
                            <h1 className='font-open text-[#707070] t1:text-[14px] lp:text-[22px] font-normal'>I have</h1>
                            <h1 className='font-openBold text-[#000000] t1:text-[18px] lp:text-[20px] font-bold'>{props.HaveCost}</h1>
                        </div>
                        
                    </div>
                    <div className={` bg-no-repeat t1:bg-contain lp:bg-contain t1:w-[320px] t1:h-[320px] t2:w-[448px] t2:h-[422px] lp:w-[448px] lp:h-[422px] mt-6 t1:basis-3/4  t1:ml-10 lp:absolute lp:right-14 `}>
                    <img src={props.cover} alt=''/>
                    </div>
                </div>  
                <div className='flex flex-row mr-5 lp:pt-5 relative '>

                   <div className='absolute t1:bottom-32 lp:top-10'>
                   <div className='  justify-around items-center flex flex-row x-border t1:h-[74px] t1:w-[230px] lp:h-[100px] lp:w-[320px] p-4 bg-[#FF9C6F] rounded-xl lp:mt-8 '>
                        <div>
                            <h1 className='text-[#555555] lp:text-[20px] font-semibold'>Identified Need Gap</h1>
                            <h1 className='text-[#FE5000] lp:text-[19px] font-bold'>{props.IdentifiedNeed}</h1>
                        </div>
                        <div className='bg-15present bg-no-repeat bg-right t1:h-[80px] t1:w-[80px] lp:h-[100px] lp:w-[100px]'></div>

                    </div>  

                   </div>
                   {/* lp:pt-16 lp:mt-32 */}
                        
               </div>   
               <div className='relative t1:bottom-20 lp:top-28 lp:mt-32'>

               <div className='text-[#000000] t1:text-[14px] lp:text-[19px] font-bold font-openBold'>Factoring an inflation rate of 4.5 %</div>
                    <div className='text-[#909090] text-[12px] lp:text-[18px] font-normal font-mont'>Inflation rate is considered as at january 2020 <br/> according to Central bank of Sri lanka
                    </div>
                    <div className='text-[#909090] text-[18px] font-normal font-open underline underline-offset-1 relative mt-8'>Recommanded Products</div> 
               
                </div>

                </div> 
               
 
                </div>
                <div className=' '>
                       <Plan data={props.subData} description={''} cover={''} topic={''} miniTopic={''} approxRuppe={''}
                             mantuarityRupee=
                                 {''} points={[]} precentageRoundImg={''}/>
                   </div>


                </div>


    )

}



