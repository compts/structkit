const has = require('./has');

const each = require('./each');

const count = require('./count');


/**
 * Specify the limit, similar in splice bt the return was object to ensure the order are not shuffle
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Data must be array
 * @param {number} minValue Minimum value
 * @param {number=} maxValue Maximum value
 * @param {Function=} func Callback function
 * @returns {any} Returns the object.
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
module.exports=limit;

