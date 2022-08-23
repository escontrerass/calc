import React from 'react';
import { useForm } from 'react-hook-form';
import { Layout } from '../containers/Layout';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <h2 className='text-center'>Inicio de sesión</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          placeholder='Ingrese su email'
          {...register('email', { required: true })}
        />
        <input
          type='password'
          placeholder='Ingrese su password'
          defaultValue='Password'
          {...register('password', { required: true })}
        />
        <input type='submit' />
      </form>
    </Layout>
  );
};
