import {zip} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;

describe('TS: zip method', function () {

    it('check if zip asc number', function () {

        assert.deepStrictEqual(zip([one], [one], [one]), [
            [
                one,
                one,
                one
            ]
        ]);

    });

    it('check expected type', async function () {
       
        expectType<any>(zip([one], [one], [one]));
  
    });

});
