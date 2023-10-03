import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../ShereAble/Navbar'

const Register = () => {
  return (
    <>
<Navbar />

<div className='mt-16'>
<h2 className='text-center text-neutral-700 text-[35px] font-semibold'>Register your account</h2>
<hr className='my-8 mx-16'/>
<form className='lg:w-1/2 md:w-3/4 md:p-0 p-8 mx-auto'>
<div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-neutral-700 text-xl font-semibold">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered bg-zinc-100 rounded-[5px] text-neutral-800 text-base" required />
        </div>
<div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-neutral-700 text-xl font-semibold">Photo URL</span>
          </label>
          <input type="url" name='URL' placeholder="Submit Your Photo URL" className="input input-bordered bg-zinc-100 rounded-[5px] text-neutral-800 text-base" required />
        </div>
<div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-neutral-700 text-xl font-semibold">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered bg-zinc-100 rounded-[5px] text-neutral-800 text-base" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-neutral-700 text-xl font-semibold">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered bg-zinc-100 rounded-[5px] text-neutral-800 text-base" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btnhover:text-black text-center text-white text-lg font-semibold hover:bg-slate-400 bg-neutral-700 rounded-[5px] p-2">Login</button>
        </div>
        <p className='text-neutral-500 text-base font-semibold text-center my-2'>Already Have An Account ? <Link to={'/login'} className='text-blue-600'>Log In</Link> </p>
</form>
</div>




</>
  )
}

export default Register
