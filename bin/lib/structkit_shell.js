const structkit = require("../../node.cjs");

const localARGV =process.argv.splice(2).join(" ");

const func = new Function("_stk", "return "+localARGV);

console.log(func.call(this, structkit));
