---
theme: default
title: Generative KI in der Software-Entwicklung
author: Oliver Jägle
info: |
  ## Generative KI in der Software-Entwicklung
  Workshop für Management: Der Engineering-Teil bleibt, auch wenn das Programmieren weniger wird
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
aspectRatio: 16/9
canvasWidth: 980
fonts:
  sans: 'Inter'
  serif: 'Inter'
  mono: 'Fira Code'
colorSchema: light
css: style.css
layout: center
---

# Generative KI <br/> in der Software-Entwicklung

<style>
  h1 {
    line-height: unset
  }
</style>

<div class="text-2xl opacity-60 mt-4">Workshop für Nicht-Softwerker</div>
<div class="text-2xl opacity-40 mt-12">Oliver Jägle</div>

---
layout: center
---

# Worum geht's?

<!--
**Lernziel:** Workshop-Ziele klären, Kernbotschaft etablieren, Vertrauen schaffen

**Kernbotschaft des Workshops:** Der Engineering-Teil bleibt, auch wenn das Programmieren weniger wird.

Heute haben wir selbst mit KI gearbeitet und verstanden, warum das die Zukunft des Engineering ist.
-->

---
layout: center
---

# Naiv Software prompten

<!--
**Lernziel:** Ersten positiven Kontakt mit GenAI herstellen, "Magie-Gefühl" erzeugen

**Was wir gemacht haben:** Erste Erfahrung mit BahnGPT - "Erstelle eine To-do App"

**Erkenntnis:** GenAI kann komplexe Aufgaben scheinbar mühelos lösen. Das erste Gefühl ist oft "magisch" - die KI erstellt in Sekunden, wofür wir früher Stunden gebraucht hätten.
-->

---
layout: center
---

# Qualität?

<!--
**Lernziel:** Unterschied zwischen "funktioniert" und "ist gut" verstehen

**Die kritische Frage:** Ist das nun gute Software?

**Wichtige Erkenntnis:** Funktionieren ≠ Qualität. Wenn wir einfach "Erstelle eine To-do App" sagen, geben wir die komplette Engineering-Verantwortung an die KI ab. Wir wissen nicht, welche Entscheidungen getroffen wurden, wie die Datenstruktur aussieht oder welche Sicherheitsaspekte berücksichtigt wurden.
-->

---
layout: center
---

# Kollaboration

<!--
**Lernziel:** Paradigmenwechsel von Delegation zu Kollaboration erleben

**Der Paradigmenwechsel:** Von Delegation zu Kollaboration.

**Was wir erlebt haben:** Mit dem Prompt "Hilf mir, eine passende To-do App für meinen Anwendungsfall zu entwerfen. Stelle mir Fragen dazu" stellte die KI gezielte Rückfragen. Das Ergebnis wurde spezifischer und besser.

**Kernbotschaft:** Die KI wird zu unserem Engineering-Partner, nicht zu unserem Ersatz.
-->

---
layout: center
---

# Transfer

<!--
**Lernziel:** Konzept auf eigene Arbeitsdomäne übertragen

**Übertragung auf eure Domäne:** Das Prinzip funktioniert in jeder Domäne - auch in eurer.

**Was wir getestet haben:** Präsentationsskripte zu euren eigenen Themen - erst naiv, dann kollaborativ.

**Ergebnis:** Der kollaborative Ansatz führte zu deutlich besseren Ergebnissen.
-->

---
layout: center
---

# Transformer

<!--
**Lernziel:** Technisches Verständnis für das "Warum" schaffen

**Das technische "Warum":** Attention-Mechanismen in Transformern.

**Wichtige Erkenntnis:** Es gibt nachvollziehbare Gründe, warum strukturiertes Vorgehen besser funktioniert. GenAI ist kein Zauber - es ist Technologie, die wir verstehen können. Deshalb funktioniert Kollaboration besser als Delegation.
-->

---
layout: center
---

# Kontext

<!--
**Lernziel:** Kontext als Erfolgsfaktor verstehen

**Der Erfolgsfaktor:** Kontext ist entscheidend für gute KI-Ergebnisse.

**Drei Arten von Kontext:**
1. **Langzeitgedächtnis/Wissensbasis:** Unternehmensspezifische Informationen, fachliche Standards
2. **Konversationshistorie:** Aufbau auf vorherigen Gesprächen, iterative Verbesserung
3. **Projektspezifische Rules:** Coding Standards, Templates, Muster

GitHub Copilot und Amazon Q nutzen das bereits.
-->

---
layout: center
---

# Konversationskontext

<!--
**Lernziel:** Konversationskontext als mächtiges Werkzeug erleben

**Was wir jetzt testen:** Die gleiche Aufgabe wie in "Transfer", aber mit Konversationskontext.

**Neue Aufgabe:** "Hilf mir, ein Präsentationsskript 'Selbes Thema wie zuvor' zu erstellen. Lass uns das Schritt für Schritt machen und unterstütze mich dabei, meine Gedanken zu ordnen und zielgruppengerechte Inhalte zu erstellen."

**Ergebnis:** Vorhersagbares, besseres Ergebnis dank Konversations-Kontext - die KI "erinnert" sich an das vorherige Gespräch.

**Vorschau:** In Block 2 beschäftigen wir uns noch intensiver mit Kontext und seinen Möglichkeiten.
-->

---
layout: center
---

# TQM

<!--
**Lernziel:** GenAI als Qualitätsmanagement-Herausforderung verstehen

**Management-Perspektive:** GenAI folgt den gleichen Qualitätsprinzipien wie andere Geschäftsprozesse.

**Total Quality Management für KI:**
- Vorhersagbare Ergebnisse entstehen durch strukturierte Prozesse
- Der richtige Kontext zur richtigen Zeit
- Methodisches Vorgehen statt Trial & Error

**Eure Aufgabe:** GenAI-Prozesse in euren Teams etablieren, Standards und Guidelines definieren.
-->

---
layout: center
---

# Ausblick

<!--
**Lernziel:** Übergang zu Block 2 vorbereiten, Neugier wecken

**Was wir erlebt haben:** Grundlagen verstanden - von naiv zu kollaborativ, Kontext als Erfolgsfaktor, TQM-Prinzipien für GenAI.

**Vorschau auf Block 2:** Jetzt wird es praktisch - wie macht ihr eure Engineers zu "10x enabled" Orchestratoren? Context Engineering, Tool-Orchestrierung, organisatorische Transformation.

**15 Minuten Pause**
-->

---
layout: section
---

# Block 2: "10x Enabled Engineer"

---
layout: center
---

# 10x

<!--
**Lernziel:** 10x als "breiter werden" statt "schneller werden" erleben

**Die 10x-Erfahrung:** Jetzt probieren wir es aus! Ihr erstellt eine Präsentation zu GenAI in der Software-Entwicklung - einem Thema, das nicht euer Fachgebiet ist.

**Aufgabe:** "Ich möchte eine Präsentation zu GenAI in der SW-Entwicklung halten. Hilf mir, meine Gedanken zu strukturieren und zielgruppengerechte Folien zu erstellen"

**Kernbotschaft:** Das ist 10x - nicht 10x schneller, sondern 10x breiter in den Fähigkeiten. Ihr könnt plötzlich Dinge, die ihr nie gelernt habt.

**Der Paradigmenwechsel:** Von Spezialisten zu Orchestratoren.
-->

---
layout: center
---

# Unmöglich

<!--
**Lernziel:** Paradigmenwechsel von "schneller" zu "enabled" etablieren

**Von unmöglich zu machbar:** Es geht nicht darum, die gleichen Dinge schneller zu machen. Es geht darum, Dinge zu machen, die ihr nie für möglich gehalten hättet.

**Nicht 10x schneller - 10x enabled.**
-->

---
layout: center
---

# Breiter

<!--
**Lernziel:** 10x als Breite der Fähigkeiten verstehen

**10x bedeutet Breite, nicht Geschwindigkeit.**

**Transformation der Rollen:**
- **Früher:** Spezialist in einer Technologie (Java-Entwickler, Frontend-Experte, DevOps-Engineer)
- **Heute:** Orchestrator von KI-Tools und Systemen

**Eure Engineers werden nicht obsolet - sie werden vielseitiger.**
-->

---
layout: center
---

# Context

<!--
**Lernziel:** Context Engineering als Schlüsselkompetenz etablieren

**Context Engineering wird zur Schlüsselkompetenz.** Nicht Code schreiben - Kontext bereitstellen.

**Das Problem:** KI kennt nicht eure Domäne, eure Standards, eure Geschäftsregeln.

**Die Lösung:** Dokumentation wird maschinenlesbar.

**Live-Demo Ergebnis:** Dramatischer Qualitätsunterschied zwischen Anfragen ohne und mit Dokumenten-Kontext.

**Erkenntnis:** Eure Dokumentation ist nicht mehr nur für Menschen - sie ist der Treibstoff für KI-Systeme.
-->

---
layout: center
---

# RAG

<!--
**Lernziel:** RAG als Game-Changer für Unternehmen verstehen

**Retrieval-Augmented Generation - der Game-Changer für Unternehmen.**

**Einfach erklärt:**
1. Eure Dokumente werden "verstanden" und indexiert
2. Bei Anfragen findet das System relevante Informationen  
3. KI antwortet basierend auf EUREM Wissen

**Organisatorische Konsequenz:** Wissensmanagement wird kritisch. Welche Dokumente müssen "KI-ready" werden? Wie strukturiert ihr Wissen für Maschinen?
-->

---
layout: center
---

# Tools

<!--
**Lernziel:** KI als handelnde Kraft verstehen (nicht nur antwortend)

**Von Prompts zu Aktionen:** KI kann handeln, nicht nur antworten.

**Model Context Protocol (MCP):** Das Betriebssystem für KI-Tools. KI kann Dateien lesen und schreiben, APIs aufrufen, strukturierte Workflows ausführen.

**Live-Demo:** responsible-vibe-mcp zeigt, wie KI strukturierte Entwicklungsworkflows ausführt.
-->

---
layout: center
---

# Workflows

<!--
**Lernziel:** Strukturierte Prozesse als KI-Erfolgsfaktor verstehen

**Strukturierte Prozesse als KI-Erfolgsfaktor.**

**Was wir gesehen haben:**
- Verschiedene Workflows für verschiedene Aufgaben (Bugfix, Feature, Greenfield)
- Jeder Workflow hat klare Phasen und Kriterien
- KI folgt der Struktur und wird dadurch vorhersagbar

**Organisatorische Chance:** Das ist wie ISO-Zertifizierung für KI-Entwicklung. Welche Workflows brauchen eure Teams?
-->

---
layout: center
---

# Skills

<!--
**Lernziel:** Skill-Transformation verstehen, Gap-Analyse durchführen

**Skill-Transformation verstehen:**

**Paradigmenwechsel:**
- **Früher:** Imperativ arbeiten in imperativen Programmiersprachen
- **Heute:** Explorativ arbeiten mit KI-Systemen

**Neue Skills (werden kritisch):**
- Context Engineering - Kontext strukturiert bereitstellen
- Prompten und viel Lesen - neue Arbeitsweise
- Tool-Orchestrierung mit KI-Agenten
- KI-Output-Bewertung und -Verfeinerung
- TDD und QS-Methoden neu erlernen für KI-Kontext

**Alte Skills (bleiben wichtig):**
- Problemlösung, Systemdenken, Qualitätsbewusstsein

**Eure Aufgabe:** Skill-Gap-Analyse für eure Teams. Was können sie bereits? Was müssen sie lernen?
-->

---
layout: center
---

# Rahmenbedingungen

<!--
**Lernziel:** Organisatorische Rahmenbedingungen für KI-Entwicklung definieren

**Rahmenbedingungen schaffen (nicht Regeln aufstellen):**

**Leitfragen:**
1. Welche Inhalte müssen "KI-ready" werden?
2. Wie vermittelt ihr "Context Engineering"?
3. Welche KI-Tool-Guidelines braucht ihr?
4. Welche Prozesse standardisiert ihr zuerst?
5. Wie messt ihr KI-unterstützte Entwicklung?

**Fokus auf:**
- Maschinenlesbare Vorgaben und Standards
- Dokumentierte Prozesse, die auf KI-Agenten zugeschnitten sind
- Zentrale Wissensquellen und Dokumentation
- Docs-as-Code Ansätze
- KI-optimierte Workflows

**Ziel:** Grundlage für euren Maßnahmenplan schaffen.
-->

---
layout: center
---

# Takeaways

<!--
**Lernziel:** Kernerkenntnisse zusammenfassen, Transformation vorbereiten

**Die 5 Kernerkenntnisse:**

1. **GenAI ist ein Verstärker** - aber nur mit dem richtigen Kontext
2. **Engineering bleibt** - wird aber breiter, nicht schneller  
3. **10x enabled** bedeutet unmögliche Probleme lösbar machen
4. **Context Engineering** wird zur Schlüsselkompetenz
5. **Strukturierte Prozesse** machen KI vorhersagbar und qualitativ

**Eure Aufgabe:** Diese Erkenntnisse in konkrete Maßnahmen übersetzen.
-->

---
layout: center
---

# Nächste Schritte

<!--
**Lernziel:** Konkrete Handlungsfelder für die nächsten 4 Wochen definieren

**Konkrete Handlungsfelder für die nächsten 4 Wochen:**

**Woche 1:** Dokumentations-Audit
- Welche Inhalte sind bereits "KI-ready"?
- Was muss aufbereitet werden?

**Woche 2:** Tool-Evaluation  
- Welche KI-Tools nutzen eure Teams bereits?
- Wo gibt es Lücken?

**Woche 3:** Skill-Assessment
- Context Engineering Fähigkeiten bewerten
- Schulungsbedarf identifizieren

**Woche 4:** Pilot-Workflow
- Einen strukturierten KI-Workflow testen
- Learnings sammeln

**Euer Maßnahmenplan kann auf diesen Erkenntnissen aufbauen.**
-->

---
layout: end
---

# Vielen Dank!

<div class="text-lg opacity-60 mt-8">
Fragen & Diskussion
</div>
