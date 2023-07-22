import React from 'react'
import Events from './Events'
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

function Home() {
    return (
        <div className='max-[390px]:w-full w-[414px] h-full bg-[#F6F6F6] max-[390px]:px-3 px-5'>
            <div className='pt-24'>
                <p className='text-[#020655] font-bold text-3xl'>Ongoing Events</p>
            </div>
            <m.div className='pb-20' variants={variants} initial='hidden' animate='show'>
                <m.div variants={item}>
                    <Events />
                </m.div>
                <m.div variants={item}>
                    <Events />
                </m.div>
                <m.div variants={item}>
                    <Events />
                </m.div>
                <m.div variants={item}>
                    <Events />
                </m.div>
            </m.div>
        </div>
    )
}

export default Home


// bg-[#F6F6F6]