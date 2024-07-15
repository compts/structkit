const __ = require("./__");
const _has = require("./_has");
const {one} = require("./defaultValue");

/**
 * Reviewing your curry arguments details
 *
 * @since 1.4.8
 * @category String
 * @param {any[]} args Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * curryArgReview([])
 * => {}
 */
function curryArgReview (args) {

    const objs = {};
    const placeList = [];
    const validList = [];
    let argIncter = 0;

    for (const arg in args) {

        if (_has(args, arg)) {

            const value = args[arg];

            if (__ === value) {

                objs[argIncter] = {
                    "index": placeList.length,
                    "type": "place",
                    "val": value
                };
                placeList.push(value);
                argIncter +=one;

            } else {

                objs[argIncter] = {
                    "index": validList.length,
                    "type": "valid",
                    "val": value
                };

                validList.push(value);
                argIncter +=one;

            }

        }

    }

    return {
        "argInc": argIncter,
        "argss": objs,
        "place": placeList,
        "valid": validList

    };

}
module.exports=curryArgReview;
