module.exports = {
  name: 'angular-app',
  filename: "remoteEntry.js",
  exposes: {
    './Module': 'packages/angular-app/src/bootstrap.ts',
  },
  additionalShared: [
    ["@angular/core", {singleton: true}],
    ["@angular/common", {singleton: true}],
    ["@angular/router", {singleton: true}],
  ]
};
