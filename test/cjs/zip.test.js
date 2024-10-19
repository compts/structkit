const {zip} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;

describe('CJS: zip method', function () {

    it('check if zip asc number', function () {

        assert.deepStrictEqual(zip([one], [one], [one]), [
            [
                one,
                one,
                one
            ]
        ]);

    });

});
