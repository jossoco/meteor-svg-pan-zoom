Package.describe({
    name: 'jossoco:meteor-svg-pan-zoom',
    summary: 'Meteor package that wraps the svg-pan-zoom library. See https://github.com/ariutta/svg-pan-zoom for more details.',
    version: '1.0.0',
    git: 'https://github.com/jossoco/meteor-svg-pan-zoom.git'
});

Npm.depends({
    'svg-pan-zoom': '3.2.5'
});

Package.onUser(function(api) {
    api.versionsFrom('1.0');
    api.export('SvgPanZoom');
    api.addFiles('.npm/package/node_modules/svg-pan-zoom/dist/svg-pan-zoom.js', ['client']);
    api.addFiles('josocco:svg-pan-zoom.js');
});
