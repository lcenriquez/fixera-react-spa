import { Link } from 'react-router-dom';
import Logo from '../logo.svg'
import './Nav.css';


function Nav({ theme, signOut }) {
  return (
    <nav className={`navbar navbar-${theme} bg-${theme}`}>
      <Link to="/">
        <span className="navbar-brand">
          <img id="logo" src={Logo} width="40" height="40" alt="" />
          <span>Fixera <b>SPA</b></span>
        </span>
      </Link>
      <div className="navbar-links">
        <Link to="/signin">Iniciar sesión</Link>
        <Link to="/signout" onClick={signOut}>Salir</Link>
      </div>
    </nav>
  );
};

export default Nav;