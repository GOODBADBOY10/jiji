import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')

  return (
    <div>
       <div className='container border relative m-auto w-screen p-2 max-w-xl md:ml-80 md:w-full mt-8'>
       <div className='flex relative items-center'>
        <Link to='/verifypassword' className='font-semibold text-base ml-1'>
        <FaArrowLeft className='text-lg ml-3 cursor-pointer'/>
        </Link>
        <Link to='/verifypassword' className='font-semibold text-base ml-2 hidden md:block'>
        Go back
        </Link>
        </div>
    <div className='p-4'>
        <h2 className='text-left text-xl font-semibold'>Reset Password</h2>
        <h6 className='text-sm text-left'>Here you go, you can reset your password now</h6>
        <hr className='mt-2 mb-2'></hr>
      <form>
        <div className='password'>
            <label className='block mb-1 text-base mt-2' htmlFor='newpassword'>New Password</label>
            <input type='password' 
            className='border w-full rounded p-1 pl-2 outline-none text-base border-red-300 placeholder-text-base'
            value={newPassword} 
            name='newpassword'
            placeholder='must be at least 8 characters' 
            required
            onChange={(e) => setNewPassword(e.target.value)}></input>
            <span></span>
        </div>
        <div className='password'>
            <label className='block mb-1 text-base mt-2' htmlFor='newpassword'>Repeat Password</label>
            <input type='password' 
            className='border w-full rounded p-1 pl-2 outline-none text-base mb-2 border-red-300 placeholder-text-base'
            value={verifyPassword} 
            name='newpassword'
            placeholder='must be at least 8 characters'
            required 
            onChange={(e) => setVerifyPassword(e.target.value)}></input>
            <span className='text-red-600 text-base'>Your password do not match</span>
        </div>
        <button className='bg-darkGray text-white p-2 w-full border rounded-lg text-base mt-3'>
        <Link to='/resetsuccess' className='font-semibold text-base ml-1'>Reset Password</Link>
        </button>
      </form>
    </div>
    </div>

    </div>
  )
}

export default ResetPassword
