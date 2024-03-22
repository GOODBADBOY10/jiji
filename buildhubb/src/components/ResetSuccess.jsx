import React from 'react'
import { Link } from 'react-router-dom'

const ResetSuccess = () => {
  return (
    <div>
       <div className='container border relative p-2 max-w-xl ml-2 mt-10 md:ml-80'>
    <div className='p-4 py-24'>
        <h2 className='text-center text-xl font-semibold mb-3'>Password Reset Successful!</h2>
        <h6 className='text-sm text-center mb-8 ml-4'>You have succesfully reset your password</h6>
        <button className='bg-black text-white p-2 w-full border rounded-lg text-base'>
        <Link to='/login' className='font-semibold text-base ml-1'>Continue Log in</Link>
        </button>
    </div>
    </div>
    </div>
  )
}

export default ResetSuccess
