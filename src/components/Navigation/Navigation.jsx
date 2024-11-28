// import { NavLink, useLocation } from "react-router-dom";
// import style from "../Navigation/Navigation.module.css";
// import clsx from "clsx";

// const Navigation = () => {
//   const location = useLocation();

//   const buildLinkClass = (to) => {
//     return clsx(style.navLink, location.pathname === to && style.navLinkActive);
//   };

//   return (
//     <header className={style.container}>
//       <nav className={style.headerNav}>
//         <NavLink className={buildLinkClass("/")} to="/">
//           Home
//         </NavLink>
//         <NavLink className={buildLinkClass("/movies")} to="/movies">
//           Movies
//         </NavLink>
//       </nav>
//     </header>
//   );
// };

// export default Navigation;

import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => (
  <header className={styles.container}>
    <nav className={styles.headerNav}>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.navLink, isActive && styles.navLinkActive)
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.navLink, isActive && styles.navLinkActive)
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  </header>
);

export default Navigation;