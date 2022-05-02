import React from 'react'
import Mypic from '../assets/mypic.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300 mt-52'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                 <div className='sm:text-right pb-8 pl-4 md:mt-0 mt-20'>
                     <p className='text-4xl font-bold inline border-b-4 border-pink-700'>About</p>
                 </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                     <div>
                         <p>Hi! My name is Siraj Ul Haque, I'm a developer who lives in Bangalore.
                             I Like to work with new tools and Technologies. I'm enthusiastic about tech in coding and learning new things about computers and what they can do.
                             I've been meddling with tech since the age of 16, unitl I started studying computer science at the univeristy at 19 where my interest really peaked.
                             Take a peak at my projects below or jump straight to my Github.<br /><br />
                             A Passionate aspiring Full Stack Web Developer skilled in MERN stack,
                             moulded and shaped by Masai school's intensive and immersive
                             learning. Look forward to joining a company where I will be able to
                             contribute towards individual and company growth.
                         </p>
                     </div>
                     <div className='grid grid-cols-2 gap-10'>
            <img className='grid grid-cols-2 gap-10  w-64 h-80 sm:ml-52 opacity-80 rounded-3xl' src={Mypic} alt="" />
        </div>
                 </div>
        </div>
    </div>
  )
}

export default About
