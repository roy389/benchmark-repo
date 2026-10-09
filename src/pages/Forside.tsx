import { Link } from "react-router-dom";

export default function Forside() {
  return (
    <section>
      <h1>Velkommen til Fjordnytt</h1>
      <p>Lokale nyheter fra kysten.</p>
      <Link to="/artikler">Les siste artikler</Link>
    </section>
  );
}
