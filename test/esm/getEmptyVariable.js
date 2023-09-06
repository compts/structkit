import {getEmptyVariable} from "../../dist/esm/node.esm";
import assert from 'assert';

const three =3;
const two =2;
const one =1;

describe('ESM: getEmptyVariable method', function () {


    it('return empty array', function () {

        assert.deepStrictEqual(
            getEmptyVariable([
                one,
                two,
                three
            ]),
            []
        );

    });

    it('return empty json', function () {

        assert.deepStrictEqual(
            getEmptyVariable({"ones": one}),
            {}
        );

    });

});


