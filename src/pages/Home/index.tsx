import React from 'react'
import Plan from '../../components/common/plan/Index'
import Profile from '../../components/common/profile/Index'
import MainPage from '../../components/main/Index'
import {data} from '../../config/data';

export default function Home() {
  return (
    <div className='flex flex-row  justify-center bg-[#FAFBFC] '>
      <div className='flex flex-col items-center border-2 border-[#FE5000] rounded-r-3xl rounded-bl-3xl my-4 gap-y-12'>
      <MainPage/>
      <div>
        {data.map((val,Index)=> (
          <Profile subData={val.sample} cover={val.image} year={val.firstname} topic={val.topic} description={val.descrtiption} />
        ))}
      </div> 
       {/* <Plan topic={"Smart Life Health Plan"} points={["Health 360","Waiver of premium","Suwamaga Benifit"]} description={"Secure your child's higher education needs with regular investments to achieve their dreams with additional benefits as per your need"} cover={"bg-family"} miniTopic={"Selected protection Add-ons"} mantuarityRupee={"Rs.5,000,000"} approxRuppe={"Rs. 122,000"} precentageRoundImg={"bg-65present"}/> 
       <Profile cover={"bg-artwork"} year={"2022"} topic={ "Protect My Income"} description={"Find out how much you'll need to support  Dilu, Ruwan and Ruwani if you are not around. To work out the finances your family would need to fund them if you weren’t around use our handy dependent protection and liability calculator."}/> 
       <Plan topic={"Smart Life - Protect my income plan"} points={["Long term benifit","Waiver of premium","Accidental death benifit"]} description={"Secure your child's higher education needs with regular investments to achieve their dreams with additional benefits as per your need"} cover={"bg-smartLife"} miniTopic={"Recommended mandatory riders "} mantuarityRupee={"Rs.5,000,000"} approxRuppe={" Rs. 90,000"} precentageRoundImg={"25present"}/>
       <Profile cover={"bg-ruwanImg"}  year={"2034"} topic={ "Ruwan’s Education"} description={" Give yourself an early start to comfortably fund the aspirations and ambitions of your children with a plan that secures their higher education and future.Begin by using our child education fund calculator to find how much you’re likely to need in order to give Ruwan  the best education that he deserve!"}/> 
       <Plan topic={"Life Plus Ecucational Plan"} points={["Long term benifit","Waiver of premium","Accidental death benifit"]} description={"Uninterrupted education even in case of a demise as we will take care of premium payments with monthly education assistance fee benefit and higher education needs."} cover={"bg-last"} miniTopic={"Selected protection Add-ons"} mantuarityRupee={"Rs.5,000,000"} approxRuppe={"Rs. 150,000"} precentageRoundImg={"bg-85present"}/>     */}
    </div>
    </div>

   
  )
}
