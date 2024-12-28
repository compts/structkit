
import {appendIsArrayExist} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1,
    two =2;


describe('TS: arraySum method', function () {

    it('check arraySum array sum', function () {

        assert.deepStrictEqual(appendIsArrayExist([one], [two]), [
            one,
            two
        ]);

    });

    it('check appendIsArrayExist array empty', function () {

        assert.deepStrictEqual(appendIsArrayExist([one]), []);

    });
    
    it('check expected type', function () {
       
        expectType<any[]>(appendIsArrayExist([one], [two]));
  
      });

});
