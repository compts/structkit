import {getEmptyVariable} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
const three =3;
const two =2;
const one =1;

describe('TS: getEmptyVariable method', function () {


    it('return empty array', function () {

        assert.deepStrictEqual(
            getEmptyVariable([
                one,
                two,
                three
            ]),
            []
        );

    });

    it('return empty json', function () {

        assert.deepStrictEqual(
            getEmptyVariable({"ones": one}),
            {}
        );

    });

    it('check expected type', function () {
       
        expectType<any>(getEmptyVariable({"ones": one}));
  
      });

});


