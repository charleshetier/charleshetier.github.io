app.context.isInTestMode = true;

describe('Agent', function(){
    "use strict";

    /**
     *
     * @param {IAgentConfig|{}} config
     * @implements {IStepAble}
     * @extends {app.object.Agent}
     * @constructor
     */
    function TestAgent(config){
        app.object.Agent.inherit(this, config);
    }

    var loadDeferral = null;
    var loadCalled = false;
    var updateCalled = false;
    var renderCalled = false;
    TestAgent.prototype.load = function(){
        loadCalled = true;
        loadDeferral = Q.defer();
        return loadDeferral.promise;
    };
    TestAgent.prototype.update = function(){ updateCalled = true;};
    TestAgent.prototype.render = function(){renderCalled = true;};

    beforeEach(function() {
        loadCalled = false;
        updateCalled = false;
        renderCalled = false;
    });

    describe('initialization', function(){
        it('should recover the given position config', function () {
            var config = {x: 5, y: 8};
            var target = new TestAgent(config);
            var result = target.position;
            expect(result).toEqual({x: 5, y: 8});
        });

        it('should recover the given id config', function () {
            var config = {id: 'test'};
            var target = new TestAgent(config);
            var result = target.id;
            expect(result).toEqual('test');
        });
    });

    describe('interception step handlers', function(){
        var agent = null;
        var deferral = null;
        var deferral2 = null;

        /**
         * The host of the handler
         * @type {{handler: function}}
         * @type {{handler2: function}}
         */
        var foo = {handler: null, handler2: null};

        beforeEach(function(){
            agent = new TestAgent({canIntercept: true});
            deferral = Q.defer();
            foo.handler = function(){ return deferral.promise; };
            spyOn(foo, 'handler');

            deferral2 = Q.defer();
            foo.handler2 = function(){ return deferral2.promise; };
            spyOn(foo, 'handler2');
        });

        it('tracks load call', function() {
            agent.load();
            expect(loadCalled).toBe(true);
        });

        it('tracks update call', function() {
            agent.update();
            expect(updateCalled).toBe(true);
        });

        it('tracks render call', function() {
            agent.render();
            expect(renderCalled).toBe(true);
        });

        it('tracks loading handler call', function(){
            agent.subscribeLoading(foo.handler);
            agent.load();
            expect(foo.handler).toHaveBeenCalled();
            expect(foo.handler.calls.count()).toBe(1);
        });

        it('tracks loading handler call', function(){
            agent.subscribeLoading(foo.handler);
            agent.load();
            expect(foo.handler).toHaveBeenCalled();
            expect(foo.handler.calls.count()).toBe(1);
        });

        it('tracks loaded handler call once loading has finished', function(done){
            agent.subscribeLoading(foo.handler);
            agent.subscribeLoaded(foo.handler2);
            agent.load();
            expect(foo.handler).toHaveBeenCalled();
            expect(foo.handler.calls.count()).toBe(1);
            expect(foo.handler2).not.toHaveBeenCalled();

            deferral.resolve(undefined);

            setTimeout(function(){
                expect(foo.handler2).toHaveBeenCalled();
                expect(foo.handler2.calls.count()).toBe(1);
                done();
            }, 10);
        });

        it('tracks updating handler call', function(){
            agent.subscribeUpdating(foo.handler);
            agent.update();
            expect(foo.handler).toHaveBeenCalled();
            expect(foo.handler.calls.count()).toBe(1);
        });

        it('tracks updated handler call', function(){
            agent.subscribeUpdated(foo.handler);
            agent.update();
            expect(foo.handler).toHaveBeenCalled();
            expect(foo.handler.calls.count()).toBe(1);
        });

        it('tracks rendering handler call', function(){
            agent.subscribeRendering(foo.handler);
            agent.render();
            expect(foo.handler).toHaveBeenCalled();
            expect(foo.handler.calls.count()).toBe(1);
        });

        it('tracks rendered handler call', function(){
            agent.subscribeRendered(foo.handler);
            agent.render();
            expect(foo.handler).toHaveBeenCalled();
            expect(foo.handler.calls.count()).toBe(1);
        });
    });

    describe('commands', function(){
        it('should contain commands', function(){
            var agent = new TestAgent({});
            expect(agent.commands).toBeDefined();
        });

        describe('flag commands', function(){
            it('should go right only when invoked', function(){
                var agent = new TestAgent({canIntercept:true});
                agent.commands.__createStateCommand('stateTest');
                expect(agent.commands.stateTest.isActive).toBe(false);
                agent.commands.stateTest();
                expect(agent.commands.stateTest.isActive).toBe(true);
                agent.update();
                expect(agent.commands.stateTest.isActive).toBe(false);
            });
        });

        describe('value commands', function(){
            it('should have engine increased', function(){
                var agent = new TestAgent(null);
                agent.commands.__createValueCommand('valueTest', 0.03);
                agent.commands.valueTest(0);
                agent.commands.increaseValueTest(0.3);
                expect(agent.commands.valueTest.value).toBe(0.3);
            });

            it('should have engine decreased', function(){
                var agent = new TestAgent(null);
                agent.commands.__createValueCommand('valueTest', 0.03);
                agent.commands.valueTest(0.5);
                agent.commands.decreaseValueTest(0.3);
                expect(agent.commands.valueTest.value).toBe(0.2);
            });

            it('should not increase to more than 1', function(){
                var agent = new TestAgent(null);
                agent.commands.__createValueCommand('valueTest', 0.03);
                agent.commands.valueTest(0.5);
                agent.commands.increaseValueTest(1);
                expect(agent.commands.valueTest.value).toBe(1);
            });

            it('should not decrease to less than 0', function(){
                var agent = new TestAgent(null);
                agent.commands.__createValueCommand('valueTest', 0.03);
                agent.commands.valueTest(0.5);
                agent.commands.decreaseValueTest(1);
                expect(agent.commands.valueTest.value).toBe(0);
            });
        });

        describe('state commands', function(){
            it('should be flipped', function(){
                /** @property {IFlagCommand} switchTest */
                var agent = new TestAgent({canIntercept:true});
                agent.commands.__createSwitchCommand('switchTest');

                expect(agent.commands.switchTest.isActive).toBe(false);
                agent.commands.switchTest();
                expect(agent.commands.switchTest.isActive).toBe(true);
                agent.update();
                expect(agent.commands.switchTest.isActive).toBe(true);
                agent.update();
                expect(agent.commands.switchTest.isActive).toBe(true);
                agent.commands.switchTest();
                agent.update();
                expect(agent.commands.switchTest.isActive).toBe(false);
            });

            it('should stay flipped', function(){
                /** @property {IFlagCommand} switchTest */
                var agent = new TestAgent({canIntercept:true});
                agent.commands.__createSwitchCommand('switchTest');

                expect(agent.commands.switchTest.isActive).toBe(false);
                agent.commands.switchTest();
                expect(agent.commands.switchTest.isActive).toBe(true);
                agent.update();
                agent.commands.switchTest();
                expect(agent.commands.switchTest.isActive).toBe(true);
            });
        });
    });
});