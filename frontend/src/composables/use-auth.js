import { routerDeclarations } from './../config/router';
import { redirect } from 'react-router-dom';
import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const onUserChange = (userParam) => {
    setUser(localStorage.setItem('user', JSON.stringify(userParam)));
  };

  const logout = () => {
    onUserChange(null);
    return redirect(routerDeclarations.home);
  };

  const redirectAfterLogin = () => {
    console.log('hola');
    return redirect(routerDeclarations.dashboard);
  };
  return { user, onUserChange, logout, redirectAfterLogin };
}
