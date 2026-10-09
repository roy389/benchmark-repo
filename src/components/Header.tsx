import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Forside</Link>
        <Link to="/artikler">Artikler</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}
