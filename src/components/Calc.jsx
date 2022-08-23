import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ageValidator,
  weightValidatorDec,
  weightValidatorImp,
  heightValidatorDec,
  heightValidatorImp,
} from '../utils/formValidator';

export const Calc = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      system: '',
    },
  });
  const onSubmit = (data) => console.log(data);

  const labelStyle = 'font-bold text-xl mt-5';
  const inputStyle =
    'block w-full bg-transparent outline-none border-b-2 border-white py-2 px-4 text-white placeholder-gray-400 focus:bg-gray-800 hover:bg-gray-800';

  const selectSystem = watch('system');
  const weightValidator = (value) => {
    if (selectSystem === 'dec') return weightValidatorDec(value);
    if (selectSystem === 'imp') return weightValidatorImp(value);
  };
  const heightValidator = (value) => {
    if (selectSystem === 'dec') return heightValidatorDec(value);
    if (selectSystem === 'imp') return heightValidatorImp(value);
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='age' className={`${labelStyle} text-fontSecondary`}>
          Sistema:
        </label>
        <select className={inputStyle} {...register('system')}>
          <option disabled value=''>
            Seleccione un sistema
          </option>
          <option value='dec'>Decimal</option>
          <option value='imp'>Imperial</option>
        </select>
      </div>
      {!(selectSystem === '') && (
        <div>
          <div>
            <label
              htmlFor='age'
              className={`${labelStyle} ${
                errors.age ? 'text-red-400' : 'text-fontSecondary'
              }`}
            >
              Edad:
            </label>
            <input
              type='number'
              className={`${inputStyle} ${
                errors.age
                  ? 'text-red-400 border-red-500'
                  : 'text-green-400 border-green-500'
              }`}
              placeholder='Ingrese su edad'
              {...register('age', {
                required: { value: true, message: 'El campo es requerido' },
                validate: ageValidator,
              })}
            />
            {errors.age?.message && (
              <p className='text-sm text-red-400 mt-2'>
                {errors.age?.message}.
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor='weight'
              className={`font-bold text-xl ${
                errors.age ? 'text-red-400' : 'text-fontSecondary'
              }`}
            >
              Peso:
            </label>
            <input
              type='number'
              className={`${inputStyle} ${
                errors.weight
                  ? 'text-red-400 border-red-500'
                  : 'text-green-400 border-green-500'
              }`}
              placeholder='Ingrese su peso'
              {...register('weight', {
                required: true,
                validate: weightValidator,
              })}
            />
            {errors.weight?.message && (
              <p className='text-sm text-red-400 mt-2'>
                {errors.weight?.message}.
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor='height'
              className={`font-bold text-xl ${
                errors.age ? 'text-red-400' : 'text-fontSecondary'
              }`}
            >
              Altura:
            </label>
            <input
              type='number'
              className={`${inputStyle} ${
                errors.height
                  ? 'text-red-400 border-red-500'
                  : 'text-green-400 border-green-500'
              }`}
              placeholder='Ingrese su altura'
              {...register('height', {
                required: true,
                validate: heightValidator,
              })}
            />
            {errors.height?.message && (
              <p className='text-sm text-red-400 mt-2'>
                {errors.height?.message}.
              </p>
            )}
          </div>
          <input type='submit' />
        </div>
      )}
    </form>
  );
};
