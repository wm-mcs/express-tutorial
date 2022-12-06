import { routerDeclarations } from './router';

const menuData = [
  {
    name: 'Dashboard',
    route: routerDeclarations.dashboard,
    access: 'auth',
  },
  {
    name: 'Login',
    route: routerDeclarations.login,
    access: 'public',
  },
  {
    name: 'Register',
    route: routerDeclarations.register,
    access: 'public',
  },
];

export { menuData };
