import { routerDeclarations } from './../config/router';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const user = JSON.parse(localStorage.getItem('user'));

  const onUserChange = (userParam) => {
    localStorage.setItem('user', JSON.stringify(userParam));
  };

  const navigate = useNavigate();

  const logout = () => {
    onUserChange(null);
    return navigate(routerDeclarations.home);
  };

  const redirectAfterLogin = () => {
    return navigate(routerDeclarations.dashboard);
  };
  return { user, onUserChange, logout, redirectAfterLogin };
}
