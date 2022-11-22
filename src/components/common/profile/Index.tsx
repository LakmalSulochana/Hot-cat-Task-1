import React from 'react'
import Plan from '../plan/Index'

type PrivateProps={
  year:String
  topic:String
  description:String
  totalNeed:String
  HaveCost:String
  IdentifiedNeed:String
  cover:String
  subData:any
}

export default function Profile(props:PrivateProps) {
  return ( 
    <div className='flex flex-col'>
      <div className='flex flex-row items-center  w-[1220px] h-[590px]'>
      
      <div className='h-[63vh] w-[1245px] min-h-full flex flex-row pt-4'>
        <div className='basis-20 flex flex-col space-y-4  bg-left-top pt-5 pl-2' >
          <div className='h-[46px] bg-logo1 bg-[length:46px_46px]  bg-no-repeat '></div>
        </div>

        <div className='basis-3/4 flex flex-col space-y-4'>
          <h1 className='font-mont text-[#FFFF15F] opacity-[.67] text-[45px] font-bold leading-none'>{props.year}</h1>
          <h2 className='font-openBold text-[#000000] text-[64px] font-bold  leading-none'>{props.topic}</h2>
          <p className='font-open text-[#000000] text-[14px] font-normal whitespace-pre-line'>{props.description}</p>
          <div className='flex flex-row'>
            <div className='basis-2/5 flex flex-col space-y-4'>
              <h1 className='font-open text-[#707070] text-[13px] font-normal'>Total need</h1>
              <h1 className='font-openBold text-[#000000] text-[18px] font-bold'> {props.totalNeed}</h1>
            </div>

            <div className='basis-4/5  flex flex-col space-y-4'>
              <h1 className='font-open text-[#707070] text-[13px] font-normal'>I have</h1>
              <h1 className='font-openBold text-[#000000] text-[18px] font-bold'>{props.HaveCost}</h1>
            </div>      
        </div>
        <div className='justify-around items-center flex flex-row x-border h-[74px] w-[248px] p-4 bg-[#FF9C6F] rounded-xl '>
          <div>
            <h1 className='text-[#555555] text-[13px] font-semibold'>Identified Need Gap</h1>
            <h1 className='text-[#FE5000] text-[16px] font-bold'>{props.IdentifiedNeed}</h1>
          </div>
                
          <div className='bg-15present bg-no-repeat bg-right h-[61px] w-[61px]'></div>      
        </div>

        <div className='text-[#000000] text-[11px] font-bold font-openBold'>Factoring an inflation rate of 4.5 %</div>
          <div className='text-[#909090] text-[8px] font-normal font-mont'>
            Inflation rate is considered as at january 2020 <br/> according to Central bank of Sri lanka
          </div>
          <div className='text-[#909090] text-[18px] font-normal font-open underline underline-offset-1 relative pt-1'>
            Recommanded Products
          </div>
        </div>
        <div className='basis-5/12 flex flex-col space-y-4 font-openBold pt-9 mt-12'> 
          <div className={`${props.cover} w-[448px] h-[422px]`}></div>
        </div>
      </div> 
    </div>
    <div className='pl-4 '>
      <Plan data={props.subData} description={''} cover={''} topic={''} miniTopic={''} approxRuppe={''} mantuarityRupee=
          {''} points={[]} precentageRoundImg={''}/>
    </div>
    

  </div>
    
  )
  
}



