import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useAuth } from '../../composables/use-auth';


import './MainLayout.scss';

const MainLayout = () => {

  const {user} = useAuth();
 
  return (
    <div className="main-layout">
      <Header  user={user}/>
      <main className="main-layout__main">{<Outlet />}</main>
      <Footer user={user} />
    </div>
  );
};

export default MainLayout;
