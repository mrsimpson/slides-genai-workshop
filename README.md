# GenAI Workshop - Slidev Präsentation

Workshop-Folien für "Generative KI in der Software-Entwicklung" mit DB UX Design.

## Setup

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Öffnet die Präsentation im Browser mit Live-Reload.

## Presenter Mode (mit Speaker Notes)

```bash
npm run dev-presenter
```

Öffnet die Präsentation im Presenter-Modus mit Ihren Speaker Notes und Teilnehmer-Inhalten.

## Build für GitHub Pages

```bash
npm run build-both
```

Erstellt beide Präsentationen mit korrektem Routing:
- Root (/) → Hauptpräsentation
- /speaker → Speaker Notes

## Export-Optionen

### PDF Export
```bash
npm run export-pdf
```

### PNG Export (alle Folien als Bilder)
```bash
npm run export-png
```

### PowerPoint Export
```bash
npm run export-pptx
```

### Standard Export (HTML)
```bash
npm run export
```

## Build für Produktion

```bash
npm run build
```

Erstellt eine statische Website im `dist/` Ordner.

## Dateien

- `slides.md` - Hauptpräsentation mit DB UX Theme und integrierten Teilnehmer-Notizen
- `style.css` - DB Corporate Design Styling
- `speaker-notes.md` - Didaktische Notizen für Workshopleiter

## DB UX Design

Das Theme verwendet die offiziellen Deutsche Bahn Farben:
- Primär: DB Rot (#EC0016)
- Sekundär: DB Blau (#1455C0)  
- Akzent: DB Gelb (#FFD800)
- Schrift: DB Neo Office (mit Fallback zu Inter/sans-serif)

## Workshop-Struktur

**Block 1 (2,5h):** Grundlagen & Verstärker-Effekt
- Praktische KI-Erfahrungen
- Transformer-Architektur verstehen
- 10x-Erlebnis schaffen

**Block 2 (1,5h):** "10x Enabled Engineer"
- Context Engineering
- Tool-Orchestrierung
- Organisatorische Transformation

## Verwendung

- **Für Workshopleiter:** `npm run dev-presenter` für Speaker Notes
- **Für Teilnehmer:** `npm run dev` für saubere Folien mit Lerninhalten
- **Nachbereitung:** Teilnehmer erhalten die Folien mit integrierten Notizen

## GitHub Pages Deployment

Das Projekt ist für automatisches Deployment auf GitHub Pages konfiguriert:
- Push auf `main` Branch triggert automatisches Deployment
- Beide Präsentationen werden verfügbar unter:
  - `https://[username].github.io/[repo]/` (Hauptpräsentation)
  - `https://[username].github.io/[repo]/speaker` (Speaker Notes)
