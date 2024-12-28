const {unique} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const ten=10;

describe('CJS: unique method', function () {

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
