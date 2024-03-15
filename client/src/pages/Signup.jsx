import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>

      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Name' className='border p-3 rounded-lg focus:outline-none'/>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg focus:outline-none'/>
        <input type='email' placeholder='Email' className='border p-3 rounded-lg focus:outline-none'/>
        <input type='password' placeholder='Password' className='border p-3 rounded-lg focus:outline-none'/>
        <button  className='text-white bg-slate-700 py-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-40'>Sign Up</button>
      </form>
      <div>
      <p className='text-center text-slate-500 mt-3'>Already have an account? <Link to='/login' className='text-blue-700 hover:underline'>Login</Link></p>
        </div>
    </div>

    
  )
}

export default Signup
