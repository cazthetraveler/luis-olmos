import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  const closeNav = () => {
    setNavVisible(false);
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <div>
        <button
          id="nav-toggle"
          className="material-symbols-outlined"
          onClick={toggleNav}
        >
          menu
        </button>
        <Link className="my-name" to="/">
          <h1>LUIS OLMOS</h1>
        </Link>
      </div>
      <nav className={navVisible ? "open" : ""}>
        <Link
          onClick={closeNav}
          className={
            navVisible
              ? "hover-underline-animation open"
              : "hover-underline-animation"
          }
          to="/"
        >
          HOME
        </Link>
        <Link
          onClick={closeNav}
          className={
            navVisible
              ? "hover-underline-animation open"
              : "hover-underline-animation"
          }
          to="/graphic-design"
        >
          GRAPHIC DESIGN
        </Link>
        <Link
          onClick={closeNav}
          className={
            navVisible
              ? "hover-underline-animation open"
              : "hover-underline-animation"
          }
          to="/web-development"
        >
          WEB DEVELOPMENT
        </Link>
        <Link
          onClick={closeNav}
          className={
            navVisible
              ? "hover-underline-animation open"
              : "hover-underline-animation"
          }
          to="/photography"
        >
          PHOTOGRAPHY
        </Link>
        <Link
          onClick={closeNav}
          className={
            navVisible
              ? "hover-underline-animation open"
              : "hover-underline-animation"
          }
          to="/contact"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
