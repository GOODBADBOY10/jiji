import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    const [newEmail, setNewEmail] = useState('')
  return (
    <>
    <div className='container border relative m-auto w-screen p-2 max-w-xl md:ml-80 md:w-full mt-4'>
    <div className='flex relative items-center'>
        <Link to='/login' className='font-semibold text-base ml-1'>
        <FaArrowLeft className='text-lg ml-3 cursor-pointer'/>
        </Link>
        <Link to='/login' className='font-semibold text-base ml-2 hidden md:block'>
        Go back
        </Link>
        </div>
        <div className='p-4'>
            <h2 className='text-left text-xl font-semibold'>Forgot Password?</h2>
            <h6 className='text-sm text-left mb-1'>Relax! Let's see how we can get you another password</h6>
            <h5 className='text-sm text-left'>Please enter your account's email</h5>
            <hr  className='mt-2 mb-2'></hr>
            <form>
            <div className='email w-full mb-5'>
            <label className='block mb-1 text-base'>Email</label>
            <input type='email'
            className='border w-full rounded p-1 pl-2 outline-none text-base border-black placeholder-text-base'
             value={newEmail} 
            placeholder='Enter your email'
            required
            onChange={(e) => setNewEmail(e.target.value)}>
            </input>
            <span></span>
        </div>
        <button className='bg-deepBlue text-white p-2 w-full border rounded-lg text-base'>
          <Link to='/verifypassword' className='font-semibold text-base ml-1'>Send Code</Link>
          </button>
            </form>
            <div className='mt-3 mb-12'>
        <h3 className='text-sm leading-4 font-semibold text-left'>Remember your password? <Link to='/login' className='font-semibold text-base ml-1'>Log in!</Link> </h3>
      </div>
        </div>
    </div>
    </>
  )
}

export default ForgetPassword
