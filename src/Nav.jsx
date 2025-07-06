import logo from "./assets/Screenshot_3 [Recovered] 1.svg";
import "./styles/Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {

  return (
    <nav>
      <img src={logo} />
      <div className="navigation">
        <NavLink to="/home" className={({ isActive }) => isActive ? "navLink isActive" : "navLink"}> <p >HOME</p></NavLink>
        <NavLink to="/services"className={({ isActive }) => isActive ? "navLink isActive" : "navLink"} > <p>SERVICES</p></NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "navLink isActive" : "navLink"}> <p>ABOUT US</p></NavLink>
        <NavLink to="/since" className={({ isActive }) => isActive ? "navLink isActive" : "navLink"}> <p >SINCE</p></NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => isActive ? "navLink isActive" : "navLink"}> <p >TESTIMONIALS</p></NavLink>
        <NavLink to="/news" className={({ isActive }) => isActive ? "navLink isActive" : "navLink"}> <p>NEWS</p></NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "navLink isActive" : "navLink"}> <p>CONTACT US</p></NavLink>
      </div>
      <div className="navButton">Sign Up</div>
    </nav>
  );
};

export default Nav;
