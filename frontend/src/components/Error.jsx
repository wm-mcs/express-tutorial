import { useRouteError } from 'react-router-dom';

import './Error.scss';

const Error = () => {
  const { error, status } = useRouteError();

  console.log(error);
  return (
    <div className="error">
      Esto es la página de error. Error code {status} {error.message}
    </div>
  );
};

export default Error;
