const {count} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const seven =7;
const one =1;
const zero =0;

describe('CJS: count method', function () {

    it('check if value exist', function () {


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

});


