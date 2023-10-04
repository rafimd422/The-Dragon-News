import { useContext } from 'react';
import Navbar from './../ShereAble/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { OurContext } from '../../contextProvider/AuthContext';

const Login = () => {

const {signIn} = useContext(OurContext)


const navigate = useNavigate();

const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    signIn(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
      navigate('/')
    })
    .catch(error =>{
      console.log(error.message)
    })
    
  }
  
  return (
<>

<Navbar />

<div className='mt-16'>
<h2 className='text-center text-neutral-700 text-[35px] font-semibold'>Login your to account</h2>
<form onSubmit={handleLogIn} className='lg:w-1/2 md:w-3/4 md:p-0 p-8 mx-auto'>
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
          <button type='submit' className="btn hover:text-black text-center text-white text-lg font-semibold hover:bg-slate-400 bg-neutral-700 rounded-[5px] p-2">Login</button>
        </div>
        <p className='text-neutral-500 text-base font-semibold text-center my-2'>Dont't Have An Account ? Please <Link to={'/register'} className='text-blue-600'>Register</Link> </p>
</form>
</div>








</>
  )
}

export default Login
