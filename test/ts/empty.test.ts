import {empty} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
const three =3;
const two =2;
const one =1;

describe('TS: empty method', function () {


    it('return empty array', function () {

        assert.deepStrictEqual(
            empty([
                one,
                two,
                three
            ]),
            []
        );

    });

    it('return empty json', function () {

        assert.deepStrictEqual(
            empty({"ones": one}),
            {}
        );

    });

    it('check expected type', function () {
       
        expectType<any>(empty({"ones": one}));
  
      });

});


