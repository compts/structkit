
import {toDouble} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const ten=10;
const zero=0;

describe('TS: toDouble method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toDouble('10'), ten);


    });
    it('check if value empty', function () {

        assert.deepStrictEqual(toDouble(null), zero);

    });

    it('check expected type', async function () {
       
        expectType<number>(toDouble(ten));
  
    });

});
