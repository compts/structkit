
import {mapGetData} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;


describe('TS: mapGetData method', function () {

    it('check mapGetData array', function () {

        assert.deepStrictEqual(mapGetData([{"Asd": one}], "Asd"), [one]);

    });
    it('check expected type', function () {
       
        expectType<any[number]>(mapGetData([{"Asd": one}], "Asd"));
  
      });
});
