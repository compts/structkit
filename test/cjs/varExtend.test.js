const {varExtend} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


describe('CJS: varExtend method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(varExtend({"s1": 1}, {"s1": 2}), {"s1": 2});


    });


});


