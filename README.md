# Timo Haseloff - Portfolio Website

Eine moderne, hochperformante Landing Page für Web und Software Development, gebaut mit Next.js 14, TypeScript, Tailwind CSS und Shadcn/UI.

## 🚀 Features

- **Modernes Design** - Minimalistisch im Apple-Stil mit starkem Blau als Akzentfarbe
- **Responsive Layout** - Optimiert für alle Geräte von Mobil bis Desktop
- **Dark Mode** - System-basierter Dark Mode mit Toggle
- **Performance** - Optimiert für Lighthouse Scores und Core Web Vitals
- **SEO-optimiert** - Meta Tags, Schema.org JSON-LD, Sitemap
- **Accessibility** - ARIA-Labels, Keyboard Navigation, ausreichende Kontraste
- **Kontaktformular** - Mit Zod-Validierung und Resend E-Mail Integration
- **Keine Analytics** - Kein Tracking, kein Cookie-Banner nötig

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **UI Komponenten:** Shadcn/UI + Radix UI
- **Icons:** Lucide React
- **Formulare:** React Hook Form + Zod
- **E-Mail:** Resend
- **Deployment:** Vercel-ready

## 📋 Voraussetzungen

- Node.js 18+ 
- npm oder yarn

## ⚙️ Installation & Setup

1. **Repository klonen**
   ```bash
   git clone <repository-url>
   cd portfolio-1
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen konfigurieren**
   ```bash
   cp .env.example .env.local
   ```
   
   Bearbeiten Sie `.env.local` und fügen Sie Ihre Werte hinzu:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxx
   TO_EMAIL=ihre@email.de
   ```

4. **Development Server starten**
   ```bash
   npm run dev
   ```

5. **Browser öffnen**
   Navigieren Sie zu [http://localhost:3000](http://localhost:3000)

## 📧 E-Mail Konfiguration

Das Kontaktformular nutzt [Resend](https://resend.com) für den E-Mail-Versand:

1. Registrieren Sie sich bei Resend
2. Erstellen Sie einen API Key
3. Fügen Sie den API Key zu `.env.local` hinzu
4. Setzen Sie `TO_EMAIL` auf Ihre gewünschte E-Mail-Adresse

**Fallback:** Ohne Konfiguration zeigt das Formular einen Hinweis mit Ihrer E-Mail-Adresse.

## 🚀 Deployment

### Vercel (Empfohlen)

1. **Vercel Account erstellen** auf [vercel.com](https://vercel.com)

2. **Repository verbinden**
   - Importieren Sie Ihr Git Repository
   - Vercel erkennt automatisch Next.js

3. **Umgebungsvariablen setzen**
   - Fügen Sie `RESEND_API_KEY` und `TO_EMAIL` hinzu

4. **Deploy**
   - Automatisches Deployment bei Git Push

### Andere Anbieter

Das Projekt ist mit allen Next.js-kompatiblen Hosting-Anbietern kompatibel:
- Netlify
- Railway
- Render
- Eigener Server

## 📜 Verfügbare Scripts

```bash
# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Server starten
npm start

# Code Linting
npm run lint

# Code Formatierung
npm run format
```

## 🎨 Anpassungen

### Farben ändern

Bearbeiten Sie `tailwind.config.ts` und `app/globals.css` für Custom Colors:

```css
/* In globals.css */
:root {
  --primary: 215 100% 50%; /* Ihr Blau-Ton */
}
```

### Inhalte anpassen

- **Hero Section:** `components/hero.tsx`
- **Über mich:** `components/about.tsx`
- **Leistungen:** `components/services.tsx`
- **Portfolio:** `components/portfolio.tsx`
- **Kontakt:** `components/contact.tsx`

### Neue Seiten hinzufügen

Erstellen Sie neue Dateien in `app/`:
```
app/
  neue-seite/
    page.tsx
```

## 🔧 Projektstruktur

```
portfolio-1/
├── app/                    # Next.js App Router
│   ├── actions.ts         # Server Actions
│   ├── globals.css        # Global Styles
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx          # Homepage
│   ├── impressum/        # Legal Pages
│   └── datenschutz/
├── components/            # React Komponenten
│   ├── ui/               # Shadcn/UI Komponenten
│   ├── hero.tsx          # Hero Section
│   ├── navbar.tsx        # Navigation
│   └── ...
├── lib/                  # Utilities
│   ├── utils.ts          # Tailwind Utils
│   └── validations.ts    # Zod Schemas
└── ...
```

## 🚦 Performance

Das Projekt ist optimiert für:

- **Lighthouse Score 95+**
- **Core Web Vitals**
- **SEO Best Practices**
- **Accessibility Standards**

### Performance Features

- Image Optimization (AVIF/WebP)
- Code Splitting
- Tree Shaking
- Minification
- Compression

## ♿ Accessibility

- Semantic HTML
- ARIA Labels
- Keyboard Navigation
- Screen Reader Support
- Ausreichende Farbkontraste
- Focus Indicators

## 📱 Responsive Design

Breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large:** > 1400px

## 🐛 Troubleshooting

### Häufige Probleme

**Problem:** E-Mail wird nicht gesendet
**Lösung:** Überprüfen Sie Ihre Resend API Key und TO_EMAIL Konfiguration

**Problem:** Styling funktioniert nicht
**Lösung:** Stellen Sie sicher, dass Tailwind CSS korrekt installiert ist

**Problem:** TypeScript Fehler
**Lösung:** Führen Sie `npm run build` aus, um Type-Checking zu aktivieren

## 📄 Lizenz

Dieses Projekt ist für Timo Haseloff's Portfolio erstellt. Alle Rechte vorbehalten.

## 🤝 Support

Bei Fragen oder Problemen:
- E-Mail: timo@haseloff.dev
- Erstellen Sie ein Issue in diesem Repository

---

**Erstellt mit ❤️ von Cascade AI**
