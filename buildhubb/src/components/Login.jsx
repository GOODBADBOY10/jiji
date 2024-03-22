import React, { useState } from 'react'
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <>
    <div className='container border relative m-auto w-screen p-2 max-w-xl md:ml-80 md:w-full mt-8'>
    <div className='p-4'>
        <h2 className='text-left text-xl font-semibold'>Log in to your Account</h2>
        <h6 className='text-sm text-left md:text-base'>Welcome back!, Log in to your account with</h6>
        <hr className='mt-2 mb-2'></hr>
        <div className='links flex mt-4 items-center justify-between'>
        <a href='' className=' border border-black rounded px-6 py-1 md:py-2'> <FaGoogle className='text-md md:text-lg'/> </a>
        <a href='' className='border border-black rounded px-6 py-1 md:py-2'><FaApple className='text-md md:text-lg'/></a>
        <a href='' className='border border-black px-6 rounded py-1 md:py-2'><FaFacebook className='text-md md:text-lg'/></a>
        </div>
        <div className="separator mt-5 mb-5 flex items-center text-center"> or Login with email</div>
      <form>
        <div className='email w-full'>
            <label className='block mb-1 text-base' htmlFor='email'>Email</label>
            <input type='email'
            className='border w-full rounded p-1 pl-2 outline-none text-base border-black placeholder-text-base'
             value={email} 
             name='email'
            placeholder='Enter your email'
            required
            onChange={(e) => setEmail(e.target.value)}></input>
            <span></span>
        </div>
        <div className='password'>
            <label className='block mb-1 text-base mt-2' htmlFor='password'>Password</label>
            <input type='password' 
            className='border w-full rounded p-1 pl-2 outline-none text-base border-black placeholder-text-base'
            value={password} 
            name='password'
            placeholder='Enter your password' 
            required
            onChange={(e) => setPassword(e.target.value)}></input>
            <span></span>
        </div>
        <div className='flex items-center justify-between mt-2 mb-3'>
            <div className='remember'>
               <div className='flex items-center gap-2'>
                <input type='checkbox' />
                 <h5>Remember me</h5>
               </div>
            </div>
            
            <span>
                <Link to='/forgetpassword' className='text-base font-semibold'>Forgot password?</Link>
            </span>
        </div>
        <button className='bg-deepBlue text-white p-2 w-full border rounded-lg text-base'>
            Log In
        </button>
      </form>
    </div>
    <div className='mt-3 mb-12'>
        <h3 className='text-base text-center'>Don't have an account? <Link to='' className='font-semibold text-base ml-1'>Sign Up!</Link> </h3>
      </div>
    </div>

    </>
  )
}

export default Login
