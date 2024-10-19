const {pipe, add} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two = 2;
const eleven = 11;
const total = 122;

describe('CJS: pipe method', function () {

    it('check if pipe function', function () {

        assert.strictEqual(pipe(Math.pow, add(one))(eleven, two), total);

    });

});
