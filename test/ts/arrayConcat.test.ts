import {arrayConcat} from "../../dist/esm/node.esm";
import assert from 'assert';

import {expectType} from 'tsd';

const two =2;
const one =1;

describe('TS: arrayConcat method', function () {


    it('check Array arrayConcat has no minimum', function () {

        assert.deepStrictEqual(arrayConcat(
            one,
            two
        ), [
            one,
            two
        ]);

    });

    it('check Array arrayConcat has minimum 1', function () {

        assert.deepStrictEqual(arrayConcat(
            [one],
            two
        ), [
            one,
            two
        ]);

    });

    it('check expected type', function () {
       
        expectType<any[]>(arrayConcat([
            one,
            two
        ], [
            one,
            two
        ]));
  
      });

});


