
import {isJson} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: isJson method', function () {

    it('check if object is valid json', function () {

        assert.strictEqual(isJson({"a": 1}), true);

    });

    it('check if object has function', function () {

        assert.strictEqual(isJson({"a": () => {
            //

        }}), false);

    });


});
