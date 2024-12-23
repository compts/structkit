import {unique} from "../../dist/esm/node.esm";
const assert = require("assert");

const one =1;
const ten=10;

describe('ESM: unique method', function () {

    it('check if unique asc number', function () {

        assert.deepStrictEqual(unique([
            ten,
            ten,
            one
        ]), [
            ten,
            one
        ]);

    });

    it('check if unique empty', function () {

        assert.deepStrictEqual(unique({}), []);

    });

});
