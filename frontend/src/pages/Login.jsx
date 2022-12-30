import { useState } from 'react';

import PageComponent from '../components/layout/pages/PageComponent';
import PageTitle from '../components/layout/pages/PageTitle';
import Form from '../components/form/Form';
import Button from '../components/Button';

import { useFetch } from '../composables/use-fetch';
import { useAuth } from '../composables/use-auth';

import './Login.scss';

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
      `/api/users/login`,
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
      titleSection={<PageTitle>Login</PageTitle>}
    >
      <section className="login">
        <div className="login__form">
          <Form loading={loading} onSubmit={onSubmit} error={error}>
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
