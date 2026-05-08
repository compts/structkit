import {arrayRepeat} from "../../dist/esm/node.esm.mjs";
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

        it('check if repetion is correct even null', function () {
    
            assert.deepStrictEqual(arrayRepeat(
                null,
                two
            ), [
                null,
                null
            ]);
    
        });
    
        it('check if repetion is correct even undefined', function () {
    
            assert.deepStrictEqual(arrayRepeat(
                undefined,
                two
            ), [
                undefined,
                undefined
            ]);
    
        });
        
    it('check expected type', function () {
       
        expectType<any[]>(arrayRepeat(
            "as",
            two
        ));
  
      });
});
