# AI CALL COACH

Bereit zum Deploy auf Vercel.

Befehle
1) npm install
2) npm run dev
3) npm run build && npm start

Deployment
- Neues Projekt in Vercel anlegen
- Git Repo verbinden oder Upload
- Region: USA
- Domain ai-callcoach.de verbinden
  Variante A Nameserver: Domain zu Vercel transferieren
  Variante B DNS bleiben: CNAME auf cname.vercel-dns.com fuer root via ALIAS/ANAME, und www als CNAME

Seiten
- /  Landing
- /simulator  Trainingssimulator
- /manager  Manager Ansicht

Branding
- Hauptfarbe #111111
- Logos in /public: logo-light.svg, logo-dark.svg, logo-icon.svg, favicon.png
