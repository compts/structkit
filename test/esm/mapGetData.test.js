
import {mapGetData} from "../../dist/esm/node.esm";
import assert from 'assert';


const one =1;


describe('CJS: mapGetData method', function () {

    it('check mapGetData array', function () {

        assert.deepStrictEqual(mapGetData([{"Asd": one}], "Asd"), [one]);

    });

});
