
import {isEmpty} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: isEmpty method', function () {

    it('check if value empty string true', function () {

        assert.deepStrictEqual(isEmpty(''), true);

    });

    it('check if value empty string false', function () {

        assert.deepStrictEqual(isEmpty('hello word'), false);

    });

    it('check if value empty array true', function () {

        assert.deepStrictEqual(isEmpty([]), true);

    });

    it('check if value empty array false', function () {

        assert.deepStrictEqual(isEmpty([
            '1',
            '2'
        ]), false);

    });
    it('check expected type', function () {
       
        expectType<boolean>(isEmpty([
            '1',
            '2'
        ]));
    });

});
