import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRessource from '../hooks/useRessource';
import { useDispatch } from 'react-redux';
import logo from '../assets/img/shutUpLogo.png';

function Login() {
  console.log("Login MOUNT");
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [authState, authRepo] = useRessource("auth");
  const {error, loading, userInfo} = authState;

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(authRepo.login(email, password))
  }
  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img className="w-32" src={logo} alt="Shut-up" />
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                User Log in
              </h1>
              <form name='loginForm' className="space-y-4 md:space-y-6" action="#" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email :</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={email || ''}
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="name@company.com" 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required/>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password :</label>
                  <input 
                    type="password" 
                    name="password" 
                    value={password || ''}
                    id="password" 
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    minLength={2}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required />
                </div>
                <button type="submit" className="w-full text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                <p className="text-sm font-light text-gray-500">
                    Forgot <a href="/reset" className="font-medium text-primary-600 hover:underline">Password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login;
