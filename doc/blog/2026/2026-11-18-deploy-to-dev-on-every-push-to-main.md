<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Deploy to dev on every push to main

## Motivation

- So far an operator built the image of `cars-origin-master` by hand with
  `az acr build` and wrote its tag into `cars-deployment`
- A merged change should reach `dev` within minutes, without a manual
  step and without a secret stored in GitHub
- `pnpm run build` failed: TypeScript 6 no longer loads the Node.js types
  by itself, so `tsc` knew neither `node:http` nor `process`

## Strategy

- Keep the pipeline in one place: the reusable workflow `build` of
  [cars-deployment](https://github.com/cars-world/cars-deployment)
- This repo only calls it on a push to `main`, with its app name
- Sign in to Azure through OIDC; the workflow needs no stored secret

## The workflow deploy.yaml

- `.github/workflows/deploy.yaml` runs on every push to `main` and calls
  `build.yaml@main` of `cars-deployment` with `app: origin-master`
- It grants `id-token: write` for the sign-in and reads the variables
  `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_SUBSCRIPTION_ID` and
  `CARS_DEPLOY_APP_ID` of the organization `cars-world`
- `build` tests the app, builds the image
  `crcars.azurecr.io/cars-origin-master:<version>-<short commit>` and writes the tag
  into the values of `dev`; Argo CD syncs `dev`
- The README says that a push deploys, and builds by hand only for a try;
  `index.jsonc` names `cars-deployment` under `uses`

## Build

- `tsconfig.json` names the Node.js types in `types`, so
  `pnpm run build` passes again
- The image is not affected: its Dockerfile runs `vite build` only

## Golden file

- The golden file of the example names the version as `<version>`; the
  test replaces the version before it compares
- A release no longer breaks the test, as it did with `0.0.2` and `0.1.0`

## Result

- A merge into `main` builds and deploys `origin-master` to `dev`
- `pnpm test` passes, and so does `pnpm run build`

## Open Points

- The first run follows the release of this change; Azure accepts the
  sign-in from `main` only
- `test` and `prod` follow by the workflow `promote` of `cars-deployment`
