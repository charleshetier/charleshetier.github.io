app.object.EmptyPhysic = (function (app) {

    function EmptyPhysic() {

        this.load = load;
        this.update = update;
        this.render = render;

        function load() {
            /// <returns type="Q.Promise" />

            var deferal = Q.defer();
            deferal.resolve();
            return deferal.promise;
        }

        function update() { }

        function render() { }
    }

    return EmptyPhysic;

})(window.app);