import { artikler } from "../data/artikler";

function formatDato(isoDato: string): string {
  return new Date(isoDato).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArtikkelListe() {
  const sortert = [...artikler].sort((a, b) => b.publisert.localeCompare(a.publisert));

  return (
    <ul>
      {sortert.map((a) => (
        <li key={a.id}>
          <h3>{a.tittel}</h3>
          <p>{a.ingress}</p>
          <small>{formatDato(a.publisert)}</small>
        </li>
      ))}
    </ul>
  );
}
