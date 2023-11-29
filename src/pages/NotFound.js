import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgNotFound from '../assets/img/oops-erreur-404.png';
import logo from '../assets/img/shutUpLogo.png';

function NotFound() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  return (
    <div>
      <section className="bg-gray-50 text-slate-500 flex flex-col items-center justify-center p-6">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-32" src={logo} alt="Shut-up" />
        </a>
        <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto lg:py-0 bg-white md:mt-0 rounded-lg shadow w-10/12">
          <div className='w-full md:w-1/2'><img className="" src={ImgNotFound} alt="" /></div>
          <div className='w-full md:w-1/2'>
            <p className='text-2xl md:text-3xl font-light leading-normal'>Sorry we couldn't find this page.</p>
            <p className='mb-8'>But dont worry, you can find plenty of other things on our homepage.</p>
            <button
              onClick={navigateHome}
              className='text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              Back to homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound