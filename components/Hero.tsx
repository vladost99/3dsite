import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center tracking-widest'>
            <h1 className='text-5xl font-bold font-kaushan pb-4'>
                Vlad
            </h1>
            <h3 className='text-2xl font-bold font-kaushan pb-4'>
                A full Stack Developer
            </h3>
        </div>
        <div className='p-2'>
            <button className='p-2 w-[180px] text-xl font-kaushan'>
                Explore more
            </button>
        </div>
    </div>
  )
}

export default Hero