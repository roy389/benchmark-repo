// Supabase Edge Function: tar imot kontaktskjema og sender e-post via Resend.
// Miljøvariabler: RESEND_API_KEY, MOTTAKER_EPOST

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });

  const { navn, epost, telefon, melding } = await req.json();
  if (!navn || !epost || !melding || String(melding).length < 10) {
    return new Response(JSON.stringify({ feil: "Ugyldig skjema" }), { status: 400, headers: cors });
  }

  const bodyLines = [melding, telefon ? `Telefon: ${telefon}` : ""].filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Fjordnytt <kontakt@example.no>",
      to: Deno.env.get("MOTTAKER_EPOST"),
      reply_to: epost,
      subject: `Ny melding fra ${navn}`,
      text: bodyLines.join("\n\n"),
    }),
  });

  return new Response(JSON.stringify({ ok: res.ok }), { status: res.ok ? 200 : 502, headers: cors });
});
