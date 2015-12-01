Package.describe({
    name: 'jossoco:svg-pan-zoom',
    summary: 'Meteor package that wraps the svg-pan-zoom library: https://github.com/ariutta/svg-pan-zoom',
    version: '1.0.0',
    git: 'https://github.com/jossoco/meteor-svg-pan-zoom.git'
});

Npm.depends({
    'svg-pan-zoom': '3.2.5'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.export('svgPanZoom');
    api.addFiles('.npm/package/node_modules/svg-pan-zoom/dist/svg-pan-zoom.js', ['client']);
    api.addFiles('jossoco:svg-pan-zoom.js');
});
