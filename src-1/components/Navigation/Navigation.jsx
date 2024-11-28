// src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            clsx(styles.navLink, isActive && styles.activeNavLink)
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(styles.navLink, isActive && styles.activeNavLink)
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;