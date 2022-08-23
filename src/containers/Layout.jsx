import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div className='grid bg-bgDark h-screen w-full'>
      <div className='place-self-center text-white'>
        <h1 className='text-center'>Calculadora de calorias</h1>
        {children}
      </div>
    </div>
  );
};
