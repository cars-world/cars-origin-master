<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Das Ausrollen nach dev von Hand starten

## Motivation

- `deploy.yaml` rollt `cars-origin-master` bei jedem Push auf `main` nach `dev` aus
- Ein Lauf, der vor seinem ersten Job scheitert, lässt sich in GitHub
  nicht wiederholen; nur ein neuer Push auf `main` rollte wieder aus

## Strategie

- Der Push auf `main` bleibt der normale Weg
- Ein zweiter Auslöser für den seltenen Fall, ohne zu ändern, was läuft

## Run workflow

- `deploy.yaml` startet auch bei `workflow_dispatch`: **Actions → Deploy
  to dev → Run workflow** rollt das aktuelle `main` aus
- Der Lauf ist derselbe wie nach einem Push; Azure nimmt ihn an, da er auf
  `main` läuft
- Das README nennt den Knopf

## Ergebnis

- `main` lässt sich jederzeit ohne Commit erneut nach `dev` ausrollen

## Offene Punkte

- Keine
