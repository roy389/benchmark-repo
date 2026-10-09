import { artikler } from "../data/artikler";

export default function ArtikkelListe() {
  const sortert = [...artikler].sort((a, b) => a.publisert.localeCompare(b.publisert));

  return (
    <ul>
      {sortert.map((a) => (
        <li key={a.id}>
          <h3>{a.tittel}</h3>
          <p>{a.ingress}</p>
          <small>{a.publisert}</small>
        </li>
      ))}
    </ul>
  );
}
