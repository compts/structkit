import {arrayConcat} from "../../dist/esm/node.esm";
import assert from 'assert';

const two =2;
const one =1;

describe('ESM: arrayConcat method', function () {


    it('check Array arrayConcat has no minimum', function () {

        assert.deepStrictEqual(arrayConcat(
            one,
            two
        ), [
            one,
            two
        ]);

    });

    it('check Array arrayConcat has minimum 1', function () {

        assert.deepStrictEqual(arrayConcat(
            [one],
            two
        ), [
            one,
            two
        ]);

    });

    it('check Array arrayConcat is empty', function () {

        assert.deepStrictEqual(arrayConcat(), []);

    });

});


