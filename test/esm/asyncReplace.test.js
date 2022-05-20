import {asyncReplace} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: asyncReplace method', function () {

    it('check asyncReplace replace value', async function () {

        const data = await asyncReplace("asd", /s/g, "@");

        assert.deepStrictEqual(data, "a@d");

    });

});
