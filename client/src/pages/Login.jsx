import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };
  

  return (
    <div className='max-w-lg mx-auto'>
      <h1 className='font-semibold text-3xl text-center my-7'>Login</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Email or Username' className='border p-3 rounded-lg focus:outline-none' id='usernameOrEmail' onChange={handleChange} />
        <input type='password' placeholder='Password' className='border p-3 rounded-lg focus:outline-none' id='password' onChange={handleChange} />
        <button type='submit'  className=' text-white bg-slate-700 py-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-40' onClick={handleSubmit}>Login</button>
        <button  className='text-white bg-red-600 py-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-40' >Login with google</button>
        <div>
      <p className=' text-center text-slate-500 mt-3'>Don't have an account? <Link to='/signup' className='text-blue-700 hover:underline'>Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
