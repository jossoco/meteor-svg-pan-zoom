if (Meteor.isClient) {
    SvgPanZoom = window.svgPanZoom;
} else {
    SvgPanZoom = Npm.require('svg-pan-zoom');
}
