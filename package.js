Package.describe({
  name: 'ostrio:analytics',
  version: '1.0.3',
  summary: 'Visitor\'s analytics tracking code for ostr.io service',
  git: 'https://github.com/VeliovGroup/ostrio-analytics',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('./lib/analytics.js', 'client');
  api.export('OstrioTrackerClass', 'client');
});