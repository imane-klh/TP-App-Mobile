import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <div className="container">
        <nav className="mb-2">
          <Link className="text-white mx-1" to="/home">Accueil</Link> |
          <Link className="text-white mx-1" to="/auteur">Auteurs</Link> |
          <Link className="text-white mx-1" to="/livre">Livres</Link> |
          <Link className="text-white mx-1" to="/utilisateur">Utilisateurs</Link> |
          <Link className="text-white mx-1" to="/MonCompte">Mon compte</Link>
        </nav>
        <p className="mb-1">© 2025 Free Book Exchange. Tous droits réservés.</p>
        <p className="mb-0">
          <a href="terms.html" className="text-white">Conditions d'utilisation</a> |
          <a href="privacy.html" className="text-white mx-1">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
