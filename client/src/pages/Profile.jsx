import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
  const {currentUser}=useSelector(state=>state.user);
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-gray-800 text-3xl font-semibold text-center my-5'>Profile</h1>
      <form className='flex flex-col gap-4'>
          <img src={currentUser.avatar} className='rounded-full w-25 h-25 self-center object-cover'></img>
          <input type="text" placeholder='username' id='username' className='rounded-lg border p-3' />
          <input type="email" placeholder='email' id='email' className='rounded-lg border p-3' />
          <input type="password" placeholder='password' id='password' className='rounded-lg border p-3' />
          <button className='bg-slate-800  p-3 rounded-lg text-slate-100 font-bold hover:opacity-90'>Update</button>
          
      </form>
      <div className='flex justify-between mt-4'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>SignOut</span>
      </div>
     
      
    </div>
    
  )
}
