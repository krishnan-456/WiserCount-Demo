import React from 'react'
import { MdOutlineWifiTethering, MdOutlineArticle, MdPieChartOutline } from 'react-icons/md'
import { LiaHandPointUpSolid } from 'react-icons/lia'
import { BiEdit } from 'react-icons/bi'
import { motion as m } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition:
    {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show:
  {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
}

function OngoingEvent() {
  return (
    <div className='max-[390px]:w-full w-[414px] h-full bg-[#F6F6F6] max-[390px]:px-3 px-5'>
      <div className='pt-24 pb-28'>

        <div><p className='text-[#020655] font-bold text-3xl mb-4'>Ongoing Event</p></div>

        <div className='mb-4'>
          <div className='flex items-center justify-between'>
            <div><p className='text-base text-[#7D7D7D] font-semibold'>Fri, 24th Jan'22</p></div>
            <div><p className='text-base text-[#7D7D7D] font-semibold'>STARTED: 19:00</p></div>
          </div>
          <div className='flex items-center justify-between'>
            <div><p className='max-[390px]:text-lg text-xl text-[#090E82] font-semibold'>Event Header</p></div>
            <div><p className='max-[390px]:text-lg text-xl font-semibold'>H: 5</p></div>
          </div>
        </div>

        <div className='font-semibold text-base border-b-2 border-[#C6C6C6]'>
          <div className='flex items-center justify-between mb-3'>
            <div className='bg-[#090E82] max-[390px]:px-1 px-4 py-2 text-white rounded-md'><p>Statistics</p></div>
            <div className='border-2 border-[#090E82] max-[390px]:px-1 px-4 py-1 text-[#090E82] rounded-md'><p>Event Details</p></div>
            <div className='border-2 border-[#090E82] max-[390px]:px-1 px-4 py-1 text-[#090E82] rounded-md'><p>Host Details</p></div>
          </div>
        </div>

        <m.div className='flex flex-col items-start justify-center gap-3 mt-6' variants={variants} initial='hidden' animate='show'>
          <m.div className='max-[390px]:w-full w-[375px] px-4 py-6 bg-white shadow-md rounded-md flex items-center justify-between font-bold' variants={item}>
            <div><p className='text-2xl'>Final Count</p></div>
            <div><p className='text-3xl text-[#090E82]'>500</p></div>
          </m.div>
          <m.div className='max-[390px]:w-full w-[375px] px-4 py-4 bg-white shadow-md rounded-md flex items-center justify-between font-semibold text-lg' variants={item}>
            <div className='flex items-center justify-center gap-4'>
              <div className='text-[#090E82]'><MdOutlineWifiTethering fontSize={24} /></div>
              <div><p className=''>Live Count</p></div>
            </div>
            <div><p className='text-[#090E82] font-bold text-2xl'>500</p></div>
          </m.div>
          <m.div className='max-[390px]:w-full w-[375px] px-4 py-4 bg-white shadow-md rounded-md flex items-center justify-between text-lg font-semibold' variants={item}>
            <div className='flex items-center justify-center gap-4'>
              <div className='text-[#090E82]'><MdOutlineArticle fontSize={24} /></div>
              <div><p className=''>Negative List</p></div>
              <div><BiEdit /></div>
            </div>
            <div><p className='text-[#090E82] font-bold text-2xl'>-500</p></div>
          </m.div>
          <m.div className='max-[390px]:w-full w-[375px] px-4 py-4 bg-white shadow-md rounded-md flex items-center justify-between text-lg font-semibold' variants={item}>
            <div className='flex items-center justify-center gap-4'>
              <div className='text-[#090E82]'><LiaHandPointUpSolid fontSize={24} /></div>
              <div><p className=''>Manual Count (Total)</p></div>
            </div>
            <div><p className='text-[#090E82] font-bold text-2xl '>500</p></div>
          </m.div>
          <div className='flex items-center justify-center text-[#090E82] border-2 px-4 py-2 border-[#090E82] gap-2 rounded-md font-bold text-base mt-2'>
            <div><MdPieChartOutline fontSize={24} /></div>
            <div><p>View Report</p></div>
          </div>
        </m.div>

        <div className='py-6'>
          <p className='text-lg font-semibold uppercase'>Minimum Commitment:<span className='text-[#090E82] font-bold'> 500</span></p>
          <p className='text-lg font-semibold uppercase'>Estimated Turnout:<span className='text-[#090E82] font-bold'> 500</span></p>
        </div>

        <div>
          <div className='max-[390px]:w-full w-[375px] h-[120px] bg-white px-4 py-4 flex items-start gap-2 text-[#7D7D7D] font-semibold rounded-md shadow-sm'>
            <div><BiEdit fontSize={22} /></div>
            <div><p>Add Notes</p></div>
          </div>
          <m.div className='text-center mt-6 bg-[#090E82] px-4 py-2 text-white rounded-md font-semibold' whileHover={{scale:1.05}} whileTap={{scale:0.9}}><p>End Now</p></m.div>
        </div>

      </div>
    </div>
  )
}

export default OngoingEvent