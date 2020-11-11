/**
 * @property {Function} step
 * @property {Function} initialize
 * @property {Function} dispose
 * @property {Function} targetEntering
 * @property {Function} targetLeaving
 * @property {Function} crash
 */
export default class Script {

    /**
     *
     * @param {String} script
     */
    constructor(script) {

        let proxyScript =
            `
            (function() {

                // == level custom script
                ${script}
                // == end of level custom script

                ${statementFor('step')}
                ${statementFor('initialize')}
                ${statementFor('dispose')}
                ${statementFor('enteringPlanet')}
                ${statementFor('leavingPlanet')}
                ${statementFor('enteringCheckPoint')}
                ${statementFor('leavingCheckPoint')}
                ${statementFor('enteringSatelliteCom')}
                ${statementFor('leavingSatelliteCom')}
                ${statementFor('enteringSatelliteDock')}
                ${statementFor('leavingSatelliteDock')}
                ${statementFor('crash')}
            })`;


        let proxyType = eval(proxyScript);
        var proxy = new proxyType();
        return proxy;
    }
}

function statementFor(member) {
    return `
    try {
        if(typeof ${member} === 'function') {
            this.${member} = ${member};
            console.debug('- "${member}" member: Yes');
        }
        else {
            this.${member} = function() {};
            console.debug('- "${member}" member: No');
        }
    } catch(e) {
        this.${member} = function() {};
        console.debug('- "${member}" member: No');
}`;
}