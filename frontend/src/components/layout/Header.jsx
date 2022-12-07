import { Link, NavLink } from 'react-router-dom';

import { routerDeclarations } from './../../config/router';
import { menuData } from './../../config/data';
import { useAuth } from '../../composables/use-auth';

import './Header.scss';

const Header = (props) => {
  const { user } = props;
  const { logout } = useAuth();

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
                if (user === null) {
                  return data.access === 'public';
                }

                return data.access === 'auth';
              })
              .map((menu, index) => {
                return (
                  <NavLink
                    key={`${menu.name} ${index}`}
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
                );
              })}
            {user !== null && (
              <li
                className="header__container__right-block__nav-container__menu-item"
                onClick={logout}
              >
                Salir
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
