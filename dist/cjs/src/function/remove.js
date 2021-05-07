const getTypeof = require('./getTypeof');

const each = require('./each');

const indexOf = require('./indexOf');

const where = require('./where');


/**
 * Remove
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} value The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * remove([1,2,3],1 )
 *=>'{}'
 */
function remove (objectValue, value) {

    const emptyDefaultValue=0;
    const type_js=getTypeof(objectValue);
    let reslt =null;

    if (type_js==="array") {

        reslt=[];
        each(objectValue, function (ak, av) {

            if (indexOf(objectValue, value)<emptyDefaultValue) {

                reslt.push(av);

            }

        });

    }

    if (type_js==="json") {

        reslt={};
        const jsn_vw=[];

        each(objectValue, function () {

            where(objectValue, value, function (jk) {

                jsn_vw.push(jk);

            });

        });

        each(objectValue, function (ak, av) {

            if (indexOf(jsn_vw, ak)<emptyDefaultValue) {

                reslt[ak]=av;

            }

        });

    }

    return reslt;

}
module.exports=remove;;

