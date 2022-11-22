import React from 'react'
import Profile from '../../components/common/profile/Index'
import MainPage from '../../components/main/Index'
import {data} from '../../config/data';

export default function Home() {
    return (
        <div className='flex flex-row bg-[#FAFBFC] '>
            <div
                className='flex flex-col items-center '>
                <MainPage/>
                {/* <div>
                    {data.map((val, Index) => (
                        <Profile subData={val.sample} cover={val.image} year={val.firstname} topic={val.topic}
                                 description={val.descrtiption} totalNeed={val.totalNeed} HaveCost={val.HaveCost} IdentifiedNeed={val.IdentifiedNeed}/>
                    ))}
                </div> */}
            </div>
        </div>


    )
}
