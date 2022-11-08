module.exports = {
  name: 'angular-app',
  filename: "remoteEntry.js",
  exposes: {
    './Module': 'packages/angular-app/src/bootstrap.ts',
  },
};
