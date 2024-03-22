import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const VerifyPassword = () => {
  return (
    <div>
      <div className='container border relative p-2 max-w-xl ml-2 mt-10 md:ml-80'>
      <Link to='/forgetpassword' className='font-semibold text-base ml-1'>
        <FaArrowLeft className='text-lg ml-3 cursor-pointer' />
        </Link>
    <div className='p-4'>
        <h2 className='text-left text-xl font-semibold'>Please check your email</h2>
        <h6 className='text-sm text-left'>We have sent a retrieval code to JaneUX@gmail.com</h6>
        <hr className='mt-2 mb-2'></hr>
        <div className='code-section flex relative justify-center'>
            <div className='flex items-center justify-center border-black rounded border w-10 h-10 mt-4 ml-4'>
                <span className='text-base text-black-100'>5</span>
            </div>
            <div className='flex items-center justify-center border-black rounded border w-10 h-10 mt-4 ml-4'>
                <span className='text-base text-black-100'>6</span>
            </div>
            <div className='flex items-center justify-center border-black rounded border w-10 h-10 mt-4 ml-4'>
                <span className='text-base text-black-100'>0</span>
            </div>
            <div className='flex items-center justify-center border-black rounded border w-10 h-10 mt-4 ml-4'>
                <span className='text-base text-black-100'>3</span>
            </div>
        </div>
        <div className='flex items-center justify-between mt-3'>
            <h5>Resend code</h5>
            <h5>Code expires in: <span>00:59</span></h5>
        </div>
    </div>
    <button className='bg-black text-white p-2 w-full border rounded-lg text-base'>
        <Link to='/resetpassword' className='font-semibold text-base ml-1'>Verify</Link>
        </button>
    <div className='mt-3 mb-12'>
        <h3 className='text-base text-left'>Remember your password? <Link to='/login' className='font-semibold text-base ml-1'>Log in!</Link> </h3>
      </div>
    </div>
    </div>
  )
}

export default VerifyPassword
