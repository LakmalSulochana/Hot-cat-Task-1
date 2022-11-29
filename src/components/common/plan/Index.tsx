import React from 'react'

type PrivateProps = {

    topic: String
    description: String
    cover: String
    miniTopic: String
    mantuarityRupee: String
    approxRuppe: String
    precentageRoundImg: String
    data: any
    points: Array<String>
}

export default function Plan({
      topic = "",
      description = "",
      cover = "",
      miniTopic = "",
      mantuarityRupee = "",
      approxRuppe = "",
      precentageRoundImg = "",
      points = [],
      data
  }: PrivateProps) {
    return (<div>
            <div className='flex flex-row w-[96vw] t1:ml-3 t2:ml-5 lp:ml-8 lp:h-[53vh] t1:h-[43vh] t2:h-[45vh] border-solid rounded-2xl border-[#FE5000] h-[300px] border-4 '>
                <div className={`bg-contain object-right bg-no-repeat basis-4/6 rounded-tl-2xl rounded-bl-2xl`}>
                    <img src={data.cover} alt='sample'/>
                </div>
                <div className=' t1:basis-4/6 t2:basis-4/6 lp:basis-4/6flex flex-col space-y-4'>
                    <div flex-col space-y-4>
                        <h1 className='font-bold font-inter text-base tracking-wide t1:text-[20px] t2:text-[24px] lp:text-[32px] t1:pt-2 t2:pt-6 lp:pt-12 pl-1'>{data.topic}</h1>
                        <h2 className='t1:pt-1 t2:pt-4 lp:pt-4 pl-1 font-open t1:text-[12px] t2:text-[14px] lp:text-[18px] text-[#707070]'>{data.description}</h2>
                        <button className='pl-1 rounded-2xl t1:mt-3 t2:mt-5 lp:mt-5 bg-[#FE5000] t1:w-40 t1:h-6 lp:w-40 lp:h-10 font-bold t1:text-[13px] t2:text-[15px] lp:text-[20px] text-white'>5 years Pay
                        </button>
                    </div>

                    <div className='flex flex-col  pl-1'>
                        <div className='font-bold font-inter t1:text-[15px] t2:text-[16px] lp:text-[22px] text-[#707070] '>{data.miniTopic}</div>
                        <div className='flex flex-row'> 
                            <div className='flex flex-col basis-8 pt-3'>
                                <div className='bg-helth  bg-cover t1:h-[20px] t1:w-[20px] t2:h-[20px] t2:w-[20px] lp:h-[20px] lp:w-[20px] '></div>
                                <div className='bg-defend  bg-cover h-[20px] w-[20px] t1:mt:2 t2:mt:2 t1:mt-2 lp:mt-3'></div>
                                <div className='bg-defend  bg-cover h-[20px] w-[20px] t1:mt:2 t2:mt:2 t1:mt-2 lp:mt-3'></div>

                            </div>

                            <div className='flex flex-col basis-3/4 '>
                            <div className='pt-2 pl-2 font-open font-semibold text-[#555555] t1:text-[14px] t2:text-[14px] lp:text-[16px]'>{data.points[0]}</div>
                            <div className='pt-2 pl-2 font-open font-semibold text-[#555555] t1:text-[14px] t2:text-[14px] lp:text-[16px]'>{data.points[1]}</div>
                            <div className='pt-2 pl-2 font-open font-semibold text-[#555555] t1:text-[14px] t2:text-[14px] lp:text-[16px] '>{data.points[2]}</div>

                            </div>

                        </div>
                        
                    </div>
                </div>

                {/* last part */}
                <div className='basis-2/6 rounded-tr-2xl rounded-br-2xl pr-8 pl-2 flex flex-col justify-item-end '>
                    <div className='t1:mt-3 t2:mt-5 lp:mt-11 flex flex-row justify-end'>
                        <button
                            className='bg-[#FF8F5B] text-[16px] text-[#FFFFFF] rounded-lg font-bold font-inter box-content h-10 w-[144px] '>
                            Edit in DAT
                        </button>
                    </div>
                    <div className='flex flex-row justify-end '>
                        <div>
                            <h1 className=' pt-4 t1:pl-4 t2:pl-14 lp:pl-14 font-open text-[#707070] text-[14px] font-normal'>Illustrated
                                Matuarity at 10%</h1>
                            <h1 className=' font-openBold text-[#000000] t1:text-[25px] t2:text-[32px] lp:text-[32px] font-bold t1:pl-10'>{data.mantuarityRupee}</h1>
                        </div>
                    </div>

                    <div className='flex flex-row justify-end '>
                        <div className='flex flex-col justify-items-end '>
                            <h1 className=' t1:pt-1 t2:pt-4 lp:pt-4 t1:pl-6 t2:pl-16 lp:pl-16 font-open text-[#707070] text-[14px] font-normal'>Total approx.
                                Premium</h1>
                            <h1 className=' font-openBold text-[#000000] t1:text-[25px] t2:text-[32px] lp:text-[32px] font-bold t1:pl-9'>{data.approxRuppe}</h1>
                        </div>
                    </div>

                    <div
                        className='justify-around items-center flex flex-row x-border t1:h-[65px] t1:w-[210px] t2:h-[74\px] t2:w-[248px] lp:h-[85px] lp:w-[260px] p-4 bg-[#FF9C6F] rounded-xl  t1:mt-4 t2:mt-4 lp:mt-14 lp:ml-8'>
                        <h1 className='font-openBold text-[#555555] t1:text-[13px] t2:text-[13px] lp:text-[16px]  font-bold '>Need gap covered</h1>
                        <div
                            className={`bg-no-repeat bg-right t1:h-[61px] t1:w-[61px] t2:h-[61px] t2:w-[61px]`}>
                                <img src={data.precentageRoundImg} alt=''/>

                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
