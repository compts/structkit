const {reduce} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1,
    three=3,
    two =2,
    zero =0;


describe('CJS: reduce method', function () {

    it('check reduce array sum', function () {

        assert.deepStrictEqual(reduce(zero, [
            one,
            two
        ], function (total, value) {

            return total+value;

        }), three);

    });


});
