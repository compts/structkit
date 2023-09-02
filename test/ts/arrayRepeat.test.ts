import {arrayRepeat} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
const two=2;

describe('TS: arrayRepeat method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(arrayRepeat(
            "as",
            two
        ), [
            "as",
            "as"
        ]);

    });

    it('check expected type', function () {
       
        expectType<any[]>(arrayRepeat(
            "as",
            two
        ));
  
      });
});
