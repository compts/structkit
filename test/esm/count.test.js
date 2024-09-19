import {count} from "../../dist/esm/node.esm";
import assert from 'assert';

const seven = 7;
const zero =0;
const one =1;

describe('ESM: count method', function () {

    it('check count', function () {

        assert.deepStrictEqual(count({"s1": 1}), one);
        assert.deepStrictEqual(count([one]), one);

    });
    it('check JSON value if empty', function () {

        assert.deepStrictEqual(count([]), zero);
        assert.deepStrictEqual(count({}, true), zero);

    });


    it('check string length', function () {

        assert.deepStrictEqual(count("asasasd"), seven);

    });

    it('check empty is zero', function () {

        assert.deepStrictEqual(count(), zero);

    });

});
