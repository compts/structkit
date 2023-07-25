
import {toArray} from "../../dist/esm/node.esm";
import assert from 'assert';

const ten=10;

describe('TS: toArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toArray(ten), [ten]);
        assert.deepStrictEqual(toArray([ten]), [ten]);

    });


});
