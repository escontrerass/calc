import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Calc } from '../components/Calc';
import { Calories } from '../components/Calories';
import { SecondaryButton } from '../components/SecondaryButton';
import { Title } from '../components/Title';
import { Layout } from '../containers/Layout';
import { appContext } from '../context/appContext';

export const Home = () => {
  const { status, setStatus } = useContext(appContext);
  const handleLogout = () => setStatus(false);

  return (
    <>
      {!status && <Navigate to='/login' />}
      {status && (
        <Layout>
          <Title text='Formulario de calorías' />
          <div className='absolute top-0 right-0'>
            <SecondaryButton
              title='Desconectar'
              redirect='/login'
              handle={handleLogout}
            />
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <Calc />
            <Calories />
          </div>
        </Layout>
      )}
    </>
  );
};
