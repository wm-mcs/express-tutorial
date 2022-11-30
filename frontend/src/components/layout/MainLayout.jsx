import React from 'react';
import Footer from './Footer';
import './MainLayout.scss';

const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <div className="main-layout__header__container">
          <div>Logo</div>
          <div>nav</div>
        </div>
      </header>
      <main className="main-layout__main">{props.children}</main>
      <footer className="main-layout__footer">
        <div className="main-layout__footer__container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
