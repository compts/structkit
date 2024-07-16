
const {isExact, lt}= require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");
const one =1;

describe('CJS: isExact method', function () {

    it('check if json key exist', function () {

        assert.strictEqual(isExact({"test2": 11}, {"test": 11,
            "test2": 11}, true), true);

    });

    it('check if repetion is correct', function () {

        assert.strictEqual(isExact({"a:b": "b1"}, {"a": {"b": "b1"}}), true);

    });

    it('check if value is less', function () {

        assert.deepStrictEqual(isExact(

            {"d": 2},

            {"d": lt(one)}
        ), true);

    });

});
