import { useState } from 'react';

import PageComponent from '../components/PageComponent';
import Form from '../components/form/Form';
import Button from '../components/Button';
import { useEffect } from 'react';
import { useFetch } from '../composables/use-fetch';
import { useEnv } from './../composables/use-env';
import { useAuth } from '../composables/use-auth';
import { redirect } from 'react-router-dom';
import './Login.scss';

const { apiUrlPath } = useEnv();

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { doFetch, data, error, loading, success } = useFetch();

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { onUserChange, redirectAfterLogin } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log('Entr<');
    doFetch(`${apiUrlPath}/api/users/login`, 'POST', formData, () => {
      onUserChange(data);

      

      return redirectAfterLogin();
    });
  };

  return (
    <PageComponent
      title="Login"
      description="La descripción de la página del Login"
    >
      <section className="login">
        <h1 className="login__title">Login</h1>

        <div style={{ color: 'black', fontSize: '40px' }}>
          {error && error.message}
        </div>
        <div className="login__form">
          <Form
            onSubmit={onSubmit}
            style={{
              opacity: loading ? '0.5' : 1,
              pointerEvents: loading ? 'none' : 'auto',
            }}
          >
            <fieldset>
              <legend>Iniciar sesión</legend>
              <input
                onChange={onChange}
                name="email"
                type="email"
                placeholder="Escribe tu email"
              />

              <input
                onChange={onChange}
                name="password"
                type="password"
                placeholder="Escribe tu contraseña"
              />
            </fieldset>
            <Button type="submit" size="">
              Ingresar
            </Button>
          </Form>
        </div>
      </section>
    </PageComponent>
  );
};

export default Login;
