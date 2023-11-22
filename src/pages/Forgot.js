import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { baseUrl } from '../Shared';
import logo from '../assets/img/shutUpLogo.png';

function Forgot() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState()
  const [resetPasswordToken, setResetPasswordToken] = useState(token)

  function forgot(e){
      e.preventDefault();
      const url = baseUrl + '/api/auth/reset-password';
      try {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            resetPasswordToken: resetPasswordToken,
            newPassword: newPassword,
          }),
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          navigate(
            location?.state?.previouseUrl
              ? location.state.previousUrl : '/login'
          );
        })
      }catch(error){
        console.log(error);
      }
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
                  <input type='hidden'  name="resetPasswordToken" value={resetPasswordToken}/>
                  <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900">Your Email :</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword || ''}
                    id="newPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={(e) => { setNewPassword(e.target.value) }}
                    required />
                </div>
                <button type="submit" className="w-full text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forgot;
