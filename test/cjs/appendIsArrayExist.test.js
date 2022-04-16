
const {appendIsArrayExist} = require("../../node.cjs");
const assert = require("assert");


const one =1,
    two =2;


describe('CJS: arraySum method', function () {

    it('check arraySum array sum', function () {

        assert.deepStrictEqual(appendIsArrayExist([one], [two]), [
            one,
            two
        ]);

    });

});
