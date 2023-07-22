import React from 'react'
import { RiCalendarEventLine, RiCalendarCheckLine } from 'react-icons/ri'
import { MdAddCircleOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

function BottomNav() {
    return (
        <div className='max-[390px]:w-full w-[414px] h-20 fixed bottom-0 flex items-start justify-between bg-white rounded-t-2xl px-5 shadow-[0px_-25px_20px_-20px_rgba(203,203,203,0.45)]'>
            <div className='flex flex-col items-center justify-center font-semibold text-[#090E82]'>
                <div className='w-8 h-1 bg-[#090E82] rounded-md'></div>
                <Link to="/">
                    <div className='pt-3 pb-4 flex flex-col items-center justify-center'>
                        <div> <RiCalendarEventLine fontSize={24} /> </div>
                        <div> <p>Ongoing</p> </div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center font-semibold py-4'>
                <div> <MdAddCircleOutline fontSize={24} /> </div>
                <div> <p>Create</p> </div>
            </div>
            <div className='flex flex-col items-center justify-center font-semibold py-4'>
                <div> <RiCalendarCheckLine fontSize={24} /> </div>
                <div> <p>Existing</p> </div>
            </div>
        </div>
    )
}

export default BottomNav