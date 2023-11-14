import React from 'react';
import logo from '../img/shutUpLogo.png';

function Reset() {

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img className="w-32" src={logo} alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Reset Password
              </h1>
              <form name='registerForm' className="space-y-4 md:space-y-6" action="#" >
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Old Password :</label>
                  <input
                    type="password"
                    name="password"
                    value=""
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    minLength={2}
                    onChange=""
                    required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">New Password :</label>
                  <input
                    type="password"
                    name="password"
                    value=""
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    minLength={2}
                    onChange=""
                    required />
                </div>
                <button type="submit" className="w-full text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reset;
