import React from 'react';

export const PrimaryButton = (props) => {
  const { text, handle, type } = props;
  return (
    <button
      type={type}
      onClick={() => handle && handle()}
      className='transition ease-out delay-150 rounded-md px-4 py-2 text-white border-2 border-white hover:border-green-500 hover:text-green-400 hover:-translate-y-1 hover:scale-110'
    >
      {text}
    </button>
  );
};
