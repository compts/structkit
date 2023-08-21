
import {toInteger} from "../../dist/esm/node.esm";
import assert from 'assert';

const ten=10;
const zero=0;

describe('ESM: toInteger method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toInteger('10'), ten);


    });
    it('check if value empty', function () {

        assert.deepStrictEqual(toInteger(null), zero);

    });

});
