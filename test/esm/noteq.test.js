import {noteq} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: noteq method', function () {

    it('check if noteq value is false', function () {

        assert.strictEqual(noteq("as", "as"), false);

    });

    it('check if not noteq value is true', function () {

        assert.strictEqual(noteq("as", "as1"), true);

    });

});
