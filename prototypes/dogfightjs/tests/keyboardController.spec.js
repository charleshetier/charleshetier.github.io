app.context.isInTestMode = true;

describe('keyboardController', function(){
    "use strict";

    /**
     * Agent implementation for tests purposes
     * @constructor
     * @param {IAgentConfig} config
     * @implements {IStepAble}
     * @extends {app.object.Agent}
     * @property {ICraftCommands} commands
     */
    function TestAgent(config){
        app.object.Agent.inherit(this, config);

        this.commands.__createStateCommand('goRight');
        this.commands.__createStateCommand('goLeft');
        this.commands.__createSwitchCommand('flipRoll');
        this.commands.__createValueCommand('engine', 0.03);
    }

    TestAgent.prototype.load = function(){};
    TestAgent.prototype.update = function(){};
    TestAgent.prototype.render = function(){};

    describe('initialization', function(){
        it('should have input property', function(){
            var agent = new TestAgent(null);
            var controller = new app.object.KeyboardController(agent, null);

            expect(controller.inputs).toBeDefined();
        });

        it('should not have left key pressed', function(){
            var agent = new TestAgent(null);

            var controller = new app.object.KeyboardController(agent, null);

            expect(controller.inputs.left.pressed).toBe(false);
        });
    });

    describe('left key pressed events', function(){
        it('should have left key pressed when event raised', function(){
            var agent = new TestAgent(null);
            var controller = new app.object.KeyboardController(agent, null);
            controller.handleKeyDownEvent({keyCode: 37});
            expect(controller.inputs.left.pressed).toBe(true);
        });

        it('should have left key pressed when keyboard pressed, then released', function(){
            var agent = new TestAgent(null);
            var controller = new app.object.KeyboardController(agent, null);
            controller.handleKeyDownEvent({keyCode: 37});
            controller.handleKeyUpEvent({keyCode: 37});
            expect(controller.inputs.left.pressed).toBe(false);
        });

        it('should have agent goLeft active when left key pressed', function(){
            var agent = new TestAgent(null);
            var controller = new app.object.KeyboardController(agent, null);
            controller.handleKeyDownEvent({keyCode: 37});
            controller.update();
            expect(agent.commands.goLeft.isActive).toBe(true);
        });

        it('should be continuously invoked when key not released', function(){
            var agent = new TestAgent(null);
            var controller = new app.object.KeyboardController(agent, null);

            controller.handleKeyDownEvent({keyCode: 37}); // left

            controller.update();
            agent.update();
            controller.update();

            expect(agent.commands.goLeft.isActive).toBe(true);
        });
    });

    describe('flipRool key pressed events', function(){
        it('should not be flipped roll', function(){
            var agent = new TestAgent(null);
            var controller = new app.object.KeyboardController(agent, null);

            expect(agent.commands.flipRoll.isActive).toBe(false);
        });

        it('should be flipped roll after flipRoll key hit', function(){
            var agent = new TestAgent(null);
            var controller = new app.object.KeyboardController(agent, null);

            controller.handleKeyDownEvent({keyCode: 65});
            controller.update();
            expect(agent.commands.flipRoll.isActive).toBe(true);
        });

        it('should be flipped roll after update', function(){
            var agent = new TestAgent(null);
            var controller = new app.object.KeyboardController(agent, null);

            controller.handleKeyDownEvent({keyCode: 65});
            controller.update();
            expect(agent.commands.flipRoll.isActive).toBe(true);
            agent.update();
            expect(agent.commands.flipRoll.isActive).toBe(true);
        });
    });
});