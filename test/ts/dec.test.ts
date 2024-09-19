import {dec} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const two =2;
const one =1;
const zero =0;

describe('TS: dec method', function () {


    it('return two', function () {

        assert.deepStrictEqual(
            dec(one),
            zero
        );

    });
    it('return three', function () {

        assert.deepStrictEqual(
            dec(one, two),
            -one
        );

    });
    it('if argument is string type return zero', function () {

        assert.strictEqual(
            dec("1"),
            zero
        );

    });
    it('check expected type', function () {
       
        expectType<number>(dec(one));
  
      });

});


