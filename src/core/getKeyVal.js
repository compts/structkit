import indexOf from '../function/indexOf';
import each from '../function/each';
import count from '../function/count';

/**
 * Get key value
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} jsn The second number in an addition.
 * @param {boolean} typ The second number in an addition.
 * @returns {array|object} Returns the total.
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
    if (indexOf([
        "key",
        "value"
    ], typ)>-one) {

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
            :null;

    }
    if (typ ==="last_index") {

        return count(list_raw)>zero
            ?list_raw[count(list_raw)-one]
            :null;

    }

    return null;

}

export default getKeyVal;
