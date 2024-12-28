import {equal} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;

describe('TS: equal method', function () {

    it('check if equal value is true', function () {

        assert.strictEqual(equal("as", "as"), true);

    });

    it('check if not equal value is false', function () {

        assert.strictEqual(equal("as", "as1"), false);

    });

    it('check if string and false is false', function () {

        assert.strictEqual(equal("as", one), false);

    });

    it('check expected type', function () {
       
        expectType<boolean>(equal("as", "as"));
  
      });
});
