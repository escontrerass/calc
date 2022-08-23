import React, { useContext } from 'react';
import { appContext } from '../context/appContext';
import caloriesImg from '../assets/calories.png';
import { SubTitle } from './SubTitle';

export const Calories = () => {
  const { calories } = useContext(appContext);
  return (
    <div>
      <div className='w-1/4 mx-auto mb-5'>
        <img src={caloriesImg} alt='Plato con una llama' />
      </div>
      <SubTitle text={`Calorías: ${calories}`} />
    </div>
  );
};
