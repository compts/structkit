import {inc} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';


const three =3;
const two =2;
const one =1;

describe('TS: inc method', function () {


    it('return two', function () {

        assert.strictEqual(
            inc(one),
            two
        );

    });
    it('return three', function () {

        assert.strictEqual(
            inc(one, two),
            three
        );

    });


    it('check expected type', function () {
       
        expectType<number>(inc(one));
  
      });
});


