
import {strUnEscape} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: strUnEscape method', function () {

    it('check Value if converter hex', function () {

        assert.strictEqual(strUnEscape('yahii&#xA0;&#x26;&#xA0;adad&#xA0;&#x2C6;ss', "hex"), "yahii & adad ^ss");

    });

    it('check Value if converter default html code', function () {

        assert.strictEqual(strUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'), "yahii & adad ^ss");

    });
    it('check expected type', async function () {
       
        expectType<string>(strUnEscape('yahii&#xA0;&#x26;&#xA0;adad&#xA0;&#x2C6;ss', "hex"));
  
    });
});
