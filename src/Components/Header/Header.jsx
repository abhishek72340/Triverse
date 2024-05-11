import "./Header.css";
import { Link } from "react-router-dom";
import HaburgerItems from "./HamburgerItems";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <img src="./images/logo1.png" alt="logo" className="logo1" />
        <ul className="navbar-nav">
          <li>
            <Link to="/">discover welmont</Link>
          </li>
          <li>
            <Link to="/">programs</Link>
          </li>
          <li>
            <Link to="/">facilities</Link>
          </li>
          <li>
            <Link to="/">about us</Link>
          </li>
          <li>
            <Link to="/">blog</Link>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button>Contact Us</button>
          <button>Admissions</button>
          <button>Franchise</button>
        </div>
        <HaburgerItems />
      </nav>
      <img src="/images/thread1.png" alt="thread" className="thread1" />
    </>
  );
};

export default Header;
