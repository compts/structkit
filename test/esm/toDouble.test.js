
import {toDouble} from "../../dist/esm/node.esm";
import assert from 'assert';

const ten=10;
const zero=0;

describe('ESM: toDouble method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toDouble('10'), ten);


    });
    it('check if value empty', function () {

        assert.deepStrictEqual(toDouble(null), zero);

    });

});
