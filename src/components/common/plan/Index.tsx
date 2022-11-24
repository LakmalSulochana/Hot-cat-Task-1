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
            <div className='flex flex-row w-[100vw] lp:h-[60vh] t1:h-[38vh] t2:h-[45vh] border-solid rounded-2xl border-[#FE5000] h-[376px] border-4 bg-yellow-300 '>
                <div className={`${data.cover} bg-cover bg-right bg-no-repeat basis-3/6 rounded-tl-2xl rounded-bl-2xl`}>
                </div>
                <div className=' t1:basis-4/6 t2:basis-4/6 lp:basis-4/6flex flex-col space-y-4'>
                    <div flex-col space-y-4>
                        <h1 className='font-bold font-inter text-base tracking-wide t1:text-[22px] t2:text-[24px] lp:text-[32px] t1:pt-3 t2:pt-6 lp:pt-6 pl-1'>{data.topic}</h1>
                        <h2 className='pt-4 pl-1 font-open t1:text-[12px] t2:text-[14px] lp:text-[18px] text-[#707070]'>{data.description}</h2>
                        <button className='pl-1 rounded-2xl mt-5 bg-[#FE5000] t1:w-40 t1:h-6 lp:w-40 lp:h-10 font-bold t1:text-[13px] t2:text-[15px] lp:text-[20px] text-white'>5 years Pay
                        </button>
                    </div>

                    <div className='flex flex-col pt-3 pl-1'>
                        <div className='font-bold font-inter t1:text-[15px] t2:text-[16px] lp:text-[22px] text-[#707070] '>{data.miniTopic}</div>
                        <div className='flex flex-row'> 
                            <div className='flex flex-col basis-8 pt-3'>
                                <div className='bg-helth  bg-cover t1:h-[20px] t1:w-[20px] t2:h-[20px] t2:w-[20px] lp:h-[25px] lp:w-[25px] '></div>
                                <div className='bg-defend  bg-cover h-[20px] w-[20px] mt-2'></div>
                                <div className='bg-defend  bg-cover h-[20px] w-[20px] mt-2'></div>

                            </div>

                            <div className='flex flex-col basis-3/4'>
                            <div className='pt-2 pl-2 font-open font-semibold text-[#555555] text-[14px]'>{data.points[0]}</div>
                        <div className='pt-2 pl-2 font-open font-semibold text-[#555555] text-[14px]'>{data.points[1]}</div>
                        <div className='pt-2 pl-2 font-open font-semibold text-[#555555] text-[14px]'>{data.points[2]}</div>

                            </div>

                        </div>
                        
                    </div>
                </div>

                {/* last part */}
                <div className='basis-2/6 rounded-tr-2xl rounded-br-2xl pr-8 pl-2 flex flex-col justify-item-end '>
                    <div className='mt-5 flex flex-row justify-end'>
                        <button
                            className='bg-[#FF8F5B] text-[16px] text-[#FFFFFF] rounded-lg font-bold font-inter box-content h-10 w-[144px] '>
                            Edit in DAT
                        </button>
                    </div>
                    <div className='flex flex-row justify-end '>
                        <div>
                            <h1 className=' pt-4 pl-4 font-open text-[#707070] text-[14px] font-normal'>Illustrated
                                Matuarity at 10%</h1>
                            <h1 className=' font-openBold text-[#000000] text-[32px] font-bold'>{data.mantuarityRupee}</h1>
                        </div>
                    </div>

                    <div className='flex flex-row justify-end '>
                        <div className='flex flex-col justify-items-end '>
                            <h1 className=' pt-4 pl-4 font-open text-[#707070] text-[14px] font-normal'>Total approx.
                                Premium</h1>
                            <h1 className=' font-openBold text-[#000000] text-[32px] font-bold'>{data.approxRuppe}</h1>
                        </div>
                    </div>

                    <div
                        className='justify-around items-center flex flex-row x-border h-[74px] w-[248px] p-4 bg-[#FF9C6F] rounded-xl  mt-4'>
                        <h1 className='font-openBold text-[#555555] text-[13px] font-bold '>Need gap covered</h1>
                        <div
                            className={`${data.precentageRoundImg} bg-65present bg-no-repeat bg-right h-[61px] w-[61px]`}></div>

                    </div>
                </div>
            </div>
        </div>)
}
