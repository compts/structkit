import {stringSubs} from "../../dist/esm/node.esm";
import assert from 'assert';

const two=2;
const one=1;

describe('ESM: stringSubs method', function () {

    it('get substr from 1', function () {

        assert.deepStrictEqual(stringSubs("fish", one), 'ish');

    });

    it('get substr from 1 to 2', function () {

        assert.deepStrictEqual(stringSubs("fish", one, two), 'i');

    });


});

