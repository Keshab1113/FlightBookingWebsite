import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
          <div className=' border h-[70%] sm:w-[50%] w-[90%] flex flex-col justify-center items-center shadow bg-slate-100'>
              <h1 className=' text-center text-3xl font-bold underline text-blue-700 mb-5'>Login</h1>
              <div className=' w-[60%] h-[30%]'>
              <h1 className=' text-lg font-bold mb-4'>Enter Email Address</h1>
              <TextField
                  required
                  id="outlined-required"
                      label="Email"
                      className=' w-full'
                  />
              </div>
              <div className=' w-[60%] '>
                  <h1 className=' text-lg font-bold mb-4'>Enter Your Password</h1>
              <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                      autoComplete="current-password"
                      className=' w-full'
                  />
              </div>
              <div className=' w-[60%]'>
              <h1 className=' text-blue-700 cursor-pointer font-semibold'>Forgot Password</h1>
              </div>
              <Button variant="outlined">Login</Button>
              <div className='w-[60%]'>
                  <Link to={'/signup'} className='hover:text-blue-700 font-semibold'>
                      <button>Create a new account?</button>
                  </Link>
              </div>
      </div>
    </div>
  )
}

export default Login
