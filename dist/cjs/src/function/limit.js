const has = require('./has');

const each = require('./each');

const count = require('./count');


/**
 * Limit
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {limit} minValue The second number in an addition.
 * @param {integer} maxValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * limit([1,2],1,2 )
 *=>{'1':2}
 */
function limit (objectValue, minValue, maxValue, func) {

    let cnt=0;
    const glo_jsn={};
    let glo_indtfd = null;
    const emptyDefaultValue=0;
    const minValueReserve=has(minValue)
        ?minValue
        :emptyDefaultValue;
    const maxValueReserve=has(maxValue)
        ?maxValue
        :count(objectValue);
    const incrementDefaultValue=1;

    each(objectValue, function (key, meth) {

        if (cnt>=minValueReserve && cnt<=maxValueReserve) {


            if (has(func)) {

                glo_indtfd=func(key, meth);

                if (has(glo_indtfd)) {

                    glo_jsn[key]=glo_indtfd;

                }

            } else {

                glo_jsn[key]=meth;

            }

        }

        cnt+=incrementDefaultValue;

    });

    return glo_jsn;

}
module.exports=limit;;

