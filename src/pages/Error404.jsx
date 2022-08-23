import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../containers/Layout';

export const Error404 = () => {
  return (
    <Layout>
      <h3>Esta web no esta disponible.</h3>
      <Link to='/'>
        <button type='button'>Volver a inicio.</button>
      </Link>
    </Layout>
  );
};
