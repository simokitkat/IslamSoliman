import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  function addActiveClass(activeObject) {
    return activeObject.isActive ? "active" : "";
  }

  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo-IS" className="logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={addActiveClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="projects" className={addActiveClass}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="certificates" className={addActiveClass}>
                Certificates
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className={addActiveClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
