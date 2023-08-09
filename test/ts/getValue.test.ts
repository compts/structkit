import {getValue} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const three =3;
const two =2;
const one =1;

describe('TS: getValue method', function () {


    it('return value array', function () {

        assert.deepStrictEqual(
            getValue([
                one,
                two,
                three
            ]),
            [
                one,
                two,
                three

            ]
        );

    });

    it('return value 1', function () {

        assert.deepStrictEqual(
            getValue({"ones": one}),
            one
        );

    });
    it('check expected type', function () {
       
        expectType<any>(getValue({"ones": one}));
  
      });
});


