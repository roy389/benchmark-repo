export interface Artikkel {
  id: string;
  tittel: string;
  ingress: string;
  publisert: string; // ISO-dato
}

export const artikler: Artikkel[] = [
  { id: "a1", tittel: "Ny fergerute fra våren", ingress: "Fylket utvider tilbudet langs kysten.", publisert: "2026-09-12T07:30:00Z" },
  { id: "a2", tittel: "Rekordmange turister i sommer", ingress: "Overnattingene økte med 12 prosent.", publisert: "2026-10-06T08:15:00Z" },
  { id: "a3", tittel: "Skolen får nytt bibliotek", ingress: "Byggestart er satt til januar.", publisert: "2026-08-28T11:00:00Z" },
  { id: "a4", tittel: "Lokal bedrift vinner pris", ingress: "Prisen deles ut for bærekraftig drift.", publisert: "2026-09-30T14:45:00Z" },
];
