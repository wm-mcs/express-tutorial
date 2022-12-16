import { useState } from 'react';

import PageComponent from '../components/layout/pages/PageComponent';
import PageTitle from '../components/layout/pages/PageTitle';
import Form from '../components/form/Form';
import Button from '../components/Button';

import { useFetch } from '../composables/use-fetch';
import { useEnv } from './../composables/use-env';
import { useAuth } from '../composables/use-auth';

import './Login.scss';

const { apiUrlPath } = useEnv();

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { doFetch, error, loading } = useFetch();

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { onUserChange, redirectAfterLogin } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    const nuevaData = await doFetch(
      `${apiUrlPath}/api/users/login`,
      'POST',
      formData,
      () => {
        onUserChange(nuevaData);
        return redirectAfterLogin();
      }
    );
  };

  return (
    <PageComponent
      title="Login"
      description="La descripción de la página del Login"
    >
      <section className="login">
        <PageTitle>Login</PageTitle>

        <div style={{ color: 'black', fontSize: '40px' }}>{error && error}</div>
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
