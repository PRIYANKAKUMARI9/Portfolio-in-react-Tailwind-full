// eslint-disable-next-line no-unused-vars
import React from 'react'
import giffooter from "../../public/progif.gif"

function Foooter() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-green-300'>
       <div className=' flex flex-col items-center justify-center'>
        <div className=' flex p-20'>
        <div className=' border-t-2 h-4 w-20 md:h-4 md:w-[300px] border-gray-900 mt-8 flex flex-col items-center'></div>
        <img src={giffooter} className=' h-[100px] w-[100px] rounded-full border border-red-700 '/>
        <div className=' border-t-2 h-4 w-20 md:h-4 md:w-[300px] border-gray-900 mt-8 flex flex-col items-center'></div>
        </div>
        <div className=' flex flex-col pb-20 items-center justify-center'>
            <p className='  font-bold'>Fresh Design and Development. i am available</p>
            <p className=' font-bold '>for work</p>
             <a href="mailto:priyankakumari31039@gmail.com">
             <button className='  bg-pink-800 h-[40px] w-[100px]  mt-10 rounded-lg text-white shadow-2xl hover:bg-green-900'>Hire me</button>
             </a>

        </div>
       </div>
      </div>
    </>
  )
}

export default Foooter
