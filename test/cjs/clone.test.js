const {clone} = require("../../src/node.cjs");
const assert = require("assert");


const one =1;


describe('CJS: clone method', function () {

    it('check clone data', function () {

        assert.deepStrictEqual(clone([{"Asd": one}]), [{"Asd": one}]);

    });

});
