
import {arrayToObjectByDataFormat} from "../../dist/esm/node.esm";
import assert from 'assert';


const one =1;


describe('TS: arrayToObjectByDataFormat method', function () {

    it('check arrayToObjectByDataFormat array', function () {

        assert.deepStrictEqual(arrayToObjectByDataFormat([{"Asd": one}], "Asd"), [one]);

    });

});
