const {repeat} = require("../../dist/node.cjs");
const assert = require("assert");

describe('repeat method', function() {
  it('check if repetion is correct', function() {
    assert.strictEqual(repeat("as",2), "asas");
    
  });    
});
