export const allValid: typeof allValid_module;
export const add: typeof add_module;
export const arrayRepeat: typeof arrayRepeat_module;
export const append: typeof append_module;
export const __: "@argument/place";
export const arraySum: typeof arraySum_module;
export const arrayConcat: typeof arrayConcat_module;
export const appendIsArrayExist: typeof appendIsArrayExist_module;
export const arraySlice: typeof arraySlice_module;
export const arrayToObjectByDataFormat: typeof arrayToObjectByDataFormat_module;
export const asyncReplace: typeof asyncReplace_module;
export const clone: typeof clone_module;
export const calculate: typeof calculate_module;
export const dec: typeof dec_module;
export const count: typeof count_module;
export const divide: typeof divide_module;
export const each: typeof each_module;
export const empty: typeof empty_module;
export const equal: typeof equal_module;
export const first: typeof first_module;
export const filter: typeof filter_module;
export const getData: typeof getData_module;
export const getKey: typeof getKey_module;
export const getTypeof: typeof getTypeof_module;
export const getUniq: typeof getUniq_module;
export const getValue: typeof getValue_module;
export const groupBy: typeof groupBy_module;
export const gt: typeof gt_module;
export const gte: typeof gte_module;
export const has: typeof has_module;
export const ifUndefined: typeof ifUndefined_module;
export const inc: typeof inc_module;
export const indexOf: typeof indexOf_module;
export const indexOfExist: typeof indexOfExist_module;
export const indexOfNotExist: typeof indexOfNotExist_module;
export const insert: typeof insert_module;
export const isEmpty: typeof isEmpty_module;
export const isExact: typeof isExact_module;
export const isExactbyRegExp: typeof isExactbyRegExp_module;
export const isJson: typeof isJson_module;
export const last: typeof last_module;
export const jsonToArray: typeof jsonToArray_module;
export const lastIndexOf: typeof lastIndexOf_module;
export const like: typeof like_module;
export const limit: typeof limit_module;
export const lte: typeof lte_module;
export const lt: typeof lt_module;
export const mergeInWhere: typeof mergeInWhere_module;
export const map: typeof map_module;
export const multiply: typeof multiply_module;
export const mergeWithKey: typeof mergeWithKey_module;
export const noteq: typeof noteq_module;
export const onDelay: typeof onDelay_module;
export const onSequence: typeof onSequence_module;
export const parseJson: typeof parseJson_module;
export const onWait: typeof onWait_module;
export const parseString: typeof parseString_module;
export const range: typeof range_module;
export const reduce: typeof reduce_module;
export const regexCountGroup: typeof regexCountGroup_module;
export const repeat: typeof repeat_module;
export const remove: typeof remove_module;
export const roundDecimal: typeof roundDecimal_module;
export const selectInData: typeof selectInData_module;
export const someValid: typeof someValid_module;
export const shuffle: typeof shuffle_module;
export const sort: typeof sort_module;
export const stringCamelCase: typeof stringCamelCase_module;
export const stringEscape: typeof stringEscape_module;
export const stringCapitalize: typeof stringCapitalize_module;
export const stringKebabCase: typeof stringKebabCase_module;
export const stringLowerCase: typeof stringLowerCase_module;
export const stringSnakeCase: typeof stringSnakeCase_module;
export const stringSubs: typeof stringSubs_module;
export const stringUnEscape: typeof stringUnEscape_module;
export const stringUpperCase: typeof stringUpperCase_module;
export const subtract: typeof subtract_module;
export const templateValue: typeof templateValue_module;
export const toArray: typeof toArray_module;
export const toDouble: typeof toDouble_module;
export const toInteger: typeof toInteger_module;
export const toString: typeof toString_module;
export const trim: typeof trim_module;
export const unique: typeof unique_module;
export const varExtend: typeof varExtend_module;
export const where: typeof where_module;
export const whereNot: typeof whereNot_module;
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
export function isArguments(value: any): boolean;
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
export function isArray(value: any): boolean;
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
export function isBoolean(value: any): boolean;
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
export function isDate(value: any): boolean;
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
export function isError(value: any): boolean;
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
export function isFunction(value: any): boolean;
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
export function isNull(value: any): boolean;
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
export function isNumber(value: any): boolean;
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
export function isObject(value: any): boolean;
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
export function isPromise(value: any): boolean;
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
export function isRegexp(value: any): boolean;
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
export function isString(value: any): boolean;
/**
 *  Get the type if uint16Array
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUint16Array()
 *=> true
 */
export function isUint16Array(value: any): boolean;
/**
 *  Get the type if uint8Array
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUint8Array()
 *=> true
 */
export function isUint8Array(value: any): boolean;
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
export function isUndefined(value: any): boolean;
export const random: typeof random_module;

