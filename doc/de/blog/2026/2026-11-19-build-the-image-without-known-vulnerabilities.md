<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Das Image ohne bekannte Schwachstellen bauen

## Motivation

- Ein Trivy-Scan des Images `cars-origin-master` fand 10 hohe Schwachstellen mit Fix;
  die Pakete von Alpine waren sauber
- Alle zehn lagen in Paketen von npm, das `node:22-alpine` mitbringt:
  `pacote`, `sigstore`, `brace-expansion`, `picomatch`, `ip-address`

## Strategie

- Der Master läuft allein mit `node`; Werkzeuge, die er nie aufruft,
  gehören nicht ins Image
- Beim Bauen die Fixes von Alpine übernehmen, die nach dem Basis-Image
  erschienen sind

## Dockerfile

- Die Laufzeit-Stufe entfernt npm, npx, corepack und yarn des
  Basis-Images
- `apk upgrade --no-cache` läuft, bevor die App kopiert wird
- Die Build-Stufe behält corepack und pnpm; das Image startet weiter mit
  `node` als Nutzer 1000

## Ergebnis

- Das Image baut und ist kleiner; der Scan des nächsten Images zeigt die
  übrigen Befunde

## Offene Punkte

- Mit der Zeit kommen neue Schwachstellen hinzu; erst ein neu gebautes
  Image übernimmt ihre Fixes
