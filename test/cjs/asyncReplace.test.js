const {asyncReplace} = require("../../src/node.cjs");
const assert = require("assert");


describe('CJS: asyncReplace method', function () {

    it('check asyncReplace replace value', async function () {

        const data = await asyncReplace("asd", /s/g, "@");

        assert.deepStrictEqual(data, "a@d");

    });

});
