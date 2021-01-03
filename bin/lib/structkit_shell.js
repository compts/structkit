const structkit = require("../../main.cjs");
const localCWD =process.cwd();
const localARGV =process.argv.splice(2).join(" "); 

var func = new Function("_ct","return "+localARGV);
console.log(func.call(this,structkit));