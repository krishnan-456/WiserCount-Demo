import React from 'react'
import Profile from '../Assets/Profile.png'

function TopNav() {
    return (
        <div className='max-[390px]:w-full w-[414px] h-20 z-[50] fixed top-0 flex items-start justify-between px-5 border-b-2 border-[#C6C6C6] py-3 bg-[#F6F6F6]'>
            <div>
                <p className='text-[#020655] font-bold text-2xl'>Hi, Username</p>
                <p className='text-[#7D7D7D] font-semibold'>VENUE NAME</p>
            </div>
            <div>
                <img src={Profile} alt="Profile" className='w-[3.5rem] h-[3.5rem]' />
            </div>
        </div>
    )
}

export default TopNav