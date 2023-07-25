import {first} from "../../dist/esm/node.esm";
import assert from 'assert';

const three =3;
const two =2;
const one =1;

describe('TS: first method', function () {


    it('check Array first index', function () {

        assert.deepStrictEqual(
            first([
                one,
                two,
                three
            ])
            ,
            one
        );

    });

});


