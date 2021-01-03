
import {repeat} from "../../dist/node.es";
import assert from 'assert';

describe('repeat method', function() {
  it('check if repetion is correct', function() {
    assert.strictEqual(repeat("as",2), "asas");
    
  });
  
  
});
