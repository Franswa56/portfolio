import "./_Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4 className="nav__title">Accueil</h4>
      </Link>
      <h4 className="nav__title">A propos</h4>
      <Link to="/projets" style={{textDecoration:'none'}}>
      <h4 className="nav__title">Projets</h4>
      </Link>
      <h4 className="nav__title">Contact</h4>
    </div>
  );
}

export default Nav;
