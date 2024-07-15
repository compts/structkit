
import {arraySum} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1,
    three=3,
    two =2;


describe('TS: arraySum method', function () {

    it('check arraySum array sum', function () {

        assert.deepStrictEqual(arraySum([
            one,
            two
        ]), three);

    });
    it('check expected type', function () {
       
        expectType<number>(arraySum([
            one,
            two
        ]));
  
      });
});
