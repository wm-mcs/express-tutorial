import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';

import { routerDeclarations } from './../../config/router';
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <div className="main-layout__header__container">
          <div>
            <Link to={routerDeclarations.home}> Home </Link>
          </div>
          <div>
            <Link to={routerDeclarations.dashboard}> Dashboard </Link>
          </div>
        </div>
      </header>
      <main className="main-layout__main">{<Outlet />}</main>
      <footer className="main-layout__footer">
        <div className="main-layout__footer__container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
