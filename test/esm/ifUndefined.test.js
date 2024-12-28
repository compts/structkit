
import {ifUndefined} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;
const two = 2;

describe('ESM: ifUndefined method', function () {

    it('check if json key does exist', function () {

        assert.deepStrictEqual(ifUndefined({"as": 1}, "as", two), one);

    });

    it('check if json key does exist no value2', function () {

        assert.deepStrictEqual(ifUndefined({"as": 1}, "as"), {"as": 1});

    });

    it('check if json key does not exist value1', function () {

        assert.deepStrictEqual(ifUndefined({"as": 1}, "ask", two), two);

    });

});
