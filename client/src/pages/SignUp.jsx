import React from 'react'
import { Link } from 'react-router-dom'
export const SignUp = () => {
  return (
    <div className='max-w-lg mx-auto  p-3'>
      <h1 className='text-xl font-semibold text-center text-slate-900 my-7'>Sign Up</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border rounded-lg p-3' id='username'/>
        <input type="email" placeholder='email' className='border rounded-lg p-3' id='email'/>
        <input type="password" placeholder='password' className='border rounded-lg p-3' id='password' />
        <button className='bg-green-400 p-3 rounded-lg text-slate-100 font-bold hover:opacity-90'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p>Have an account already?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>click here</span>
        </Link>
      </div>
    </div>
  )
}
