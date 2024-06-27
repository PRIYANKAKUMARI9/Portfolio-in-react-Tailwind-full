// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import img2 from "../../public/img2.jpeg"
import { FiAlignJustify } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'
import {Link} from 'react-scroll'


function Navbar() {
    const[menu,setmenu]=useState(false);
    const navID=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Contact"
        }
    ]
  return (
    <>
       <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20  h-16 shadow-md  fixed top-0 left-0 right-0 bg-white'>
        <div className=' flex justify-between items-center h-16'>
            <div className=' flex space-x-2'>
                <img src={img2} className=' h-12 w-12 rounded-full' alt="" />
                <h1 className=' font-semibold text-xl cursor-pointer'>Priy<span className=' text-red-600 text-2xl'>anka</span>
                <p className=' text-sm text-green-800'>Software Developer</p>
                </h1>
               
            </div>
        {/* desktop navbar*/}
            <div>
                <ul className='hidden  md:flex space-x-8'>
                    {navID.map(({id,text})=>(
                        <li className=' hover:scale-125 font-semibold hover:duration-200 cursor-pointer hover:text-red-700' 
                        key={id}>
                       <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active"> 
                       {text}
                       </Link>
                        
                        </li>
                    ))}
                </ul>
               <div onClick={()=>setmenu(!menu)} className=' md:hidden'>{menu?<FiX size={24}/>:<FiAlignJustify size={24} />}</div>
            </div>
        </div>
        {/* desktop navbar*/}
        {menu && (<div className=' bg-white'>
                 <ul className=' md:hidden flex flex-col justify-center items-center h-screen space-y-3 text-xl font-semibold'>
                 {navID.map(({id,text})=>(
                        <li className=' hover:scale-125 hover:duration-200 cursor-pointer hover:text-red-700' 
                        key={id}>
                       <Link onClick={()=>setmenu(!menu)}  to={text} smooth={true} duration={500} offset={-70} activeClass="active"> 
                       {text}
                       </Link>     
                        </li>
                    ))}
                </ul>
        </div>)}
        
        </div>
    </>
  )
}

export default Navbar
