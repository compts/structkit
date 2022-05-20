import {count} from "../../dist/esm/node.esm";
import assert from 'assert';

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


});
