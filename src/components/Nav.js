// import routing link

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Sku Finder</h1>
      <ul>
        <li>
          <Link href="#" to="/">
            Home
          </Link>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <Link href="#" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
