(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>Heptonstall Weather Webcam</h1>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
