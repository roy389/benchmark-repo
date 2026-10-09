import { useState } from "react";

interface Skjemadata {
  navn: string;
  epost: string;
  telefon?: string;
  melding: string;
}

const tomt: Skjemadata = { navn: "", epost: "", telefon: "", melding: "" };

function valider(d: Skjemadata): string | null {
  if (!d.navn.trim()) return "Skriv inn navnet ditt.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.epost)) return "Skriv inn en gyldig e-postadresse.";
  if (d.telefon && d.telefon.trim() && !/^\+?[\d\s-]{7,15}$/.test(d.telefon.trim()))
    return "Ugyldig telefonnummer.";
  if (d.melding.trim().length < 10) return "Meldingen må være minst 10 tegn.";
  return null;
}

export default function KontaktSkjema() {
  const [data, setData] = useState<Skjemadata>(tomt);
  const [feil, setFeil] = useState<string | null>(null);
  const [sendt, setSendt] = useState(false);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const f = valider(data);
    if (f) {
      setFeil(f);
      return;
    }
    setFeil(null);
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/kontakt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSendt(true);
      setData(tomt);
    } else {
      setFeil("Noe gikk galt. Prøv igjen senere.");
    }
  }

  if (sendt) return <p>Takk for meldingen!</p>;

  return (
    <form onSubmit={send}>
      <label>
        Navn
        <input value={data.navn} onChange={(e) => setData({ ...data, navn: e.target.value })} />
      </label>
      <label>
        E-post
        <input value={data.epost} onChange={(e) => setData({ ...data, epost: e.target.value })} />
      </label>
      <label>
        Telefon (valgfritt)
        <input value={data.telefon ?? ""} onChange={(e) => setData({ ...data, telefon: e.target.value })} />
      </label>
      <label>
        Melding
        <textarea rows={5} value={data.melding} onChange={(e) => setData({ ...data, melding: e.target.value })} />
      </label>
      {feil && <p role="alert">{feil}</p>}
      <button type="submit">Send</button>
    </form>
  );
}
