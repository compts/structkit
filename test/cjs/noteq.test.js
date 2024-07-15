const {noteq} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: noteq method', function () {

    it('check if noteq value is false', function () {

        assert.strictEqual(noteq("as", "as"), false);

    });

    it('check if noteq value is true', function () {

        assert.strictEqual(noteq("as", "as1"), true);

    });

});
