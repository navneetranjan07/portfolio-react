import React from 'react'
import html from '../assests/html.png'
import css from '../assests/css.png'
import javascript from '../assests/javascript.png'
import tailwind from '../assests/tailwind.png'
import react from '../assests/react.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 mb-4 md:mb-4 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>

    <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
        My <br/> Text <br/> Stack
    </h2>

    <div className='flex flex-col item-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={html} alt=""/>
        <p className='mt-2'>HTML</p>
    </div>

    <div className='flex flex-col item-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={css} alt="" width={100} height={100}/>
        <p className='mt-2'>CSS</p>
    </div>

    <div className='flex flex-col item-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={javascript} alt="" width={100} height={100}/>
        <p className='mt-2'>JavaScript</p>
    </div>

    <div className='flex flex-col item-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={tailwind} alt="" width={100} height={100}/>
        <p className='mt-2'>Tailwidn</p>
    </div>

    <div className='flex flex-col item-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={react} alt="" width={100} height={100}/>
        <p className='mt-2'>React</p>
    </div>

    

    </div>
  )
}

export default Skills