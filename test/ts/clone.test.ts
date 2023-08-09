
import {clone} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;


describe('TS: clone method', function () {

    it('check clone data', function () {

        assert.deepStrictEqual(clone([{"Asd": one}]), [{"Asd": one}]);

    });

    it('check expected type', async function () {
       

        expectType<any>(clone([{"Asd": one}]));
  
      });
});
