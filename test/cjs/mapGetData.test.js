
const {mapGetData} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


const one =1;


describe('CJS: mapGetData method', function () {

    it('check mapGetData array', function () {

        assert.deepStrictEqual(mapGetData([{"Asd": one}], "Asd"), [one]);

    });

});
