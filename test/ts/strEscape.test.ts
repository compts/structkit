
import {strEscape} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: strEscape method', function () {

    it('check Value if converter hex', function () {

        assert.strictEqual(strEscape("yahii & adad ^ss", "hex"), 'yahii&#xA0;&#x26;&#xA0;adad&#xA0;&#x2C6;ss');

    });

    it('check Value if converter default html code', function () {

        assert.strictEqual(strEscape("yahii & adad ^ss"), 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss');

    });

    it('check expected type', async function () {
       
        expectType<string>(strEscape("yahii & adad ^ss"));
  
    });

});
