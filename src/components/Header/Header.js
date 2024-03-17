import "./_Header.scss";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="header__name">François Philippon</h2>
        </Link>
        <Nav />
        <Link to="/admin">
          <i className="fa-solid fa-user-lock header__admin"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
