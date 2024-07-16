import {gt} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;
const two =2;

describe('TS: greater than method', function () {

    it('check if greater than value is true', function () {

        assert.strictEqual(gt(two, one), true);

    });

    it('check if not greater than value is false', function () {

        assert.strictEqual(gt(one, two), false);

    });
    it('check expected type', function () {

        expectType<boolean>(gt("as", "as"));

    });

});
