import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { routerDeclarations } from './../../config/router';
import { menuData } from './../../config/data';
import { useAuth } from '../../composables/use-auth';

import './Header.scss';

const Header = () => {
  const { user, logout } = useAuth();
  const [authUser, setAuthUser] = useState(user);

  useEffect(() => {}, [user]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to={routerDeclarations.home}>
          <div className="header__container__left-block">Home</div>
        </Link>
        <nav className="header__container__right-block">
          <ul className="header__container__right-block__nav-container">
            {menuData
              .filter((data) => {
                if (authUser === null) {
                  return data.access === 'public';
                }

                return data.access === 'auth';
              })
              .map((menu) => {
                return (
                  <>
                    <NavLink
                      key={menu.route}
                      to={menu.route}
                      className={({ isActive }) =>
                        `header__container__right-block__nav-container__menu-item  ${
                          isActive
                            ? 'header__container__right-block__nav-container__menu-item--active'
                            : undefined
                        }`
                      }
                    >
                      <li>{menu.name}</li>
                    </NavLink>
                    {user !== null && (
                      <li
                        className="header__container__right-block__nav-container__menu-item"
                        onClick={logout}
                      >
                        Salir
                      </li>
                    )}
                  </>
                );
              })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
