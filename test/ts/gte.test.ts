import {gte} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;
const two =2;

describe('TS: greater than equal method', function () {

    it('check if greater than equal value is true', function () {

        assert.strictEqual(gte(two, one), true);

    });

    it('check if not greater than equal value is false', function () {

        assert.strictEqual(gte(one, two), false);

    });

    it('check if equal value is true', function () {

        assert.strictEqual(gte(two, two), true);

    });

    it('check expected type', function () {

        expectType<boolean>(gte("as", "as"));

    });
});
