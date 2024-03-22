import React from 'react'
import { Link } from 'react-router-dom'

const ResetSuccess = () => {
  return (
    <div>
       <div className='container border relative m-auto w-screen p-2 mt-20 max-w-xl md:ml-80 md:w-full'>
    <div className='p-4 py-24 md:mt-48'>
        <h2 className='text-center text-xl font-semibold mb-3'>Password Reset Successful!</h2>
        <h6 className='text-sm text-center mb-8 ml-4'>You have succesfully reset your password</h6>
        <button className='bg-deepBlue text-white p-2 w-full border rounded-lg text-base'>
        <Link to='/login' className='font-semibold text-base ml-1'>Continue Log in</Link>
        </button>
    </div>
    </div>
    </div>
  )
}

export default ResetSuccess
