import React from 'react';
import { apiURL } from '../services/apiRest';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastAtt = {
  isLoading: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  closeButton: true,
};

export const PostLogin = (data, setUser, setStatus) => {
  const load = toast.loading('Espere por favor...');
  axios
    .post(apiURL, data)
    .then((response) => {
      if (response.status === 200) {
        toast.update(load, {
          render: 'Todo bien.',
          type: 'success',
          ...toastAtt,
        });
        setUser(response.data.user_data.email);
        setStatus(true);
      }
    })
    .catch((e) => {
      if (e.response.status >= 400 && e.response.status < 500) {
        toast.update(load, {
          render: 'Credenciales invalidas...',
          type: 'warning',
          ...toastAtt,
        });
      }
      if (e.response.status >= 500) {
        toast.update(load, {
          render: 'El servidor no responde...',
          type: 'error',
          ...toastAtt,
        });
      }
    });
};
