# Changelog

## Unreleased

- Move the repository to the GitHub organization `cars-world` and
  rename the package to `@cars-world/cars-origin-master`
- Update the golden of the greeting to the version `0.0.2`
- Show the version in the greeting
- Tag an image built between two releases with the short commit as well
- Build the image into the registry `crcars`, tagged with the version
- Name the stages `dev`, `test` and `prod` in the README
- Add the hello world after the setup of `cars-master`: the HTTP server with `GET /`, `GET /api/hello` and `GET /health`, `start()` and the Dockerfile
