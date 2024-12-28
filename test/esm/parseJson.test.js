
import {parseJson} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: parseString method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(parseJson('{"a": 1}'), {
            "a": 1
        });
        assert.deepStrictEqual(parseJson('{"a": ["1","2" ]}'), {"a": [
            "1",
            "2"
        ]});

    });

    it('check if empty str argument', function () {

        assert.deepStrictEqual(parseJson(''), null);

    });

});
