
const {strUnEscape} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: strUnEscape method', function () {

    it('check Value if converter hex', function () {

        assert.strictEqual(strUnEscape('yahii&#xA0;&#x26;&#xA0;adad&#xA0;&#x2C6;ss', "hex"), "yahii & adad ^ss");

    });

    it('check Value if converter default html code', function () {

        assert.strictEqual(strUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'), "yahii & adad ^ss");

    });

});
