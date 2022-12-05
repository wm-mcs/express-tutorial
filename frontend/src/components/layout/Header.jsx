import { Link, NavLink } from 'react-router-dom';
import { routerDeclarations } from './../../config/router';
import { menuData } from './../../config/data';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={routerDeclarations.home}>
          <div className="header__container__left-block">Home</div>
        </Link>
        <nav className="header__container__right-block">
          <ul className="header__container__right-block__nav-container">
            {menuData.map((menu) => {
              return (
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
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
