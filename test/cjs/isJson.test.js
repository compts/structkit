
const {isJson} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: isJson method', function () {

    it('check if object is valid json', function () {

        assert.strictEqual(isJson({"a": 1}), true);

    });

    it('check if object has function', function () {

        assert.strictEqual(isJson({"a": () => {
            //

        }}), false);

    });


});
