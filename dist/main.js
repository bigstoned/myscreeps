var pathsource = require('path.source');
var cstate = require('c.state');
//var spath = require('path.source');



module.exports.loop = function () {
console.log(Game.cpu.getUsed());
for (var name in Game.creeps) {
    creep = Game.creeps[name];
    cstate(creep);
}

//pathsource.run();

}
    
