import {regexCountGroup} from "../../dist/esm/node.esm";
import assert from 'assert';

const one=1;

describe('ESM: regexCountGroup method', function () {

    it('check if value count is one', function () {

        assert.deepStrictEqual(regexCountGroup('/(abs|scs)@0@@1@/'), one);

    });


});
