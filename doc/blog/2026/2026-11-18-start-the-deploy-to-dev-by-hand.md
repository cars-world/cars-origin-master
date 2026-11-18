<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Start the deploy to dev by hand

## Motivation

- `deploy.yaml` deploys `cars-origin-master` to `dev` on every push to `main`
- A run that fails before its first job cannot be retried in GitHub; a
  new push to `main` was the only way to deploy again

## Strategy

- Keep the push to `main` as the normal way
- Add a second trigger for the rare case, without changing what runs

## Run workflow

- `deploy.yaml` also starts on `workflow_dispatch`: **Actions → Deploy to
  dev → Run workflow** deploys the current `main`
- The run is the same as after a push; Azure accepts it, since it runs on
  `main`
- The README names the button

## Result

- `main` can be deployed to `dev` again at any time, without a commit

## Open Points

- None
