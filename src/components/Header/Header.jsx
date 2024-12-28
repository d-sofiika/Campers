import css from './Header.module.css';
import logo from "../../img/Logo.svg";
import { NavLink } from "react-router-dom";



export default function Header() {
  return (
    <div  className={`container ${css.headerContainer}`}>
      <div className={css.wrapper}>
      <nav className={css.navLogo}>
        <NavLink to="/">
          <img src={logo} className={css.logo} alt="Logo" />
        </NavLink>
      </nav>

      <nav className={css.nav}>
        <NavLink to="/" className={({ isActive }) => 
              isActive ? `${css.link} ${css.activeLink}` : css.link
            }>
          Home
        </NavLink>
        <NavLink to="/catalog" className={({ isActive }) => 
              isActive ? `${css.link} ${css.activeLink}` : css.link
            }>
          Catalog
        </NavLink>
        </nav>
        </div>
    </div>
  );
}
