/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleBurger } from "../../features/burgerSlice";

export default function NavUl({ isBurger }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.burger.isOpen);

  function addActiveClass(activeObject) {
    return activeObject.isActive ? "active" : "";
  }

  function toggleUl() {
    if (isBurger) {
      dispatch(toggleBurger());
    }
  }

  return (
    <ul className={isOpen ? "open" : ""}>
      <li onClick={toggleUl}>
        <NavLink to="/" className={addActiveClass}>
          Home
        </NavLink>
      </li>
      <li onClick={toggleUl}>
        <NavLink to="projects" className={addActiveClass}>
          Projects
        </NavLink>
      </li>
      <li onClick={toggleUl}>
        <NavLink to="certificates" className={addActiveClass}>
          Certificates
        </NavLink>
      </li>
      <li onClick={toggleUl}>
        <NavLink to="contact" className={addActiveClass}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
