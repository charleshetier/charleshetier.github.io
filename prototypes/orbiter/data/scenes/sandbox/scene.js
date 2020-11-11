
var _reached = false;

/**
 * @this IContext
 */
//function step() {
//
//    if(this.ship.position.x > 3 && !_reached) {
//        _reached = true;
//        this.api.say('you reached x > 3!');
//
//        window.api = this.api;
//        this.api.target.set({position: {x: 3, y: 0}});
//    }
//}

function initialize() {
    this.api.target.set({planet: this.planets[0]});
}

function dispose() {

}

///**
// * @this IContext
// */
//function entering(item) {
//    //this.api.say("Well done!");
//    //this.api.target.set({planet: this.planets[1]});
//}
//
///**
// * @this IContext
// */
//function leaving(item) {
//    //this.api.say("Oh, why don't you stay?.....");
//}