import {asyncReplace} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: asyncReplace method', function () {

    it('check asyncReplace replace value', async function () {

        const data = await asyncReplace("asd", /s/g, "@");

        assert.deepStrictEqual(data, "a@d");

    });

    it('check asyncReplace replace value with function', async function () {

        const data = await asyncReplace("asd", /s/g, () => "@");

        assert.deepStrictEqual(data, "a@d");

    });
    
    it('check expected type', async function () {
       
        const data = await asyncReplace("asd", /s/g, "@");
        expectType<any[number]>(data);
  
      });
});
