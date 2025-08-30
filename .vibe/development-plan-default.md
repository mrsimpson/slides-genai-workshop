# Entwicklungsplan: genai-sw-workshop (default branch)

*Erstellt am 2025-08-27 durch Vibe Feature MCP*
*Workflow: [slides](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/slides)*

## Ziel
Workshop-Folien für "Generative KI in der Software-Entwicklung" erstellen, die als Gedankenstütze für den Workshopleiter dienen und über Speakernotes auch den Teilnehmern Informationen zum Nachlesen bieten.

**Kernbotschaft:** Der Engineering-Teil bleibt, auch wenn das Programmieren weniger wird.

**Zielgruppe:** Höheres Management ohne Programmiererfahrung (kleine Gruppe)

**Format:** 2x2h mit interaktiven Elementen, die auch in WebUI (ChatGPT o.ä.) ausführbar sind

**Lernziele:** 
- Software-Entwickler werden nicht obsolet, müssen sich aber qualifizieren
- Verständnis für: Kontext bereitstellen, Halluzinationen erkennen, Qualität sichern, Regression verhindern
- Anregungen für organisatorische Rahmenbedingungen zur kooperativen KI-Software-Entwicklung

## Ideenfindung
### Aufgaben
- [x] Workshop-Thema und Kernbotschaften definiert: "Generative KI in der Software-Entwicklung"
- [x] Zielgruppe und deren Wissensstand bestimmt: Höheres Management ohne Programmiererfahrung
- [x] Präsentationsziele und Erfolgskriterien festgelegt: Qualifizierung statt Obsoleszenz vermitteln
- [x] Umfang, Zeitrahmen und Kontext definiert: 2x2h, interaktiv, WebUI-basiert
- [x] Management-Ängste identifiziert: Sorge um Wettbewerbsfähigkeit, nicht um Jobverlust
- [x] Vorhandene KI-Tools erfasst: GitHub Copilot, Amazon Q, BahnGPT, Office Copilot
- [x] Kernherausforderungen definiert: Neue Entwicklungsprozesse, maschinenlesbare Domänen-Expertise
- [x] Workshop-Ziel präzisiert: Deep-Dive für Maßnahmenplan-Vorbereitung
- [x] Konkrete Deep-Dive-Inhalte strukturieren (Prozesse, Qualitätsmaßstäbe, Wissensmanagement)
- [x] Interaktive Elemente für erfahrene KI-Nutzer anpassen
- [x] Entscheidung: Einfache Herleitung ohne DB-spezifische Beispiele - universell anwendbar

### Abgeschlossen
- [x] Entwicklungsplan-Datei erstellt

## Strukturierung

### Eintrittskriterien:
- [x] Das Präsentationskonzept ist klar definiert
- [x] Die Zielgruppe und deren Bedürfnisse sind verstanden
- [x] Die Präsentationsziele sind festgelegt
- [x] Der Umfang und Zeitrahmen sind definiert

### Aufgaben
- [x] Detaillierte Workshop-Gliederung mit Hauptabschnitten erstellt (Block 1 bereits vorhanden)
- [x] Foliensequenz und narrativen Ablauf für Block 1 definiert (genai_workshop_agenda.md)
- [x] Übergänge zwischen Themen geplant (naiv → kritisch → kollaborativ → transfer)
- [x] Interaktive Elemente und Engagement-Punkte identifiziert (praktische Übungen, Diskussionen)
- [x] Zeitschätzungen für Block 1 erstellt (2,5h detailliert aufgeschlüsselt)
- [x] Transformer-Erklärung mit Visualisierung geplant (https://poloclub.github.io/transformer-explainer/)
- [x] Block 2 Struktur entwickelt basierend auf vorhandenen Präsentationen und responsible-vibe-mcp
- [x] Übergänge zwischen Block 1 und Block 2 geplant (von Grundlagen zu erweiterten Konzepten)
- [x] Gesamte Workshop-Struktur finalisiert

### Abgeschlossen
*Noch keine*

## Entwurf

### Eintrittskriterien:
- [x] Eine detaillierte Präsentationsgliederung mit Hauptabschnitten ist erstellt
- [x] Die Foliensequenz und der narrative Ablauf sind definiert
- [x] Übergänge zwischen Themen sind geplant
- [x] Zeitschätzungen für jeden Abschnitt liegen vor

### Aufgaben
- [x] Block 1 Anpassungen identifiziert (Teil 4: Tools erwähnen, Teil 7: 10x-Botschaft, Teil 8: stärkerer Übergang)
- [x] Block 2 Folien-Content erstellt (block2-slides-final.md)
- [x] Block 1 Folien mit Speakernotes erstellt (block1-slides.md)
- [x] Speakernotes in gewünschtem Format umstrukturiert (block1-slides-restructured.md, block2-slides-restructured.md)
- [x] 10x-Erfahrung für Manager entwickelt: Transfer (eigene Domäne) → 10x (fremde Domäne mit gleichen Techniken)
- [x] Finale Version mit 10x-Integration erstellt (block1-slides-final.md)
- [ ] Visuelle Konzepte und Platzhalter definieren
- [ ] Timing-Validierung durchführen

### Abgeschlossen
*Noch keine*

## Gestaltung

### Eintrittskriterien:
- [x] Klarer, ansprechender Inhalt für jede Folie/jeden Abschnitt ist geschrieben
- [x] Umfassende Speakernotes sind als Hauptliefergegenstand erstellt
- [x] Strategische Entscheidungen über die Aufteilung von visuellen vs. gesprochenen Inhalten sind getroffen
- [x] Konzepte, die effektiv visualisiert werden können, sind identifiziert

### Aufgaben
- [x] Präsentations-Tool/Platform gewählt (Slidev für Konsistenz)
- [x] DB UX Theme entwickelt (style.css mit offiziellen DB-Farben)
- [x] Teilnehmer-Notizen in slides.md integriert (HTML-Kommentare)
- [x] Center-Layout für zentrierte Stichworte implementiert
- [x] npm run dev-presenter Target für Speaker Notes hinzugefügt
- [x] Speaker Notes nach Folien-Struktur umorganisiert (23 Folien)
- [x] Package.json mit allen Export-Optionen erweitert
- [x] README.md mit Presenter Mode dokumentiert

### Abgeschlossen
*Noch keine*

## Überprüfung

### Eintrittskriterien:
- [ ] Präsentationsanforderungen sind bewertet und geeignetes Tool/Plattform ist gewählt
- [ ] Themen, Vorlagen und visueller Designansatz sind ausgewählt
- [ ] Vorhandene Visuals, Bilder und Grafikelemente sind beschafft
- [ ] Erforderliche visuelle Inhalte sind erstellt oder generiert
- [ ] Konsistentes visuelles Design ist angewendet

### Aufgaben
- [ ] *Werden hinzugefügt, wenn diese Phase aktiv wird*

### Abgeschlossen
*Noch keine*

## Auslieferung

### Eintrittskriterien:
- [ ] Inhaltsfluss, narrative Kohärenz und logische Progression sind überprüft
- [ ] Präsentationstiming und -tempo sind für die zugeteilte Zeit getestet
- [ ] Visuelle Qualität, Konsistenz und professionelles Erscheinungsbild sind verifiziert
- [ ] Feedback von Testpublikum oder Stakeholdern ist eingeholt
- [ ] Technisches Setup und Backup-Pläne sind überprüft

### Aufgaben
- [ ] *Werden hinzugefügt, wenn diese Phase aktiv wird*

### Abgeschlossen
*Noch keine*

## Wichtige Entscheidungen
- **Management-Mindset:** Proaktiv, will "10x AI-enabled" werden - nicht defensiv
- **Vorhandene Tools:** GitHub Copilot, Amazon Q, BahnGPT, Office Copilot - gute Basis vorhanden
- **Workshop-Tiefe:** Deep-Dive statt Überblick - Management will Details verstehen
- **Ziel:** Vorbereitung für Maßnahmenplan - konkrete Handlungsfelder identifizieren
- **Ansatz:** Einfache, universelle Herleitung statt DB-spezifische Beispiele
- **Fokus:** Grundprinzipien die überall anwendbar sind
- **Block 1:** Vorhandene Agenda (genai_workshop_agenda.md) übernommen - 2,5h strukturiert
- **"10x Engineer" Klarstellung:** 10x breiter in Fähigkeiten, nicht 10x schneller - Engineering bleibt
- **Block 2 Inhalte:** RAG/semantische Suche, Tools für Maschinenhandeln, Workflow-Orchestrierung
- **Anknüpfung:** Vorhandene Slidev-Präsentationen "context-is-all-you-need" und "not-impossible-keynote"
- **Praktisches Beispiel:** responsible-vibe-mcp für strukturierte Entwicklungsworkflows

## Notizen
- Management bereits KI-affin - höhere Abstraktionsebene möglich
- Fokus auf Prozessveränderungen und Qualitätsmaßstäbe
- Einfache, universelle Herleitung bevorzugt - keine spezifischen Beispiele
- Wissensmanagement und Kontextualisierung als zentrale Themen
- 4 Stunden erlauben echten Deep-Dive in technische und organisatorische Aspekte

---
*Dieser Plan wird vom LLM gepflegt. Tool-Antworten geben Anleitung, auf welchen Abschnitt man sich konzentrieren und welche Aufgaben man bearbeiten soll.*
