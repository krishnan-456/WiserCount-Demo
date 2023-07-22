import { motion as m } from 'framer-motion'
import React from 'react'
import { BiSolidBell } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Events() {
    return (
        <div className='max-[390px]:w-full w-[375px] h-full max-[390px]:px-3 px-5 py-4 rounded-md bg-white shadow-sm my-5 font-semibold'>
            <div>
                <div className='flex items-start justify-between'>
                    <div>
                        <p className='text-[#020655] font-bold text-2xl max-[390px]:text-xl'>Event Header</p>
                        <p className='text-[#7D7D7D] text-lg max-[390px]:text-base'>Host Name</p>
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] text-sm mt-2'>Mon, 24th jan'22</p>
                    </div>
                </div>
            </div>
            <div className='flex items-start justify-between mb-6'>
                <div className='flex items-center justify-center mt-14'>
                    <p className='text-[#4DD964] max-[340px]:hidden'><BsDot fontSize={24} /></p>
                    <p className='text-lg text-[#090E82] max-[390px]:text-base'>Started: 19:00</p>
                </div>
                <div className='flex items-center justify-center gap-5 text-sm'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='px-4 py-3 bg-[#E1F1FF] border-4 border-[#9EA9C8] text-[#9EA9C8] rounded-md text-center font-bold text-2xl'><p>72</p></div>
                        <div><p>Min. Commit.</p></div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='px-4 py-3 bg-[#FFF3DC] border-4 border-[#ECC446] text-[#ECC446] rounded-md text-center font-bold text-2xl'><p>72</p></div>
                        <div><p>Live Count</p></div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='max-[390px]:text-lg text-2xl font-bold'>
                    <p>H: 5</p>
                </div>
                <div className='flex items-center justify-center gap-1 px-2 py-1 bg-[#F6F6F6] border-2 border-[#090E82] text-[#090E82] rounded-md'>
                    <div><BiSolidBell fontSize={20} /></div>
                    <div>
                        <p className=''>02</p>
                    </div>
                </div>
                <m.div className='max-[390px]:w-[160px] w-[190px] px-4 py-2 bg-[#090E82] text-white  rounded-md text-center' whileHover={{scale:1.05}} whileTap={{scale:0.9}}>
                    <Link to="/OngoingEvent"><p>Manage Event</p></Link>
                </m.div>
            </div>
        </div>
    )
}

export default Events