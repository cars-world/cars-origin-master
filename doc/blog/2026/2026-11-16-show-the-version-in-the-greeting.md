<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Show the version in the greeting

## Motivation

- cars-origin-master is the master of the origin side, where catalogs
  are captured originally; so far it answers a greeting
- When one image replaces another, the greeting should show which one
  answers, without looking at the container
- The registry and the stages had new names: one registry `crcars` for
  all stages, and the stages `dev`, `test` and `prod`

## Strategy

- Put the version of the package into the greeting
- Leave the version itself to the release, never set it by hand
- Tag an image built between two releases with the short commit too

## Greeting

- `hello()` answers `Hello from cars-origin-master <version>`, read from
  `carsOriginMasterVersion`; `GET /` and `GET /api/hello` show it
- The tests and the golden file follow, coverage stays at 100 percent

## Image and stages

- The README builds the image into `crcars`, tagged with the version
- An image built between two releases gets the tag
  `<version>-<short commit>`, e.g. `0.0.1-4db1903`, so each tag names
  exactly one build
- The README names the stages `dev`, `test` and `prod`, and says the
  master also runs behind a proxy that strips a path prefix

## Result

- `cars-origin-master:0.0.1-4db1903` answers
  `Hello from cars-origin-master 0.0.1` and lies in `crcars` next to
  `0.0.1`

## Open Points

- `pnpm run build` reports missing Node.js types in `tsc`; the image
  builds with Vite only and is not affected
- The master holds no data yet
