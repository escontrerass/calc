import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Layout } from '../containers/Layout';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Error } from '../components/Error';
import { PrimaryButton } from '../components/PrimaryButton';
import { appContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';
import { PostLogin } from '../hooks/usePostLogin';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { status, setStatus, setUser } = useContext(appContext);
  const inputStyle =
    'block w-full bg-transparent outline-none border-b-2 border-white py-2 px-4 text-white placeholder-gray-400 focus:bg-gray-800 hover:bg-gray-800';

  const onSubmit = (data) => {
    PostLogin(data, setUser, setStatus);
  };

  return (
    <>
      {status && <Navigate to='/' />}
      <Layout>
        <Title text='Inicio de sesión' />
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <Label text='Email' />
          <input
            type='text'
            className={`${inputStyle} ${
              errors.email
                ? 'text-red-400 border-red-500'
                : 'text-green-400 border-green-500'
            }`}
            placeholder='Ingrese su email'
            {...register('email', {
              required: { value: true, message: 'Este campo es requerido' },
              pattern: {
                value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                message: 'Email invalido',
              },
            })}
          />
          {errors.email?.message && <Error text={errors.email?.message} />}
          <Label text='Contraseña' />
          <input
            type='password'
            className={`${inputStyle} ${
              errors.password
                ? 'text-red-400 border-red-500'
                : 'text-green-400 border-green-500'
            }`}
            placeholder='Ingrese su contraseña'
            {...register('password', {
              required: { value: true, message: 'Este campo es requerido' },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                message: 'Contraseña invalida',
              },
            })}
          />
          {errors.password?.message && (
            <Error text={errors.password?.message} />
          )}
          <div className='text-center mt-10'>
            <PrimaryButton text='Iniciar sesión' type='submit' />
          </div>
        </form>
      </Layout>
    </>
  );
};
