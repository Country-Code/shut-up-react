import React, { useState } from 'react';
import { baseUrl } from '../Shared';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/img/shutUpLogo.png';
import Button from '../components/Button';

function Reset() {
  
  const [email, setEmail] = useState()

  function forgot(e){
      e.preventDefault();
      const url = baseUrl + '/api/auth/password-forgoten';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        })
      })
      .then((response) => {
        return response.json();
      })
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
                Reset Password
              </h1>
              <form name='resetForm' className="space-y-4 md:space-y-6" action="#" onSubmit={forgot} >
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email :</label>
                  <input
                    type="email"
                    name="email"
                    value={email || ''}
                    id="email"
                    placeholder="name@company.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={(e) => { setEmail(e.target.value) }}
                    required />
                </div>
                {/* <Button loading={loading} buttonText="Create an account" /> */}
                <button type="submit" className="w-full text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sent</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reset;
