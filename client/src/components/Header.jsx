import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to="/">
            <h1 className='text-sm sm:text-xl flex flex-wrap'>
                  <span className=''>sanjay</span>
                  <span className=''>Homes</span>
            </h1>
          </Link>
            
            <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-400'/>
            </form>
            <ul className='flex gap-4'>
              <Link to='/'>
                 <li className='hidden sm:inline text-slate-500 hover:underline'>Home</li>
              </Link>
            <Link to='/about'>
                <li className='hidden sm:inline text-slate-500 hover:underline'>About</li>
            </Link>
             <Link to='/sign-in'>
                <li className='text-slate-500 hover:underline'>SignIn</li>
             </Link>
             
            </ul>
        </div>
        
    </header>
  )
}
