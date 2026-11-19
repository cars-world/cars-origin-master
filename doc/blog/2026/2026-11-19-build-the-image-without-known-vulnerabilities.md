<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Build the image without known vulnerabilities

## Motivation

- A Trivy scan of the image `cars-origin-master` found 10 high vulnerabilities with a
  fix; the packages of Alpine were clean
- All ten lay in packages of npm, which `node:22-alpine` brings along:
  `pacote`, `sigstore`, `brace-expansion`, `picomatch`, `ip-address`

## Strategy

- The master runs with `node` alone; tools it never calls do not belong
  into the image
- Pick up fixes of Alpine published after the base image while building

## Dockerfile

- The runtime stage removes npm, npx, corepack and yarn of the base image
- `apk upgrade --no-cache` runs before the app is copied
- The build stage keeps corepack and pnpm; the image still starts with
  `node` as the user 1000

## Result

- The image builds and is smaller; the scan of the next image shows the
  findings left

## Open Points

- New vulnerabilities appear over time; the image has to be rebuilt to
  pick up their fixes
