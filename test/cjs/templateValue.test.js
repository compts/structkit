/* eslint-disable sort-keys */
const {templateValue} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two =2;
const three =3;


describe('CJS: templateValue method', function () {

    it('check if Template functionality', function () {

        assert.strictEqual(templateValue("<!= test !>", {"test": 11}), "11");

    });

    it('check if Template functionality with json', function () {

        assert.strictEqual(templateValue("<!=test!>", {"test": {"a": 1}}), '[object Object]');

    });

    it('check if Template functionality with array', function () {

        assert.strictEqual(templateValue("<!= test !>", {"test": [
            one,
            two,
            three
        ]}), '1,2,3');

    });
    it('check if Template functionality with array', function () {

        assert.strictEqual(templateValue("<! ary.forEach(function(vv, kk) { !>Key: <!= kk !>, Value: <!= vv !> <br> <! });!>", {"ary": [
            one,
            two,
            three
        ]}), 'Key: 0, Value: 1 <br> Key: 1, Value: 2 <br> Key: 2, Value: 3 <br> ');

    });

    it('check if Template functionality with if else', function () {

        assert.strictEqual(templateValue("<! if (has(obj, 'a')) { !>A is: <!= obj.a !> <! } else { !>No A <! } !>", {"obj": {"a": 11},
            "has": (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)}), "A is: 11 ");

    });

    it('check if Template functionality with if else no a', function () {

        assert.strictEqual(templateValue("<! if (has(obj, 'a')) { !>A is: <!= obj.a !> <! } else { !>No A <! } !>", {"obj": {"b": 11},
            "has": (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)}), "No A ");

    });
    it('check if Template functionality with error', function () {

        assert.strictEqual(templateValue("<! if (has(obj, 'a')) { !>A is: <!= obj.a !> <! } else { !>No A <! } !>", {"obj": {"b": 11}}), "");

    });
    it('check if Template functionality with error trow', function () {

        assert.throws(() => {

            templateValue(
                "<! if (has(obj, 'a')) { !>A is: <!= obj.a !> <! } else { !>No A <! } !>", {"obj": {"b": 11}},
                {"trowError": true}
            );

        }, Error);

    });
    it('check if Template functionality with custom tag', function () {

        assert.strictEqual(templateValue("<<= test >>", {"test": 11}, {"open_tag": "<<",
            "close_tag": ">>"}), "11");

    });

    it('check if Template simple comment', function () {

        assert.strictEqual(templateValue("d<!# yehaoo !> asasd", {"obj": {"b": 11}}), "d asasd");

    });
    it('check if Template multiple comment', function () {

        assert.strictEqual(templateValue("d<!# yehaoo !> asasd <!# test !> end", {"obj": {"b": 11}}), "d asasd  end");

    });
    it('check if Template comment with tags inside', function () {

        assert.strictEqual(templateValue("d<!# yehaoo <! if (true) { !> test <! } !> !> asasd <!# test !> end", {"obj": {"b": 11}}), "d asasd  end");

    });

});
