Package.describe({
  summary: "Insert multiple documents to mongo collection with one db call.",
  version: "1.1.15",
  name: "hiveteams:batch-insert",
  git: "https://github.com/hiveteams/batch-insert"
});

Npm.strip({
  mongodb: ["test/"]
});

Package.onUse( function( api ) {
  // Only used until https://github.com/mikowals/batch-insert/pull/36 is merged (if ever)
  // Move back to mikowals:batch-insert if that's the case.
  api.versionsFrom('1.7');
  api.use('npm-mongo', 'server');
  api.use(['mongo', 'ddp','ejson','underscore', 'check']);
  api.use('insecure', {weak: true});
  api.imply(['mongo', 'ddp']);
  api.addFiles('batch-insert-server.js','server');
  api.addFiles('batch-insert-common.js');
});

