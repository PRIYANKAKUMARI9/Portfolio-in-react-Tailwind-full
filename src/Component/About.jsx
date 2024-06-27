// eslint-disable-next-line no-unused-vars
import React from 'react'
import aboutimg1 from '../../public/aboutimg.jpg'

function About() {
  return (
    <>
     <div name="About" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 '>
    
       <div className=' flex flex-col items-center justify-center'>
       <h1 className=' text-3xl text-red-800 font-bold '>About me...</h1>
       <div className=' border-t-2 h-4 w-20 md:h-4 md:w-[600px] border-gray-900 mt-8 flex flex-col items-center'></div>
       </div>  
       <div className=' flex flex-col md:flex-row'>
        <div  className=' ml-[50px] md:w-[500px]'>
          <img src={aboutimg1} className=' md:h-[500px] md:w-[1000px]' />
        </div>
        <div className='  mt-[50px] '>
          <h1 className=' text-2xl my-5'>Hi There! I'm Priyanka Kumari</h1>
          <h1 className=' text-red-800 my-2 font-bold'>Software Developer</h1>
          <p className=' md:w-[600px]'>
          I'm Priyanka, a software developer currently I have completed my engineering degree from Amritsar Group of College(AGC).
          <span className=' font-medium'> Proficient in React,HTML,CSS,Tailwind CSS, Bootstrap,JavaScript,PHP,Wordpress,Figma,SQL and some React Native or Node.js,</span> Moving to my strength my strength is to think positively in any kind of situation. 
          </p>
          <div className=' space-y-4 mt-7'>
          <p className=' font-semibold'>Phone <span className=' '> : </span> <span className=' font-normal '>+917258907728</span></p>
          <p className=' font-semibold'>Email <span className=' '> : </span> <span className=' font-normal '>Priyankakumari31039@gamil.com</span></p>
          <p className=' font-semibold'>From <span className=' '> : </span> <span className=' font-normal '>New Delhi</span></p>
          <p className=' font-semibold'>Language <span className=' '> : </span> <span className=' font-normal '>Hindi, English</span></p>
          </div>
        </div>
       </div>
       
    </div> 
    </>
  )
}

export default About
