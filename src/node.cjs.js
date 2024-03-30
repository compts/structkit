const statementAction = require('./core/conditionStatement.js');

exports.statementAction = statementAction;

const dataNumberFormat = require('./core/dataTypeFormat.js');

exports.dataNumberFormat = dataNumberFormat;

const getIndexOf = require('./core/getIndexOf.js');

exports.getIndexOf = getIndexOf;

const getKeyVal = require('./core/getKeyVal.js');

exports.getKeyVal = getKeyVal;

const getTypeofInternal = require('./core/getTypeOf.js');

exports.getTypeofInternal = getTypeofInternal;

const getWindow = require('./core/global.js');

exports.getWindow = getWindow;

const stringSplit = require('./core/stringSplit.js');

exports.stringSplit = stringSplit;

const whereLoopExecution = require('./core/whereLoopExecution.js');

exports.whereLoopExecution = whereLoopExecution;

const appendIsArrayExist = require('./function/appendIsArrayExist.js');

exports.appendIsArrayExist = appendIsArrayExist;

const append = require('./function/append.js');

exports.append = append;

const arrayConcat = require('./function/arrayConcat.js');

exports.arrayConcat = arrayConcat;

const arrayRepeat = require('./function/arrayRepeat.js');

exports.arrayRepeat = arrayRepeat;

const arraySum = require('./function/arraySum.js');

exports.arraySum = arraySum;

const arrayToObjectByDataFormat = require('./function/arrayToObjectByDataFormat.js');

exports.arrayToObjectByDataFormat = arrayToObjectByDataFormat;

const asyncReplace = require('./function/asyncReplace.js');

exports.asyncReplace = asyncReplace;

const arraySlice = require('./function/arraySlice.js');

exports.arraySlice = arraySlice;

const clone = require('./function/clone.js');

exports.clone = clone;

const count = require('./function/count.js');

exports.count = count;

const each = require('./function/each.js');

exports.each = each;

const filter = require('./function/filter.js');

exports.filter = filter;

const first = require('./function/first.js');

exports.first = first;

const getData = require('./function/getData.js');

exports.getData = getData;

const getEmptyVariable = require('./function/getEmptyVariable.js');

exports.getEmptyVariable = getEmptyVariable;

const getKey = require('./function/getKey.js');

exports.getKey = getKey;

const getTypeof = require('./function/getTypeof.js');

exports.getTypeof = getTypeof;

const getValue = require('./function/getValue.js');

exports.getValue = getValue;

const getUniq = require('./function/getUniq.js');

exports.getUniq = getUniq;

const groupBy = require('./function/groupBy.js');

exports.groupBy = groupBy;

const ifUndefined = require('./function/ifUndefined.js');

exports.ifUndefined = ifUndefined;

const indexOf = require('./function/indexOf.js');

exports.indexOf = indexOf;

const has = require('./function/has.js');

exports.has = has;

const indexOfExist = require('./function/indexOfExist.js');

exports.indexOfExist = indexOfExist;

const indexOfNotExist = require('./function/indexOfNotExist.js');

exports.indexOfNotExist = indexOfNotExist;

const insert = require('./function/insert.js');

exports.insert = insert;

const isEmpty = require('./function/isEmpty.js');

exports.isEmpty = isEmpty;

const isExact = require('./function/isExact.js');

exports.isExact = isExact;

const isExactbyRegExp = require('./function/isExactbyRegExp.js');

exports.isExactbyRegExp = isExactbyRegExp;

const isJson = require('./function/isJson.js');

exports.isJson = isJson;

const jsonToArray = require('./function/jsonToArray.js');

exports.jsonToArray = jsonToArray;

const last = require('./function/last.js');

exports.last = last;

const lastIndexOf = require('./function/lastIndexOf.js');

exports.lastIndexOf = lastIndexOf;

const like = require('./function/like.js');

exports.like = like;

const limit = require('./function/limit.js');

exports.limit = limit;

const map = require('./function/map.js');

exports.map = map;

const numberFormat = require('./function/numberFormat.js');

exports.numberFormat = numberFormat;

const onDelay = require('./function/onDelay.js');

exports.onDelay = onDelay;

const onSequence = require('./function/onSequence.js');

exports.onSequence = onSequence;

const onWait = require('./function/onWait.js');

exports.onWait = onWait;

const parseJson = require('./function/parseJson.js');

exports.parseJson = parseJson;

const parseString = require('./function/parseString.js');

exports.parseString = parseString;

const random = require('./function/random.js');

exports.random = random;

const regexCountGroup = require('./function/regexCountGroup.js');

exports.regexCountGroup = regexCountGroup;

const range = require('./function/range.js');

exports.range = range;

const remove = require('./function/remove.js');

exports.remove = remove;

const repeat = require('./function/repeat.js');

exports.repeat = repeat;

const roundDecimal = require('./function/roundDecimal.js');

exports.roundDecimal = roundDecimal;

const shuffle = require('./function/shuffle.js');

exports.shuffle = shuffle;

const sort = require('./function/sort.js');

exports.sort = sort;

const stringCamelCase = require('./function/stringCamelCase.js');

exports.stringCamelCase = stringCamelCase;

const stringCapitalize = require('./function/stringCapitalize.js');

exports.stringCapitalize = stringCapitalize;

const stringEscape = require('./function/stringEscape.js');

exports.stringEscape = stringEscape;

const stringKebabCase = require('./function/stringKebabCase.js');

exports.stringKebabCase = stringKebabCase;

const stringLowerCase = require('./function/stringLowerCase.js');

exports.stringLowerCase = stringLowerCase;

const stringSnakeCase = require('./function/stringSnakeCase.js');

exports.stringSnakeCase = stringSnakeCase;

const stringSubs = require('./function/stringSubs.js');

exports.stringSubs = stringSubs;

const stringUpperCase = require('./function/stringUpperCase.js');

exports.stringUpperCase = stringUpperCase;

const stringUnEscape = require('./function/stringUnEscape.js');

exports.stringUnEscape = stringUnEscape;

const templateValue = require('./function/templateValue.js');

exports.templateValue = templateValue;

const toArray = require('./function/toArray.js');

exports.toArray = toArray;

const toDouble = require('./function/toDouble.js');

exports.toDouble = toDouble;

const toInteger = require('./function/toInteger.js');

exports.toInteger = toInteger;

const toString = require('./function/toString.js');

exports.toString = toString;

const unique = require('./function/unique.js');

exports.unique = unique;

const varExtend = require('./function/varExtend.js');

exports.varExtend = varExtend;

const where = require('./function/where.js');

exports.where = where;

const whereNot = require('./function/whereNot.js');

exports.whereNot = whereNot;

const entity = require('./variable/htmlentity.js');

exports.entity = entity;


/**
 *  Get the type if arguments
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isArguments()
 *=> true
 */
function isArguments_default (value) {

    return getTypeof(value) === "arguments";

}


/**
 *  Get the type if array
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isArray([])
 *=> true
 */
function isArray_default (value) {

    return getTypeof(value) === "array";

}


/**
 *  Get the type if boolean
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isBoolean(true)
 *=> true
 */
function isBoolean_default (value) {

    return getTypeof(value) === "boolean";

}


/**
 *  Get the type if date
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isDate(new Date())
 *=> true
 */
function isDate_default (value) {

    return getTypeof(value) === "date";

}


/**
 *  Get the type if error
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isError(new Error())
 *=> true
 */
function isError_default (value) {

    return getTypeof(value) === "error";

}


/**
 *  Get the type if function
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isFunction()
 *=> true
 */
function isFunction_default (value) {

    return getTypeof(value) === "function";

}


/**
 *  Get the type if null
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isNull(null)
 *=> true
 */
function isNull_default (value) {

    return getTypeof(value) === "null";

}


/**
 *  Get the type if number
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isNumber(1)
 *=> true
 */
function isNumber_default (value) {

    return getTypeof(value) === "number";

}


/**
 *  Get the type if object
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isObject({})
 *=> true
 */
function isObject_default (value) {

    return getTypeof(value) === "object";

}


/**
 *  Get the type if promise
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isPromise()
 *=> true
 */
function isPromise_default (value) {

    return getTypeof(value) === "promise";

}


/**
 *  Get the type if regexp
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isRegexp(/(1)/g)
 *=> true
 */
function isRegexp_default (value) {

    return getTypeof(value) === "regexp";

}


/**
 *  Get the type if string
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isString('string')
 *=> true
 */
function isString_default (value) {

    return getTypeof(value) === "string";

}


/**
 *  Get the type if undefined
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUndefined(undefined)
 *=> true
 */
function isUndefined_default (value) {

    return getTypeof(value) === "undefined";

}


exports.isArguments=isArguments_default;
exports.isArray=isArray_default;
exports.isBoolean=isBoolean_default;
exports.isDate=isDate_default;
exports.isError=isError_default;
exports.isFunction=isFunction_default;
exports.isNull=isNull_default;
exports.isNumber=isNumber_default;
exports.isObject=isObject_default;
exports.isPromise=isPromise_default;
exports.isRegexp=isRegexp_default;
exports.isString=isString_default;
exports.isUndefined=isUndefined_default;
