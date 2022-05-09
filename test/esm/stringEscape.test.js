
import {stringEscape} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: stringEscape method', function () {

    it('check Value if converter hex', function () {

        assert.strictEqual(stringEscape("yahii & adad ^ss", "hex"), 'yahii&#xA0;&#x26;&#xA0;adad&#xA0;&#x2C6;ss');

    });

    it('check Value if converter default html code', function () {

        assert.strictEqual(stringEscape("yahii & adad ^ss"), 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss');

    });

});
