import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Collapse } from 'bootstrap';

const Navbar: React.FC = () => {
  const location = useLocation();

  // Fonction pour forcer le repli du menu
  const handleNavClick = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  };

  // Ferme le menu à chaque changement de route
  useEffect(() => {
    handleNavClick();
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ padding: '10px' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/" onClick={handleNavClick}>
          <img className="me-2"/>📚 BiblioSwap
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link text-white" to="/home" onClick={handleNavClick}>Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/auteur" onClick={handleNavClick}>Auteurs</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/livre" onClick={handleNavClick}>Livres</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/utilisateur" onClick={handleNavClick}>Utilisateurs</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/MonCompte" onClick={handleNavClick}>Mon compte</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/OLSearch" onClick={handleNavClick}>OLSearch</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
