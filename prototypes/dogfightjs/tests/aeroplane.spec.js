describe('Aeroplane', function () {
    "use strict";

    it('should be defined as a function in module', function () {
        var result = app.object.Aeroplane;

        expect(result).toBeDefined();
        expect(_.isFunction(result)).toBeTruthy();
    });

    it('should be instantiated properly', function () {
        var result = new app.object.Aeroplane({});
        expect(result).toBeDefined();
    });

    it('should recover the given position config', function () {
        var config = {x: 5, y: 8};
        var target = new app.object.Aeroplane(config);
        var result = target.position;
        expect(result).toEqual({x: 5, y: 8});
    });

    it('should recover the given id config', function () {
        var config = {id: 'test'};
        var target = new app.object.Aeroplane(config);
        var result = target.id;
        expect(result).toEqual('test');
    });


});