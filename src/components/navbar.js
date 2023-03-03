import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            Origin <i className="fa-sharp fa-solid fa-microchip"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/services" className="nav-links" onClick={closeMenu}>
                Services
              </Link>
            </li>

            <li className="nav-items">
              <Link to="/products" className="nav-links" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/siginup"
                className="nav-links-signup"
                onClick={closeMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
