const {lt} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two =2;

describe('CJS: less than method', function () {

    it('check if less than value is true', function () {

        assert.strictEqual(lt(one, two), true);

    });

    it('check if not less than value is false', function () {

        assert.strictEqual(lt(two, one), false);

    });

});
