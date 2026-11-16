<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Die Version im Gruß zeigen

## Motivation

- cars-origin-master ist der Master der Seite origin, in der Kataloge
  ursprünglich erfasst werden; bisher antwortet er mit einem Gruß
- Wenn ein Image ein anderes ersetzt, soll der Gruß zeigen, welches
  antwortet, ohne in den Container zu schauen
- Die Registry und die Stufen hatten neue Namen: eine Registry `crcars`
  für alle Stufen, und die Stufen `dev`, `test` und `prod`

## Strategie

- Die Version des Pakets in den Gruß aufnehmen
- Die Version selbst dem Release überlassen, nie von Hand setzen
- Ein Image, das zwischen zwei Releases gebaut wird, auch mit dem kurzen
  Commit taggen

## Gruß

- `hello()` antwortet `Hello from cars-origin-master <version>`, gelesen
  aus `carsOriginMasterVersion`; `GET /` und `GET /api/hello` zeigen ihn
- Die Tests und die Golden-Datei folgen, die Abdeckung bleibt bei 100
  Prozent

## Image und Stufen

- Die README baut das Image in `crcars`, getaggt mit der Version
- Ein Image, das zwischen zwei Releases gebaut wird, bekommt den Tag
  `<version>-<kurzer Commit>`, etwa `0.0.1-4db1903`, so nennt jeder Tag
  genau einen Build
- Die README nennt die Stufen `dev`, `test` und `prod` und sagt, dass der
  Master auch hinter einem Proxy läuft, der ein Pfad-Präfix entfernt

## Ergebnis

- `cars-origin-master:0.0.1-4db1903` antwortet
  `Hello from cars-origin-master 0.0.1` und liegt in `crcars` neben
  `0.0.1`

## Offene Punkte

- `pnpm run build` meldet fehlende Node.js-Typen in `tsc`; das Image wird
  nur mit Vite gebaut und ist nicht betroffen
- Der Master hält noch keine Daten
