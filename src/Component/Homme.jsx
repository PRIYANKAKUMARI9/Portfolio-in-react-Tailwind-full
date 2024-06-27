// eslint-disable-next-line no-unused-vars
import React from 'react'
import img22 from "../../public/homeimg.gif"
import { FaLinkedin } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import { ReactTyped} from "react-typed";

function Homme() {
  return (
    <>
     <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className=' flex flex-col md:flex-row'>
           <div className='md:w-1/2 mt-24 order-2 md:order-1'>
              <span>Welcome in my feed</span>
              <div className=' flex space-x-1 text-2xl md:text-4xl space-y-1'>
              <h1>Hello 👋, I'm a </h1>
              {/*<span className=' text-red-700 font-bold'> Developer</span>*/}
              <ReactTyped className=' text-red-700 font-bold'
               strings={["Developer","Programer","Coder"]}
               typeSpeed={40}
               backSpeed={50}
               loop={true}
              />
              </div>
              <br />
              <p className=' text-sm md:text-md text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p>
              <br />
          <div className=' space-y-4 '>
            <h1 className=' font-bold'>Available on</h1>
           <ul className=' flex space-x-5'>
            <li>
                <a href="https://www.linkedin.com/in/priyanka-kumari-024742237/" target='-blank'>
                <FaLinkedin  className=' text-2xl text-red-800'/>
                </a>
            </li>
            <li>
                <a href="7258907728" target='-blank'>
                <TbPhoneCall className=' text-2xl text-green-800'/>
                </a>
               
            </li>
           <li>
            {""}
            <FaTelegram className=' text-2xl text-red-800'/>
           </li>
            <li>
                <a href="https://github.com/PRIYANKAKUMARI9?tab=repositories" target='-blank'>
                <FaSquareGithub className=' text-2xl text-green-800'/>
                </a>
                
            </li>
           </ul>
          </div>
          
          </div>
        <div className='md:w-1/2 md:mt-16 md:ml-40 mt-9 order-1 '>
        <img src={img22} className=' rounded-full md:w-[400px] md:h-[400px]' alt="" />
        </div>
        </div>
     </div>
    
    </>
  )
}

export default Homme
