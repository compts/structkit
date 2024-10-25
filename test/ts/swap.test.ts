import {swap} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const zero = 0
const two =2;


describe('TS: swap method', function () {

    it('check if swap', function () {

        assert.deepStrictEqual(swap(zero, two, "foo"), "oof");

    });

    it('check expected type', async function () {
       
        expectType<any>(swap(zero, two, "foo"));
  
    });

});
