const {regexCountGroup} = require("../../src/node.cjs");
const assert = require("assert");

const one=1;

describe('CJS: regexCountGroup method', function () {

    it('check if value count is one', function () {

        assert.deepStrictEqual(regexCountGroup('/(abs|scs)@0@@1@/'), one);

    });


});
