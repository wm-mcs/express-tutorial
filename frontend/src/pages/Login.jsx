import { useState } from 'react';

import PageComponent from '../components/PageComponent';
import Form from '../components/form/Form';
import Button from '../components/Button';
import { useFetch } from '../composables/use-fetch';

import './Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    doFetch('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(data);
  };

  const { doFetch, data, error, loading } = useFetch();

  return (
    <PageComponent
      title="Login"
      description="La descripción de la página del Login"
    >
      <section className="login">


        
        <h1 className="login__title">Login  {loading && loading === true &&'cargando'}</h1>
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
