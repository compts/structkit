
import {isEmpty} from "../../dist/esm/node.esm";
import assert from 'assert';


describe('ESM: isEmpty method', function () {

    it('check if value empty string true', function () {

        assert.deepStrictEqual(isEmpty(''), true);

    });

    it('check if value empty string false', function () {

        assert.deepStrictEqual(isEmpty('hello word'), false);

    });

    it('check if value empty array true', function () {

        assert.deepStrictEqual(isEmpty([]), true);

    });

    it('check if value null or undefined', function () {

        const user = {};

        assert.deepStrictEqual(isEmpty(null), true);
        assert.deepStrictEqual(isEmpty(user.hobby), true);

    });

    it('check if value empty Uint16Array', function () {


        assert.deepStrictEqual(
            isEmpty(new Uint16Array([])),
            true
        );

    });

    it('check if value empty uint8Array', function () {


        assert.deepStrictEqual(
            isEmpty(new Uint8Array([])),
            true
        );

    });

    it('check if value empty array false', function () {

        assert.deepStrictEqual(isEmpty([
            '1',
            '2'
        ]), false);

    });


});
