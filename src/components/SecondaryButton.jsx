import React from 'react';
import { Link } from 'react-router-dom';

export const SecondaryButton = (props) => {
  const { title, redirect, handle } = props;
  return (
    <Link to={redirect ? redirect : '/'}>
      <button
        type='button'
        onClick={() => handle && handle()}
        className='transition ease-out delay-150 rounded-md px-4 py-2 text-white border-2 border-white hover:border-red-500 hover:text-red-400 hover:-translate-y-1 hover:scale-110'
      >
        {title}
      </button>
    </Link>
  );
};
