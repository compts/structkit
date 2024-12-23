
const {appendIsArrayExist} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


const one =1,
    two =2;


describe('CJS: appendIsArrayExist method', function () {

    it('check arraappendIsArrayExist  array append', function () {

        assert.deepStrictEqual(appendIsArrayExist([one], [two]), [
            one,
            two
        ]);

    });

    it('check appendIsArrayExist array empty', function () {

        assert.deepStrictEqual(appendIsArrayExist([one]), []);

    });

});
