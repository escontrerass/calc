import React from 'react';
import { Calc } from '../components/Calc';
import { Title } from '../components/Title';
import { Layout } from '../containers/Layout';

export const Home = () => {
  return (
    <Layout>
      <Title title='Formulario de calorías' />
      <Calc />
    </Layout>
  );
};
