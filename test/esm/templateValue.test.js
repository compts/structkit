
import {templateValue} from "../../dist/node.es";
import assert from 'assert';

describe('ESM: templateValue method', function () {

    it('check if Template functionality', function () {

        assert.strictEqual(templateValue("<!- test !>", {"test": 11}), "11");

    });


});
