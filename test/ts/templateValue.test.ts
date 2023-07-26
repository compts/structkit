
import {templateValue} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: templateValue method', function () {

    it('check if Template functionality', function () {

        assert.strictEqual(templateValue("<!- test !>", {"test": 11}), "11");

    });
    it('check expected type', async function () {
       
        expectType<string>(templateValue("<!- test !>", {"test": 11}));
  
    });

});
