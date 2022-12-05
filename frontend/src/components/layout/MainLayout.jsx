import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__main">{<Outlet />}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
