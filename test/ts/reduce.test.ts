import {reduce} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';


const one =1,
    three=3,
    two =2,
    zero =0;


describe('TS: reduce method', function () {

    it('check reduce array sum', function () {

        assert.deepStrictEqual(reduce(function (total, value) {

            return total+value;

        }, zero, [
            one,
            two
        ]), three);

    });
    it('check expected type', function () {
       
        expectType<number>(reduce(function (total, value) {

            return total-value;

        }, three, [
            one,
            two
        ]));
  
      });


});
