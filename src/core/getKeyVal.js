const indexOfExist = require('../function/indexOfExist');

const each = require('../function/each');

const count = require('../function/count');


/**
 * Get key value
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} jsn Json or Array
 * @param {boolean} typ Types of instruction
 * @returns {array|object} Expected return from instruction
 * @example
 *
 * getKeyVal({"s1":1,"s2":1},"key")
 *=>{"s1":1,"s2":1}
 */
function getKeyVal (jsn, typ) {

    const one =1,
        zero =0;

    const ky=[],
        vl=[];
    const list_raw = [];

    each(jsn, function (kk, vv) {

        ky.push(kk);
        vl.push(vv);
        list_raw.push({
            "key": kk,
            "value": vv
        });

    });
    if (indexOfExist([
        "key",
        "value"
    ], typ)) {

        const ars=typ==="key"
            ?ky
            :vl;


        return count(ars)===one
            ?ars[zero]
            :ars;

    }
    if (typ ==="first_index") {

        return count(list_raw)>zero
            ?list_raw[zero]
            :{"value": ''};

    }
    if (typ ==="last_index") {

        return count(list_raw)>zero
            ?list_raw[count(list_raw)-one]
            :{"value": ''};

    }

    return null;

}

module.exports=getKeyVal;
