import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/colorPicker">Color Picker</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/songList">Song list</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
    </>
  )
};

export default Navbar;