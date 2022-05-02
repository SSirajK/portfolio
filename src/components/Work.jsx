import React from 'react'
import RF from '../assets/Rodan and Fields.png'
import Purplle from '../assets/purplle.webp'
import purple from '../assets/purple.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:mt-12 mt-64'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-700 lg:ml-96'>Work</p>
         <p className='py-6 lg:ml-72'>//Check out some of my recent work</p>
        </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
        {/* Cart Items */}
        <div  style={{backgroundImage: `url(${RF})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
         
          {/* Hover Effects */}

          <div className='opacity-0 group-hover:opacity-100 ml-10'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Rodan And Fields (clone)
              </span>
              <br />
              <span className='text-1l text-white tracking-wider'>
              Website cloned and tech used was HTML | CSS | Vanilla JS
              </span>
              <div className='pt-8 text-center'>
                <a href="https://rodan-fields.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 mr-6 bg-black text-blue-400 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Mitul-778/Rodan-Fields">
                  <button className='text-center rounded-lg px-4 py-3 mr-8 bg-black text-blue-300 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div  style={{backgroundImage: `url(${Purplle})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
         
          {/* Hover Effects */}

          <div className='opacity-0 group-hover:opacity-100 ml-10'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Purplle (clone)
              </span>
              <br />
              <span className='text-1l text-white tracking-wider'>
              Website cloned and tech used was HTML | CSS | Advanced JS
              </span>
              <div className='pt-8 text-center'>
                <a href="https://stirring-speculoos-743377.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 mr-6 bg-black text-blue-400 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/SSirajK/Purplle">
                  <button className='text-center rounded-lg px-4 py-3 mr-8 bg-black text-blue-300 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div  style={{backgroundImage: `url(${purple})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
         
          {/* Hover Effects */}

          <div className='opacity-0 group-hover:opacity-100 ml-10'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Purplle Website (clone)
              </span>
              <br />
              <span className='text-1l text-white tracking-wider'>
              Website cloned and tech used was HTML | CSS | JS | MongoDb
              </span>
              <div className='pt-8 text-center'>
                <a href="https://stirring-speculoos-743377.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 mr-6 bg-black text-blue-400 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Amir98375/purpleclone">
                  <button className='text-center rounded-lg px-4 py-3 mr-8 bg-black text-blue-300 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Work