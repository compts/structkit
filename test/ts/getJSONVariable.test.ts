import {getJSONVariable} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
const three =3;
const two =2;
const one =1;

describe('TS: getJSONVariable method', function () {


    it('return empty array', function () {

        assert.deepStrictEqual(
            getJSONVariable([
                one,
                two,
                three
            ]),
            []
        );

    });

    it('return empty json', function () {

        assert.deepStrictEqual(
            getJSONVariable({"ones": one}),
            {}
        );

    });

    it('check expected type', function () {
       
        expectType<any>(getJSONVariable({"ones": one}));
  
      });

});


