import {delimiter} from "../../dist/esm/node.esm";
import assert from 'assert';

const three =3;
const two =2;
const one =1;

describe('CJS: delimiter method', function () {


    it('check Array delimiter has no minimum', function () {

        assert.deepStrictEqual(delimiter([
            one,
            two,
            three
        ]), [
            one,
            two,
            three
        ]);

    });

    it('check Array delimiter has minimum 1', function () {

        assert.deepStrictEqual(delimiter([
            one,
            two,
            three
        ], one), [
            two,
            three
        ]);

    });

});


