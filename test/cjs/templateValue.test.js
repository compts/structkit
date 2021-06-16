const {templateValue} = require("../../dist/cjs/node.cjs");
const assert = require("assert");

describe('CJS: templateValue method', function () {

    it('check if Template functionality', function () {

        assert.strictEqual(templateValue("<!- test !>", {"test": 11}), "11");

    });


});
