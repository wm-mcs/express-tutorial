import { validateUrl } from './../utils/regularExpressions';

const routerDeclarations = {
  home: '/',
  dashboard: '/dashboard',
  users: '/users',
  login: '/login',
  register: '/register',
};

const routerWithParamsExecution = {
  integranteGet: function (name) {
    return `/integrantes/${name.trim().toLowerCase().replaceAll(' ', '-')}`;
  },
  integrante: '/integrantes/:name',
  charlaSeminarioGet: function (name) {
    return `/charla/${name.toLowerCase().trim().replace(validateUrl, '-')}`;
  },
};

export { routerDeclarations, routerWithParamsExecution };
