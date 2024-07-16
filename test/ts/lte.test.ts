import {lte} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;
const two =2;

describe('TS: less than equal method', function () {

    it('check if less than equal value is true', function () {

        assert.strictEqual(lte(one, two), true);

    });

    it('check if not less than equal value is false', function () {

        assert.strictEqual(lte(two, one), false);

    });

    it('check if equal value is true', function () {

        assert.strictEqual(lte(two, two), true);

    });

    it('check expected type', function () {

        expectType<boolean>(lte(two, one));

    });

});
