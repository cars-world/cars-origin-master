# Changelog

## Unreleased

- `deploy.yaml` can be started by hand with Run workflow, to deploy
  `main` again
- A push to `main` builds the image and deploys it to `dev`: the
  workflow `deploy.yaml` calls the workflow `build` of `cars-deployment`
- `pnpm run build` passes: `tsconfig.json` names the Node.js types,
  which TypeScript 6 no longer loads by itself
- The golden file of the example names the version as `<version>`, so a
  release no longer breaks the test
- Move the repository to the GitHub organization `cars-world` and
  rename the package to `@cars-world/cars-origin-master`
- Update the golden of the greeting to the version `0.0.2`
- Show the version in the greeting
- Tag an image built between two releases with the short commit as well
- Build the image into the registry `crcars`, tagged with the version
- Name the stages `dev`, `test` and `prod` in the README
- Add the hello world after the setup of `cars-master`: the HTTP server with `GET /`, `GET /api/hello` and `GET /health`, `start()` and the Dockerfile
