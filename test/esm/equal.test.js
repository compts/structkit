import {equal} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: equal method', function () {

    it('check if equal value is true', function () {

        assert.strictEqual(equal("as", "as"), true);

    });

    it('check if not equal value is false', function () {

        assert.strictEqual(equal("as", "as1"), false);

    });

});
