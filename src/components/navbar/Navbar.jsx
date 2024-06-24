import "./navbar.css";

export const Navbar = ({ isLoggedIn, userName }) => {
  return (
    <header className="header">
      {isLoggedIn ? (
        <p className="texto__bienvenida">Bienvenido, {userName}</p>
      ) : (
        <a href="#" className="navbar__item">
          Iniciar Sesión
        </a>
      )}
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Item 1
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Item 2
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Item 3
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
