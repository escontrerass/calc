import React from 'react';
import logo from '../assets/Logo.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = ({ children }) => {
  return (
    <div className='grid bg-bgDark h-screen w-full'>
      <div className='relative place-self-center text-white w-4/5'>
        <div className='w-1/4 mx-auto'>
          <img src={logo} alt='Logo calculadora' />
        </div>
        <h1 className='text-center text-5xl text-green-500 mb-10'>
          Calculadora de calorías
        </h1>
        {children}
        <ToastContainer theme='dark' />
      </div>
    </div>
  );
};
