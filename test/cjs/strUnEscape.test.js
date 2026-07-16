
const {strUnEscape} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: strUnEscape method', function () {

    it('check Value if converter hex', function () {

        assert.strictEqual(strUnEscape('yahii&#xA0;&#x26;&#xA0;adad&#xA0;&#x2C6;ss', "hex"), "yahii & adad ^ss");

    });

    it('check Value if converter default html code', function () {

        assert.strictEqual(strUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'), "yahii & adad ^ss");

    });
    it('check Value if converter default html decimal code', function () {

        assert.strictEqual(strUnEscape('yahii&#160;&#38;&#160;adad&#160;&#710;ss', "decimal"), "yahii & adad ^ss");

    });

});
