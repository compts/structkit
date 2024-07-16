import {lt} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;
const two =2;

describe('TS: less than method', function () {

    it('check if less than value is true', function () {

        assert.strictEqual(lt(one, two), true);

    });

    it('check if not less than value is false', function () {

        assert.strictEqual(lt(two, one), false);

    });

    it('check expected type', function () {

        expectType<boolean>(lt(two, one));

    });
});
