import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { SubTitle } from '../components/SubTitle';
import { Layout } from '../containers/Layout';

export const Error404 = () => {
  return (
    <Layout>
      <SubTitle text='Web no disponible - Error 404' />
      <div className='text-center'>
        <PrimaryButton text='Volver a inicio' redirect='/' />
      </div>
    </Layout>
  );
};
