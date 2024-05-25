import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { BurgerClose, BurgerOpen } from "../SVGs/SVGs";
import NavUl from "./NavUl";
import { toggleBurger } from "../../features/burgerSlice";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isOpen = useSelector((state) => state.burger.isOpen);
  const dispatch = useDispatch();

  console.log(isOpen);

  function toggleUl() {
    dispatch(toggleBurger());
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-IS" className="logo" />
        </Link>
        <nav>
          <div className="burger">
            {!isOpen ? (
              <BurgerOpen toggleBurger={toggleUl} />
            ) : (
              <BurgerClose toggleBurger={toggleUl} />
            )}
            <NavUl isBurger={true} />
          </div>
          <NavUl isBurger={false} />
        </nav>
      </div>
    </header>
  );
}
