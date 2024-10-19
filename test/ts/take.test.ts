import {take} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;
const three =3;

describe('TS: take method', function () {

    it('check if one', function () {

        assert.deepStrictEqual(take(one, [
            one,
            three
        ]), one);

    });
    it('check expected type', async function () {
       
        expectType<any>(take(one, [
            one,
            three
        ]));
  
    });

});
