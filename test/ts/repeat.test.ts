
import {repeat} from "../../dist/esm/node.esm";
import assert from 'assert';

import {expectType} from 'tsd';

const two=2;

describe('TS: repeat method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(repeat("as", two), "asas");

    });
    it('check expected type', function () {
       
        expectType<any>(repeat("as", two));
    });

});
