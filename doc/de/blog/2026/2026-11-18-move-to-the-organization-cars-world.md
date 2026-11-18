<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# In die Organisation cars-world umziehen

## Motivation

- `cars-origin-master` liegt jetzt in der GitHub-Organisation
  [cars-world](https://github.com/cars-world), die die Repos der
  cars-Anwendung enthält
- GitHub leitet die alte Adresse `rljson/cars-origin-master` weiter, aber nur, solange
  kein neues Repo diesen Namen bekommt; Links und Installationen sollen
  nicht davon abhängen
- Der Paketname soll sagen, wo das Paket liegt

## Strategie

- Jeden Namen ändern, der auf die Organisation zeigt, sonst nichts
- Das Paket wird zu `@cars-world/cars-origin-master`
- Die Rljson-Bibliotheken, die es nutzt, behalten ihren Scope `@rljson`
- Die Lizenzköpfe bleiben, wie sie sind
- Keine Änderung im Verhalten: derselbe Code, dieselben Tests

## Namen

- `package.json`: `name`, `homepage`, `bugs` und `repository` nennen
  `cars-world`
- `index.jsonc` trägt den neuen Paketnamen
- Das README, auf Englisch und Deutsch: Titel, CI-Badge, die
  Installationszeile
  `pnpm add git+ssh://git@github.com/cars-world/cars-origin-master.git` und die Importe
- Der Kommentar der Versionskonstante nennt `@cars-world/cars-origin-master`

## Golden-Datei

- Das letzte Release setzte die Version auf `0.0.2`, die Golden-Datei des
  Beispiels zeigte aber noch `0.0.1`, daher schlug `pnpm test` auf `main`
  fehl
- `pnpm updateGoldens` schrieb den Gruß mit `0.0.2`; der Diff ist diese
  Version und nichts sonst

## Ergebnis

- Das Paket heißt `@cars-world/cars-origin-master`; alle Links führen ohne Umweg zu
  `cars-world`
- `pnpm test` läuft mit 100 Prozent Abdeckung durch

## Offene Punkte

- Wer das Paket importiert, wechselt mit dem nächsten Release auf
  `@cars-world/cars-origin-master`
- Das Image behält seinen Namen `cars-origin-master` in der Registry `crcars`
