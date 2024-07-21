// eslint-disable-next-line no-unused-vars
import React from 'react'

function Portfolio() { 
    
  return (
    <>
    <div name="Portfolio" className=' flex flex-col items-center justify-center '>
       <h1 className=' text-3xl text-red-800 font-bold '>My Projects...</h1>
       <div className=' border-t-2 h-4 w-20 md:h-4 md:w-[600px] border-gray-900 mt-8 flex flex-col items-center'></div>
    </div>  
     <div className=' p-1 md:flex top-0 left-0 right-0'>
     <div className=' max-w-screen-2xl container  px-4 md:px-20 '>
          <div className=' bg-green-200 md:h-[300px] md:w-[300px] md:mx-20 pt-5 pb-5 mt-24 rounded-2xl shadow-2xl hover:scale-105 duration-150'>
             <div className=' text-center justify-center mx-12 '>
             <h1 className=' text-red-900 font-bold text-2xl'>Projects in Js</h1>
             <p className=' mt-7 font-bold '>These JavaScript projects have been created using HTML, CSS, and JavaScript. HTML and CSS were used to design the user interface, while JavaScript was utilized to add functionality to the projects. </p>
            <a href="">
            <button className=' bg-red-800 h-[40px] w-[100px] mt-10 rounded-lg text-white shadow-2xl hover:bg-green-900'>View Project</button>
            </a>
             </div>
          </div>
      </div>
      {/*second card */}
      <div className=' max-w-screen-2xl container px-4 md:-ml-36 mt-8  md:px-20 '>
      <div className=' bg-yellow-200 md:h-[300px] md:w-[300px]  mt-16 rounded-2xl  pt-5 pb-5 shadow-2xl hover:scale-105 duration-150'>
             <div className=' text-center justify-center mx-12  '>
             <h1 className=' text-red-900 font-bold text-2xl'>Calculator</h1>
             <p className=' mt-7 font-bold '>Fully functional calculator with beautiful Minimilastic ui design and drop down menu.it can perform arithmetic eyc operations.</p>
            <a href="">
            <button className=' bg-red-800 h-[40px] w-[100px] mt-10 rounded-lg text-white shadow-2xl hover:bg-green-900'>View Project</button>
            </a>
             </div>
          </div>
      </div>
      {/*third card */}
      <div className=' max-w-screen-2xl container px-4 md:-ml-36 mt-8  md:px-20 '>
      <div className=' bg-pink-200 md:h-[300px] md:w-[300px]  mt-16 rounded-2xl  pt-5 pb-5 shadow-2xl hover:scale-105 duration-150'>
             <div className=' text-center justify-center mx-12  '>
             <h1 className=' text-red-900 font-bold text-2xl'>Tic-Tac-Toe</h1>
             <p className=' mt-7 font-bold '>Tic-Tac-Toe Game using JavaScript.We will be using validation checks to implement the game features.</p>
            <a href="https://cerulean-nasturtium-d89dbc.netlify.app" target='blanck'>
            <button className=' bg-red-800 h-[40px] w-[100px]  mt-10 rounded-lg text-white shadow-2xl hover:bg-green-900'>View Project</button>
            </a>
             </div>
          </div>
      </div>
      
     </div>
     <div className=' p-1 md:flex'>
     <div className=' max-w-screen-2xl container  px-4 md:px-20 '>

          <div className=' bg-green-200 md:h-[300px] md:w-[300px] md:mx-20 pt-5 pb-5 mt-24 rounded-2xl shadow-2xl hover:scale-105 duration-150'>
             <div className=' text-center justify-center mx-12 '>
             <h1 className=' text-red-900 font-bold text-2xl'>Clone..</h1>
             <p className=' mt-7 font-bold '>With the help of HTML,CSS,JS.I’ll make a clone of the whiteFX website fully responsive.</p>
            <a href="https://adorable-pastelito-4e3897.netlify.app/">
            <button className=' bg-red-800 h-[40px] w-[100px] mt-10 rounded-lg text-white shadow-2xl hover:bg-green-900'>View Project</button>
            </a>
             </div>
          </div>
      </div>
      {/*second card */}
      <div className=' max-w-screen-2xl container px-4 md:-ml-36 mt-8  md:px-20 '>
      <div className=' bg-yellow-200 md:h-[300px] md:w-[300px]  mt-16 rounded-2xl  pt-5 pb-5 shadow-2xl hover:scale-105 duration-150'>
             <div className=' text-center justify-center mx-12  '>
             <h1 className=' text-red-900 font-bold text-2xl'>Calculator</h1>
             <p className=' mt-7 font-bold '>Fully functional calculator with beautiful Minimilastic ui design and drop down menu.it can perform arithmetic eyc operations.</p>
            <a href="https://www.">
            <button className=' bg-red-800 h-[40px] w-[100px] mt-10 rounded-lg text-white shadow-2xl hover:bg-green-900'>View Project</button>
            </a>
             </div>
          </div>
      </div>
      {/*third card */}
      <div className=' max-w-screen-2xl container px-4 md:-ml-36 mt-8  md:px-20 '>
      <div className=' bg-pink-200 md:h-[300px] md:w-[300px]  mt-16 rounded-2xl  pt-5 pb-5 shadow-2xl hover:scale-105 duration-150'>
             <div className=' text-center justify-center mx-12  '>
             <h1 className=' text-red-900 font-bold text-2xl'>Calculator</h1>
             <p className=' mt-7 font-bold '>Fully functional calculator with beautiful Minimilastic ui design and drop down menu.it can perform arithmetic eyc operations.</p>
            <a href="">
            <button className=' bg-red-800 h-[40px] w-[100px] mt-10 rounded-lg text-white shadow-2xl hover:bg-green-900'>View Project</button>
            </a>
             </div>
          </div>
      </div>
      
     </div>
    </>
  )
}

export default Portfolio
