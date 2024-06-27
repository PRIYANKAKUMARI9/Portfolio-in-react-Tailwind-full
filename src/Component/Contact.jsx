// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => { 
        const userInfo={
            email:data.email,
            message:data.message
        }
        try {
         await  axios.post('https://getform.io/f/pbmqqpxb', userInfo)
         toast.success("your message hase been sent")
        } catch (error) {
          console.log(error)
          toast.error("somthing went wrong")  
        }
    }
  return (
    <>
    <div name="Contact" className=' flex flex-col mt-20 items-center justify-center '>
       <h1 className=' text-3xl text-red-800 font-bold '>Contact me...</h1>
       <div className=' border-t-2 h-4 w-20 md:h-4 md:w-[600px] border-gray-900 mt-8 flex flex-col items-center'></div>
    </div>  

    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-amber-200 md:h-[470px] md:w-[390px] rounded-3xl shadow-2xl'>
    <div> 
        <form 
        onSubmit={handleSubmit(onSubmit)} 
        //action='https://getform.io/f/pbmqqpxb'
        //method="POST" 
        className=' flex flex-col mt-20 items-center justify-center mt-9'>
            <h1 className=' font-bold text-2xl mb-10  mt-9'>Send Your Message</h1>
            <label className=' -ml-24 text-red-950 font-bold'>Email Address</label>
             <input  {...register("email", { required: true })} id='email'  name='email' type="text" placeholder='enter email...' className=' p-2 h-7 w-[220px] mt-3' />
             {errors.email && <span>This field is required</span>}
             <label className=' -ml-32 mt-6 text-red-950 font-bold'>Message</label>
             <br />
             <textarea {...register("message", { required: true })} id='message' name='message' placeholder='enter message...' rows={4} cols={24} className=' border p-2  border-black '></textarea>
             {errors.message && <span>This field is required</span>}
             <div>
             <button type='submit' className=' bg-red-800 h-[40px] w-[100px] mt-10 mb-9 rounded-lg text-white shadow-2xl hover:bg-green-900'>Send</button>

             </div>
        </form>
       </div>
    </div>
    </>
  )
}

export default Contact
