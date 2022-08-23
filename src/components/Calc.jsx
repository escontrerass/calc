import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { appContext } from '../context/appContext';
import {
  ageValidator,
  weightValidatorDec,
  weightValidatorImp,
  heightValidatorDec,
  heightValidatorImp,
  wDecToImp,
  wImpToDec,
  hDecToImp,
  hImpToDec,
} from '../utils/formValidator';
import { Label } from './Label';
import { Error } from '../components/Error';

export const Calc = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      system: '',
    },
  });
  const {
    system,
    setSystem,
    age,
    setAge,
    weight,
    setWeight,
    height,
    setHeight,
    calCalories,
  } = useContext(appContext);

  const inputStyle =
    'block w-full bg-transparent outline-none border-b-2 border-white py-2 px-4 text-white placeholder-gray-400 focus:bg-gray-800 hover:bg-gray-800';

  const weightValidator = (value) => {
    if (system === 'dec') return weightValidatorDec(value);
    if (system === 'imp') return weightValidatorImp(value);
  };
  const heightValidator = (value) => {
    if (system === 'dec') return heightValidatorDec(value);
    if (system === 'imp') return heightValidatorImp(value);
  };

  const onChangeAge = (value) => setAge(value.target.value);
  const onChangeWeight = (value) =>
    system === 'dec'
      ? setWeight(wDecToImp(value.target.value))
      : setWeight(value.target.value);
  const onChangeHeight = (value) => {
    system === 'dec'
      ? setHeight(hDecToImp(value.target.value))
      : setHeight(value.target.value);
  };

  const onChangeSystem = (value) => {
    const selectSystem = value.target.value;
    setSystem(selectSystem);
    if (selectSystem === 'imp' && weight !== null) setValue('weight', weight);
    if (selectSystem === 'dec' && weight !== null)
      setValue('weight', wImpToDec(weight));
    if (selectSystem === 'imp' && height !== null) setValue('height', height);
    if (selectSystem === 'dec' && height !== null)
      setValue('height', hImpToDec(height));
  };

  const onSubmit = () => calCalories();

  useEffect(() => {
    calCalories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age, weight, height]);

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label text='Sistema métrico' />
        <select
          className={`${inputStyle} ${
            errors.system
              ? 'text-red-400 border-red-500'
              : 'text-green-400 border-green-500'
          }`}
          {...register('system', { onChange: onChangeSystem })}
        >
          <option disabled value=''>
            Seleccione un sistema
          </option>
          <option value='dec'>Decimal</option>
          <option value='imp'>Imperial</option>
        </select>
      </div>
      {!(system === '') && (
        <div>
          <div>
            <Label text='Edad' />
            <input
              type='number'
              className={`${inputStyle} ${
                errors.age
                  ? 'text-red-400 border-red-500'
                  : 'text-green-400 border-green-500'
              }`}
              placeholder='Ingrese su edad'
              {...register('age', {
                required: { value: true, message: 'Este campo es requerido' },
                pattern: {
                  value: /^\d*(\.\d+)?$/,
                  message: 'Solo se permite números positivos',
                },
                validate: ageValidator,
                onChange: onChangeAge,
              })}
            />
            {errors.age?.message && <Error text={errors.age?.message} />}
          </div>
          <div>
            <Label text={`Peso (${system === 'dec' ? 'Kg' : 'Lb'})`} />
            <input
              type='number'
              step='any'
              className={`${inputStyle} ${
                errors.weight
                  ? 'text-red-400 border-red-500'
                  : 'text-green-400 border-green-500'
              }`}
              placeholder='Ingrese su peso'
              {...register('weight', {
                required: { value: true, message: 'Este campo es requerido' },
                pattern: {
                  value: /^[0-9]+([.][0-9]{1,4})?$/,
                  message:
                    'Solo se permite números, positivos y un máximo de 4 decimales',
                },
                validate: weightValidator,
                onChange: onChangeWeight,
              })}
            />
            {errors.weight?.message && <Error text={errors.weight?.message} />}
          </div>
          <div>
            <Label text={`Altura (${system === 'dec' ? 'Mts' : 'In'})`} />
            <input
              type='number'
              step='any'
              className={`${inputStyle} ${
                errors.height
                  ? 'text-red-400 border-red-500'
                  : 'text-green-400 border-green-500'
              }`}
              placeholder='Ingrese su altura'
              {...register('height', {
                required: { value: true, message: 'Este campo es requerido' },
                pattern: {
                  value: /^[0-9]+([.][0-9]{1,4})?$/,
                  message:
                    'Solo se permite números, positivos y un máximo de 4 decimales',
                },
                validate: heightValidator,
                onChange: onChangeHeight,
              })}
            />
            {errors.height?.message && <Error text={errors.height?.message} />}
          </div>
        </div>
      )}
    </form>
  );
};
