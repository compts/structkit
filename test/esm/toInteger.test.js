
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
    it('check if value is not a number', function () {

        assert.deepStrictEqual(toInteger('test'), zero);

    });
    it('check if value is a number', function () {

        assert.deepStrictEqual(toInteger(ten), ten);

    });
    it('check if value is a number with string', function () {

        assert.deepStrictEqual(toInteger('10.5'), ten);

    });

});
