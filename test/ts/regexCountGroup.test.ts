import {regexCountGroup} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one=1;

describe('TS: regexCountGroup method', function () {

    it('check if value count is one', function () {

        assert.deepStrictEqual(regexCountGroup('/(abs|scs)@0@@1@/'), one);

    });
    it('check expected type', async function () {
       
        expectType<number>(regexCountGroup('/(abs|scs)@0@@1@/'));
  
    });

});
