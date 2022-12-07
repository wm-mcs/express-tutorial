import MainLayout from './layout/MainLayout';
import { useAuth } from '../composables/use-auth';
import { useEffect, useState } from 'react';

const App = () => {
  const { user: userFromUseAuth } = useAuth();
  const [user, setUser] = useState(userFromUseAuth);

  useEffect(() => {
    setUser(user);
  }, [userFromUseAuth]);

  return <MainLayout user={user} />;
};

export default App;
