/* eslint-disable sort-keys */

import {templates} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';

const one =1;
const two =2;
const three =3;

describe('ESM: templates method', function () {

    it('check if Template functionality', function () {

        assert.strictEqual(templates("<!= test !>", {"test": 11}), "11");

    });

    it('check if Template functionality with json', function () {

        assert.strictEqual(templates("<!=test!>", {"test": {"a": 1}}), '[object Object]');

    });


    it('check if Template functionality 2 tags', function () {

        assert.strictEqual(templates("<!= test !><!= test2 !>", {"test": 11,
            "test2": 22}), "1122");

    });

    it('check if Template functionality w/ multiple string tag', function () {

        assert.strictEqual(templates("<!= protocol !><!= subdomain !><!= domain !><!= tld !><!= port !><!= path !><!= queryString !><!= hash !>", {
            "domain": 'youtube',
            "hash": '#hash',
            "path": '/v1/gundam',
            "port": ':8080',
            "protocol": 'https://',
            "queryString": '?test=1',
            "subdomain": 'service.',
            "tld": '.com'
        }), 'https://service.youtube.com:8080/v1/gundam?test=1#hash');

    });

    it('check if Template functionality with array', function () {

        assert.strictEqual(templates("<!= test !>", {"test": [
            one,
            two,
            three
        ]}), '1,2,3');

    });
    it('check if Template functionality with array', function () {

        assert.strictEqual(templates("<! ary.forEach(function(vv, kk) { !>Key: <!= kk !>, Value: <!= vv !> <br> <! });!>", {"ary": [
            one,
            two,
            three
        ]}), 'Key: 0, Value: 1 <br> Key: 1, Value: 2 <br> Key: 2, Value: 3 <br> ');

    });

    it('check if Template functionality with if else', function () {

        assert.strictEqual(templates("<! if (has(obj, 'a')) { !>A is: <!= obj.a !> <! } else { !>No A <! } !>", {"obj": {"a": 11},
            "has": (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)}), "A is: 11 ");

    });

    it('check if Template functionality with if else no a', function () {

        assert.strictEqual(templates("<! if (has(obj, 'a')) { !>A is: <!= obj.a !> <! } else { !>No A <! } !>", {"obj": {"b": 11},
            "has": (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)}), "No A ");

    });
    it('check if Template functionality with error', function () {

        assert.strictEqual(templates("<! if (has(obj, 'a')) { !>A is: <!= obj.a !> <! } else { !>No A <! } !>", {"obj": {"b": 11}}), "");

    });
    it('check if Template functionality with error trow', function () {

        assert.throws(() => {

            templates(
                "<! if (has(obj, 'a')) { !>A is: <!= obj.a !> <! } else { !>No A <! } !>", {"obj": {"b": 11}},
                {"throwError": true}
            );

        }, Error);

    });
    it('check if Template functionality with custom tag', function () {

        assert.strictEqual(templates("<<= test >>", {"test": 11}, {"open_tag": "<<",
            "close_tag": ">>"}), "11");

    });

    it('check if Template simple comment', function () {

        assert.strictEqual(templates("d<!# yehaoo !> asasd", {"obj": {"b": 11}}), "d asasd");

    });
    it('check if Template multiple comment', function () {

        assert.strictEqual(templates("d<!# yehaoo !> asasd <!# test !> end", {"obj": {"b": 11}}), "d asasd  end");

    });
    it('check if Template comment with tags inside', function () {

        assert.strictEqual(templates("d<!# yehaoo <! if (true) { !> test <! } !> !> asasd <!# test !> end", {"obj": {"b": 11}}), "d asasd  end");

    });

});
