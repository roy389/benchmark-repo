# Fjordnytt (benchmark-repo)

En liten nyhetsside brukt som fast testrepo for AI Andorra-benchmarken.

## Teknologi
- React 18, TypeScript, Vite
- React Router for sidene Forside, Artikler og Kontakt
- Supabase Edge Function for kontaktskjemaet, med e-post via Resend

## Oppstart
```bash
npm install
npm run dev
```

## Bygg
```bash
npm run build
```

## Miljøvariabler
Frontend (`.env`):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Edge Function (Supabase secrets):
- `RESEND_API_KEY`
- `MOTTAKER_EPOST`
