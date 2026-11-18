<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Move to the organization cars-world

## Motivation

- `cars-origin-master` now lives in the GitHub organization
  [cars-world](https://github.com/cars-world), which holds the repos of
  the cars application
- GitHub forwards the old address `rljson/cars-origin-master`, but only as long as no
  new repo takes that name; links and installs should not depend on it
- The package name should say where the package lives

## Strategy

- Change every name that points to the organization, nothing else
- The package becomes `@cars-world/cars-origin-master`
- The Rljson libraries it uses keep their scope `@rljson`
- The license headers stay as they are
- No change in behavior: the same code, the same tests

## Names

- `package.json`: `name`, `homepage`, `bugs` and `repository` name
  `cars-world`
- `index.jsonc` carries the new package name
- The README, in English and German: title, CI badge, the install line
  `pnpm add git+ssh://git@github.com/cars-world/cars-origin-master.git` and the imports
- The comment of the version constant names `@cars-world/cars-origin-master`

## Golden file

- The release before set the version to `0.0.2`, but the golden file of
  the example still showed `0.0.1`, so `pnpm test` failed on `main`
- `pnpm updateGoldens` wrote the greeting with `0.0.2`; the diff is this
  version and nothing else

## Result

- The package is `@cars-world/cars-origin-master`; all links lead to `cars-world`
  without a detour
- `pnpm test` passes with 100 percent coverage

## Open Points

- Whoever imports the package switches to `@cars-world/cars-origin-master` with the
  next release
- The image keeps its name `cars-origin-master` in the registry `crcars`
