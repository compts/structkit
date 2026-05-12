import {default as ___module} from './src/function/__.mjs';


/**
 * Placeholder of argument
 *
 * @since 1.4.8
 * @category String
 * @example
 *
 * __
 * // => @argument/place
 */
export const __ = ___module;

import {default as allValid_module} from './src/function/allValid.mjs';


/**
 * In array, you need to check all value is true
 *
 * @since 1.4.8
 * @category Predicate
 * @param {...any?} arg List of value you need to check if all true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
export const allValid = allValid_module;

import {default as append_module} from './src/function/append.mjs';


/**
 * Append data for.mjson, array, set and map type
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Value either.mjson or array
 * @param {any} val Value for array index and.mjson
 * @param {any=} key Json key
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
export const append = append_module;

import {default as arrayConcat_module} from './src/function/arrayConcat.mjs';


/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Array
 * @param {...any?} arg Multiple arguments of array that you want to concat
 * @returns {any[]} Returns the array.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
export const arrayConcat = arrayConcat_module;

import {default as arrayRepeat_module} from './src/function/arrayRepeat.mjs';


/**
 * Repeat value in array
 *
 * @since 1.4.7
 * @category Array
 * @param {any} value String you want to duplicate
 * @param {number=} valueRepetion how many times you want to repeate
 * @returns {any[]} Return in string or number.
 * @example
 *
 * arrayRepeat("s",2 )
 *=>['s','s']
 */
export const arrayRepeat = arrayRepeat_module;

import {default as arraySlice_module} from './src/function/arraySlice.mjs';


/**
 * To return the value selected either start or start to end index
 *
 * @since 1.3.1
 * @category Array
 * @param {any} objectValue Array
 * @param {number=} min Minumum of 2
 * @param {number=} max Maximum base on array count
 * @returns {any[]} Returns the total.
 * @example
 *
 * arraySlice([1,2],1)
 * // => [2]
 *
 * arraySlice([1,2,3,4],2,4)
 * // => [3, 4]
 */
export const arraySlice = arraySlice_module;

import {default as arraySum_module} from './src/function/arraySum.mjs';


/**
 * Array sum of value
 *
 * @since 1.0.1
 * @category Math
 * @param {number[]} arrayObject Array of number
 * @param {number=} precision decimal point and default value is 0
 * @returns {number} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 * arraySum([1,2])
 * // => 3
 */
export const arraySum = arraySum_module;

import {default as asyncReplace_module} from './src/function/asyncReplace.mjs';


/**
 * Async replace regexp argument
 *
 * @since 1.3.1
 * @category Function
 * @param {any} value String data
 * @param {any} search Regexp or string to look for match
 * @param {Function|String=} toReplace Replace value.
 * @returns {Promise<string>} String in promise function
 * @example
 *
 * asyncReplace("asd",/s/g,"@")
 * // => Promise{<fulfilled>: 'a@d'}
 */
export const asyncReplace = asyncReplace_module;

import {default as calculate_module} from './src/function/calculate.mjs';


/**
 * Logic in convert string to compute, similar on how the calculator works, using pemdas concept and also support for factorial, percentage, absolute value and square root or any algebraic expression that can be represented in string. It also support for variable in formula, you just need to fill the variable with value in the second argument as.mjson.
 *
 * @since 1.4.8
 * @category Math
 * @param {string} formula Formula you want to execution, it follows the idea of algebraic expression concept
 * @param {any=} args Object argument that to fill in variable define at algbraic expression
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate('1+1')
 *=> 2
 * calculate('1+as',{as:1})
 *=> 2
 */
export const calculate = calculate_module;

import {default as clone_module} from './src/function/clone.mjs';


/**
 * Cloning the data either in JSON or array that be used as different property
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue data you want to clone
 * @returns {any} Returns clone data
 * @example
 *
 * clone([1,2])
 * // => [1,2]
 */
export const clone = clone_module;

import {default as count_module} from './src/function/count.mjs';


/**
 * Counting the lenght in array,.mjson or string
 *
 * @since 1.0.1
 * @category Math
 * @param {any=} objectValue Json or array that you want to cound
 * @param {boolean=}.mjson_is_empty_check If data is.mjson, it will check its map data
 * @returns {number} Returns the total.
 * @example
 *
 * count([1,2])
 * // => 2
 *
 * count({"s" :1, "s2": 2}, true)// Counting the object inside, you must this to true
 * // => 2
 */
export const count = count_module;

import {default as curry_module} from './src/function/curry.mjs';


/**
 * Create your own curry for your onw function
 *
 * @since 1.4.9
 * @category Function
 * @param {any=} fun Callback function
 * @param {number=} num Number of default arguments
 * @returns {any} Returns expected value from callback
 * @example
 *
 * asd = curry((test) =>{})
 * // => (test) =>{}
 */
export const curry = curry_module;

import {default as dec_module} from './src/function/dec.mjs';


/**
 * Decrement value
 *
 * @since 1.4.8
 * @category Math
 * @param {any} value Value you want to convert in array
 * @param {any=} default_value Value to want to start counting
 * @returns {number} Return in number.
 * @example
 *
 * dec(1)
 *=>0
 */
export const dec = dec_module;

import {default as defaultTo_module} from './src/function/defaultTo.mjs';


/**
 *  Returns the second argument if it is not null, `undefined` or `NaN`, otherwise returns the first argument.
 *
 * @since 1.4.87
 * @category Logic
 * @param {any} defaultValue Any first value type
 * @param {any=} value2 Any first value type
 * @returns {any} Returns true or false.
 * @example
 *
 * defaultTo(1,2)
 * // => 2
 */
export const defaultTo = defaultTo_module;

import {default as divide_module} from './src/function/divide.mjs';


/**
 * Divide logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for divided value
 * @example
 *
 * divide(1, 1)
 * // => 1
 */
export const divide = divide_module;

import {default as each_module} from './src/function/each.mjs';


/**
 * Each or for loop function you are familiar with
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Array or.mjson.
 * @param {Function=} func Function to execute the loop with callback value,key (value,key) =>{}.
 * @returns {any} Array or.mjson
 * @example
 *
 * each([1,2],(value,key,localGlobal)=>{ })
 *
 */
export const each = each_module;

import {default as empty_module} from './src/function/empty.mjs';


/**
 * Ge the empty value of specify argument type
 *
 * @since 1.0.1
 * @category Function
 * @param {any} value Any value type that you want an empty return
 * @returns {any} Returns empty either Json or Array
 * @example
 *
 * empty([])
 * => []
 */
export const empty = empty_module;

import {default as equal_module} from './src/function/equal.mjs';


/**
 * To check if the two arguments are equal
 *
 * @since 1.4.8
 * @category Predicate
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * equal('as', 'as')
 * // => true
 */
export const equal = equal_module;

import {default as filter_module} from './src/function/filter.mjs';


/**
 * Filter the data in for loop
 *
 * @since 1.0.1
 * @category Collection
 * @param {Function=} func Callback function for filtering the data
 * @param {any=} objectValue The data either.mjson or array
 * @returns {any} Returns data either.mjson or array.
 * @example
 *
 * filter(function(value, key){ return value%2 === 0 }, [1,2,3,34])
 *
 * => [2, 34]
 */
export const filter = filter_module;

import {default as first_module} from './src/function/first.mjs';


/**
 * Get the first value of array
 *
 * @since 1.0.1
 * @category Any
 * @param {any} objectValue The data is array
 * @returns {any} Returns first value of `objectValue`.
 * @example
 *
 * first([1,2,3])
 *=> 1
 */
export const first = first_module;

import {default as flatten_module} from './src/function/flatten.mjs';


/**
 * Flatten an array to a single level.
 *
 * @since 1.4.87
 * @category Array
 * @param {any} arg First number
 * @returns {any} Returns true or false.
 * @example
 *
 * flatten([1,2,3,4,[5,6],7])
 * // => [1,2,3,4,5,6,7]
 */
export const flatten = flatten_module;

import {default as fromPairs_module} from './src/function/fromPairs.mjs';


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists
 *
 * @since 1.4.87
 * @category Array
 * @param {any} value First number
 * @param {number=} deepLimit First number
 * @returns {any} Returns array
 * @example
 *
 * fromPairs([[5,6],[7,2]])
 * // => {5:6,7:2}
 */
export const fromPairs = fromPairs_module;

import {default as getData_module} from './src/function/getData.mjs';


/**
 * Get Data in array or.mjson using string to search the data either by its key or index
 *
 * @since 1.0.1
 * @category Collection
 * @param {any=} split_str Search key or index.
 * @param {any=} objectValue Either Json or Array data.
 * @param {any=} isStrict to check if delimiter are match in counter, default value is false.
 * @returns {any} Returns the total.
 * @example
 *
 * getData("s", {"s":1})
 *=> 1
 * @example
 * getData("a:a",{"a":{"a":2},"b":{"a":3}})
 *=> {a: 2}
 */
export const getData = getData_module;

import {default as getKey_module} from './src/function/getKey.mjs';


/**
 * Get key Array or JSON
 *
 * @since 1.0.1
 * @category String
 * @param {any} objectValue Either JSON or Array type
 * @returns {any|any[]} Returns it respective key or index
 * @example
 *
 * getKey({"s":1})
 * => s
 */
export const getKey = getKey_module;

import {default as getTypeof_module} from './src/function/getTypeof.mjs';


/**
 * Get type of the variable
 *
 * @since 1.0.1
 * @category String
 * @param {...any} args Any data you want to check its property in multiple arguments
 * @returns {string|string[]} Get the property of variable
 * @example
 *
 * getTypeof([])
 * => array
 * getTypeof([],{})
 * => [array.mjson]
 */
export const getTypeof = getTypeof_module;

import {default as getUniq_module} from './src/function/getUniq.mjs';


/**
 * Generate unique value id
 *
 * @since 1.0.1
 * @category String
 * @param {any=} option type unique id
 * @returns {string} Get Unique Key.
 * @example
 *
 * getUniq()
 * => dur82ht126uqgszn62j04a
 */
export const getUniq = getUniq_module;

import {default as groupBy_module} from './src/function/groupBy.mjs';


/**
 * To group the value of.mjson or array
 *
 * @since 1.4.8
 * @category Collection
 * @param {any=} func Callback function
 * @param {any=} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * groupBy(function (value) { return value % 2}, [1,2,3,4,5,6,7])
 *=> {0:[2,4,6], 1:[1,3,5,7]}
 */
export const groupBy = groupBy_module;

import {default as getValue_module} from './src/function/getValue.mjs';


/**
 * Get value of.mjson or array
 *
 * @since 1.0.1
 * @category String
 * @param {any} objectValue Either JSON or Array
 * @returns {any|any[]} Returns it respective value
 * @example
 *
 * getValue({"s":1})
 * => 1
 */
export const getValue = getValue_module;

import {default as gt_module} from './src/function/gt.mjs';


/**
 *  To check if the two arguments are greater
 *
 * @since 1.4.8
 * @category Predicate
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gt(1, 2)
 * // => false
 */
export const gt = gt_module;

import {default as gte_module} from './src/function/gte.mjs';


/**
 *  To check if the two arguments are greater than to equal
 *
 * @since 1.4.8
 * @category Predicate
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gte(1, 2)
 * // => false
 */
export const gte = gte_module;

import {default as has_module} from './src/function/has.mjs';


/**
 * Check if object has value or null or undefined
 *
 * @since 1.0.1
 * @category Predicate
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
export const has = has_module;

import {default as inc_module} from './src/function/inc.mjs';


/**
 * To Increment value
 *
 * @since 1.4.8
 * @category Math
 * @param {any} value Value you want to convert in array
 * @param {any=} default_value Value to want to start counting
 * @returns {number} Return in number.
 * @example
 *
 * inc(1)
 *=>2
 */
export const inc = inc_module;

import {default as ifElse_module} from './src/function/ifElse.mjs';


/**
 * If else condition logic, using curry callback, you now use this statement is function or objectt will if condition are met
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} cond Condition validation
 * @param {any} ifFunc if valid this function or arg will return
 * @param {any=} elseFunc else this function or arg will return
 * @returns {any} Returns the either ifFunc or elseFunc.
 * @example
 *
 * ifElse(__,(params,ss) => ss,(params,ss,s2) => {return s2)(true,1,2)
 * // => 1
 */
export const ifElse = ifElse_module;

import {default as indexOf_module} from './src/function/indexOf.mjs';


/**
 * Index of array
 *
 * @since 1.0.1
 * @category Logic
 * @param {any=} value Value in array
 * @param {any[]=} objectValue Array
 * @returns {number} Returns the index.
 * @example
 *
 * indexOf(1, [1,2])
 * // => 0
 */
export const indexOf = indexOf_module;

import {default as indexOfExist_module} from './src/function/indexOfExist.mjs';


/**
 * Check index of array is Exist or not
 *
 * @since 1.3.1
 * @category Predicate
 * @param {any=} value Value for array lookup
 * @param {any[]=} arrayObject Array
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfExist(32, [312])
 * // => false
 */
export const indexOfExist = indexOfExist_module;

import {default as indexOfNotExist_module} from './src/function/indexOfNotExist.mjs';


/**
 * Check index of array Not or exist
 *
 * @since 1.4.1
 * @category Predicate
 * @param {any=} value Value for array lookup
 * @param {any[]=} arrayObject Array
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfNotExist(32, [312])
 * // => true
 */
export const indexOfNotExist = indexOfNotExist_module;

import {default as insert_module} from './src/function/insert.mjs';


/**
 * Insert value in Json object or array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Either Json or array
 * @param {any} value Data you want to insert
 * @returns {null} Returns null
 * @example
 * var ss = {"A":1}
 * insert(ss,{'as':1})
 * // => {A: 1, as: 1}
 */
export const insert = insert_module;

import {default as isEmpty_module} from './src/function/isEmpty.mjs';


/**
 * Check if data is empty, null and undefined are now considered as empty
 *
 * @since 1.0.1
 * @category Predicate
 * @param {any} value JSON , Array and String
 * @returns {boolean} Returns true or false
 * @example
 *
 * isEmpty('')
 * // => true
 */
export const isEmpty = isEmpty_module;

import {default as isExact_module} from './src/function/isExact.mjs';


/**
 * Looking the data in JSON and Array base on object value
 *
 * @since 1.0.1
 * @category Predicate
 * @param {any} whereValue Json or Array
 * @param {any=} objectValue1 Json or Array for lookup to whereValue
 * @param {boolean=} isExist Default value is True
 * @returns {boolean|any} Returns the boolean if the has the value you are looking at.
 * @example
 *
 * isExact({"test2": 11},{"test": 11,"test2": 11})
 * // => true
 *
 * isExact({"s1:s2":2}, {"s1":{"s2":2}})
 * // => true
 */
export const isExact = isExact_module;

import {default as isExactbyRegExp_module} from './src/function/isExactbyRegExp.mjs';


/**
 * Looking the data in JSON and Array base on object value with the help regexp
 *
 * @since 1.0.1
 * @category Predicate
 * @param {any} whereValue Either Json or array
 * @param {any=} objectValue1 use as lookup data in data
 * @returns {boolean} Returns the boolean if the has the value with the help regexp you are looking at.
 * @example
 *
 * isExactbyRegExp({"test2": /\d/g}, {"test": 11,"test2": 11})
 * // => false
 */
export const isExactbyRegExp = isExactbyRegExp_module;

import {default as isJson_module} from './src/function/isJson.mjs';


/**
 * Is Json valid format
 *
 * @since 1.3.1
 * @category Predicate
 * @param {any} value Value you want to check JSON is Valid
 * @param {string=} valueType Get value type
 * @returns {any} Returns true or false if valid.mjson format
 * @example
 *
 * isJson({})
 *=> true
 */
export const isJson = isJson_module;

import {default as lastIndexOf_module} from './src/function/lastIndexOf.mjs';


/**
 * Get the last index Of array
 *
 * @since 1.0.1
 * @category Relation
 * @param {any} value Value you are searching for
 * @param {any} objectValue Array
 * @returns {any} Return get the index or array
 * @example
 *
 * lastIndexOf(1, [1,2])
 * // => 0
 */
export const lastIndexOf = lastIndexOf_module;

import {default as last_module} from './src/function/last.mjs';


/**
 * Get the last value of array or JSON
 *
 * @since 1.0.1
 * @category Relation
 * @param {any} objectValue The data is array
 * @returns {any} Returns last value of `objectValue`.
 * @example
 *
 * last([1,2] )
 *=>2
 */
export const last = last_module;

import {default as like_module} from './src/function/like.mjs';


/**
 * Searching the data either in array or.mjson object to get similar value of data
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValueWhere Data you want to search that is identical to key of object or array
 * @param {any} objectValue Json or Array
 * @returns {any} Return either Json to Array.
 * @example
 *
 * like({"s1":1}, {"s1":1,"s2":1})
 *=>{s1: 1, s2: 1}
 */
export const like = like_module;

import {default as limit_module} from './src/function/limit.mjs';


/**
 * Specify the limit, similar in splice bt the return was object to ensure the order are not shuffle and key is number format
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
export const limit = limit_module;

import {default as lt_module} from './src/function/lt.mjs';


/**
 * To check if the two arguments are less
 *
 * @since 1.4.8
 * @category Predicate
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * lt(1, 2)
 * // => true
 */
export const lt = lt_module;

import {default as lte_module} from './src/function/lte.mjs';


/**
 * To check if the two arguments are less than to equal
 *
 * @since 1.4.8
 * @category Predicate
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * lte(1, 2)
 * // => true
 */
export const lte = lte_module;

import {default as map_module} from './src/function/map.mjs';


/**
 * To map the value of.mjson or array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any=} func Callback function
 * @param {any=} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * map(function(value) { return value+2 } ,[1,2])
 *=> [3, 4]
 */
export const map = map_module;

import {default as mapGetData_module} from './src/function/mapGetData.mjs';


/**
 * A Function to map the data either an array or an object using getData function.
 *
 * @since 1.3.1
 * @category Collection
 * @param {string} valueFormat Key look up format
 * @param {any|any[]} objectValue Json in array format
 * @param {boolean=} isStrict to check if delimiter are match in counter, default value is true.
 * @returns {any|any[]} Return array or object.
 * @example
 *
 * mapGetData("Asd", [{"Asd":1}])
 *=>[1]
 */
export const mapGetData = mapGetData_module;

import {default as mergeInWhere_module} from './src/function/mergeInWhere.mjs';


/**
 * Merging two.mjson/array object with the help of where clause
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} whereValue where clause for you to merge the two set of data, where clause at `$1`  for `objectValue` and `$2`  for `mergeValue`
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeInWhere({"$1.id":"$2.id","$2.title":"test only"}, [{"s":23,"id":1}],[{"id":1,"title":"test only"}])
 *=> [{ "id":1, "s":23, "title":"test only"}]
 */
export const mergeInWhere = mergeInWhere_module;

import {default as multiply_module} from './src/function/multiply.mjs';


/**
 * Multiply logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for mutiplied value
 * @example
 *
 * multiply(1, 1)
 * // => 1
 */
export const multiply = multiply_module;

import {default as mergeWithKey_module} from './src/function/mergeWithKey.mjs';


/**
 * Merging two.mjson object
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge or replace from `objectValue`
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeWithKey({"s":1},{"ss":1})
 *=> {"s":1,"ss":1}
 */
export const mergeWithKey = mergeWithKey_module;

import {default as not_module} from './src/function/not.mjs';


/**
 * Check if data was not equal to true and 1
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} func Any type , take a note that it also supported curry, then please check it properly use in our doc
 * @returns {any} Returns filled value from its index
 * @example
 *
 * not(false)
 * // => true
 */
export const not = not_module;

import {default as noteq_module} from './src/function/noteq.mjs';


/**
 * To check if its not equal
 *
 * @since 1.4.8
 * @category Predicate
 * @param {any} value1 Any value type
 * @param {any} value2 Any value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * noteq('as', 'as')
 * // => false
 */
export const noteq = noteq_module;

import {default as onDelay_module} from './src/function/onDelay.mjs';


/**
 * @typedef {Object} DelayResult
 * @property {function(): void} cancel - Cancels the delay
 * @property {function(): void} start - Starts the delay
 */
export const onDelay = onDelay_module;

import {default as onSequence_module} from './src/function/onSequence.mjs';


/**
 * @typedef {Object} SequenceResult
 * @property {function(): void} cancel - Cancels the sequence
 * @property {function(): void} start - Starts the sequence
 */
export const onSequence = onSequence_module;

import {default as onWait_module} from './src/function/onWait.mjs';


/**
 * On wait
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {number=} wait timer for delay
 * @returns {object} Returns the total.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
export const onWait = onWait_module;

import {default as once_module} from './src/function/once.mjs';


/**
 * Check if data was executed once
 *
 * @since 1.4.9
 * @category Logic
 * @param {any} func Any value type, take a note that it also supported curry, then please check it properly use in our doc
 * @returns {any} Returns filled value from its index
 * @example
 *
 * once('as','as2',{'as':1})
 * // => 1
 */
export const once = once_module;

import {default as pSerialize_module} from './src/function/pSerialize.mjs';


/**
 * Create a serialize data if you are coming to php
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {string} Returns number for subtracted value
 * @example
 *
 * pSerialize(["22s"])
 * // => 'a:1:{i:0;s:3:"22s";}'
 */
export const pSerialize = pSerialize_module;

import {default as pUnSerialize_module} from './src/function/pUnSerialize.mjs';


/**
 * Create a serialize data if you are coming to php
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {any} Returns number for subtracted value
 * @example
 *
 * pUnSerialize('s:6:"Violet";')
 * // => 'Violet'
 */
export const pUnSerialize = pUnSerialize_module;

import {default as parseJson_module} from './src/function/parseJson.mjs';


/**
 * Parse string to JSON object with type conversion and correction
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} value Any type you want to convert to.mjson object
 * @param {any=} config Option for parse.mjson, it has disableCorrection to disable the correction and validation of.mjson string, invalidDefaultValue to set default value if the string is invalid or not string and throwError to determine if it will throw error or just return default value if the string is invalid or not string
 * @returns {any} Returns the.mjson object.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
export const parseJson = parseJson_module;

import {default as parseString_module} from './src/function/parseString.mjs';


/**
 * Parse from JSON object to String
 *
 * @since 1.4.86
 * @category
 * @param {any} value The Object that you want to convert to string in.mjson format.
 * @param {any=} config Option you want to set in this function.
 * @returns {string} Returns the string in.mjson format.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
export const parseString = parseString_module;

import {default as pipe_module} from './src/function/pipe.mjs';


/**
 * Perform left to right function composition. first arguemnt will be default value
 *
 * @since 1.4.86
 * @category Function
 * @param {...any?} arg Arguments in function
 * @returns {any} Returns any value.
 * @example
 *
 * pipe(Math.pow,add(1))(11,2)
 * // => 122
 */
export const pipe = pipe_module;

import {default as random_module} from './src/function/random.mjs';


/**
 * To create single random value from array
 *
 * @since 1.0.1
 * @category Array
 * @param {any} valueArray Array
 * @param {number} minValue Minimum value base on index
 * @param {number} maxValue  Max value base on index
 * @returns {string|number} Return string or number in array
 * @example
 *
 * random([10,20,30],0,3 )
 *=>'[20]'
 */
export const random = random_module;

import {default as range_module} from './src/function/range.mjs';


/**
 * Generate array of data from specific limit or where the index to start
 *
 * @since 1.0.1
 * @category Array
 * @param {number} maxValue Max value you to generate in array, default value 1
 * @param {number=} minValue Min value you to generate in array , default value 10
 * @param {string|number=} step  Specify the logic of increment or decrement
 * @returns {any[]} Return in array.
 * @example
 *
 * range(10)
 *=>[1,2,3,4,5,6,7,8,9,10]
 */
export const range = range_module;

import {default as reduce_module} from './src/function/reduce.mjs';


/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Function
 * @param {any} func Callback function for how to map the data
 * @param {any} defaultValue Starting value that you want to use as reference
 * @param {any[]} listData Array value that you want to map
 * @returns {any} Return redue value
 * @example
 *
 * reduce((total,value)=>total+value, 2,[1,2])
 * // => 5
 */
export const reduce = reduce_module;

import {default as regexCountGroup_module} from './src/function/regexCountGroup.mjs';


/**
 * Regex Count Group number
 *
 * @since 1.4.7
 * @category Function
 * @param {any} value Value you want to convert in array
 * @returns {number} Return in array.
 * @example
 *
 * regexCountGroup('/(abs|scs)@0@@1@/')
 *=>[1]
 */
export const regexCountGroup = regexCountGroup_module;

import {default as remove_module} from './src/function/remove.mjs';


/**
 * Remove data in either JSON or Array using key or woth value, a revise logic
 *
 * @since 1.4.85
 * @category Collection
 * @param {any} objectValue Json or array
 * @param {any} value if objectValue,.mjson is must be object or array index you want to remove
 * @param {number=} value2 Last row in index
 * @returns {any[]} Returns the total.
 * @example
 *
 * remove([1,2,3],0 )
 *=>[2, 3]
 */
export const remove = remove_module;

import {default as repeat_module} from './src/function/repeat.mjs';


/**
 * Repeat string value
 *
 * @since 1.0.1
 * @category String
 * @param {string=} value String you want to duplicate
 * @param {number=} valueRepetion how many times you want to repeate
 * @returns {string} Return in string or number.
 * @example
 *
 * repeat("s",1 )
 *=>'ss'
 */
export const repeat = repeat_module;

import {default as reverse_module} from './src/function/reverse.mjs';


/**
 * Return reverse order of array
 *
 * @since 1.4.9
 * @category Array
 * @param {any[]|string} value First number, our first index will start at zero
 * @returns {any} Returns it reverse order.
 * @example
 *
 * reverse([1,2,3,4])
 * // => [4,3,2,1]
 */
export const reverse = reverse_module;

import {default as roundDecimal_module} from './src/function/roundDecimal.mjs';


/**
 * Random Decimal
 *
 * @since 1.0.1
 * @category Math
 * @param {number} value Int or Double value type
 * @param {number=} precision limit decimal
 * @returns {number} Returns the total.
 * @example
 *
 * roundDecimal(11.1111111,3 )
 *=>11.111
 */
export const roundDecimal = roundDecimal_module;

import {default as selectInData_module} from './src/function/selectInData.mjs';


/**
 * Selecting multiple search data using `getData` logic in the loop
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} whereValue Collection or.mjson where `key` as suggested name of the key then `value` your target data, take a note on `value` it also supported nested key structure
 * @param {any} objectValue The data you want to map
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * selectInData({"ss":"s"}, {"s":1})
 *=> {"ss":1}
 */
export const selectInData = selectInData_module;

import {default as setData_module} from './src/function/setData.mjs';


/**
 * Set Data in array or.mjson using string to search the data either by its key or index, given a value to update the data.
 *
 * @since 1.4.87
 * @category Collection
 * @param {any=} split_str Search key or index.
 * @param {any=} objectValue Either Json or Array data.
 * @param {any=} updateValue Value to update the data.
 * @returns {any} Returns the total.
 * @example
 *
 * setData("s", {"s":1},2)
 *=> 2
 */
export const setData = setData_module;

import {default as shuffle_module} from './src/function/shuffle.mjs';


/**
 * Shuffle data in array
 *
 * @since 1.0.1
 * @update 1.4.86
 * @category Array
 * @param {any[]} objectValue Array argmuments that you want to shuffle
 * @returns {any[]} Shuffle return value in array
 * @example
 *
 * shuffle([1,2,3])
 *=>[2,3,1]
 */
export const shuffle = shuffle_module;

import {default as someValid_module} from './src/function/someValid.mjs';


/**
 * In array, you need to check all value atleast one true
 *
 * @since 1.4.8
 * @category Predicate
 * @param {...any?} arg List of value you need to check if some are true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * someValid(true, false)
 * // => true
 */
export const someValid = someValid_module;

import {default as sort_module} from './src/function/sort.mjs';


/**
 * Sort array
 *
 * @since 1.0.1
 * @category Array
 * @param {any[]} objectValue List of array you want to sort
 * @param {boolean=} order True for ascend then false for descend
 * @param {string=} type Callback function or sort type [any, lowercase, uppercase] default `any`
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
export const sort = sort_module;

import {default as sortBy_module} from './src/function/sortBy.mjs';


/**
 * Sort By function is used to sort an array of values.
 *
 * @since 1.4.87
 * @category Array
 * @param {Function} func Callback function or sort type
 * @param {any[]} objectValue List of array you want to sort
 * @returns {any[]} Returns the total.
 * @example
 *
 * sortBy((orderA, orderB) => orderA - orderB ,[2,3,1])
 *=>[1,2,3]
 */
export const sortBy = sortBy_module;

import {default as strCamel_module} from './src/function/strCamel.mjs';


/**
 * String Camel case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * strCamel('the fish is goad   with goat-1ss')
 *=> 'theFishIsGoadWithGoat1ss'
 */
export const strCamel = strCamel_module;

import {default as strCapitalize_module} from './src/function/strCapitalize.mjs';


/**
 * String Capitalize
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} option Type of captalize optional
 * @returns {string} Returns Capitalize sting data
 * @example
 *
 * strCapitalize('the fish is goad   with goat-1ss','all')
 *=> 'The Fish Is Goad   With Goat-1ss'
 * strCapitalize('the fish is goad   with goat-1ss')
 *=> 'The fish is goad   with goat-1ss'
 */
export const strCapitalize = strCapitalize_module;

import {default as strEscape_module} from './src/function/strEscape.mjs';


/**
 * String Escape
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} type Configuration
 * @returns {string} Returns escape string
 * @example
 *
 * strEscape("yahii & adad ^ss")
 *=> 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'
 */
export const strEscape = strEscape_module;

import {default as strKebab_module} from './src/function/strKebab.mjs';


/**
 * String Kebab case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns Kebab sting data
 * @example
 *
 * strKebab('the fish is goad   with goat-1ss')
 *=> 'the-fish-is-goad-with-goat-1ss'
 */
export const strKebab = strKebab_module;

import {default as strLower_module} from './src/function/strLower.mjs';


/**
 * String Lower case case
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * strLower('The fish is goad   with Goat-1ss')
 *=> 'the fish is goad   with goat-1ss
 */
export const strLower = strLower_module;

import {default as strSnake_module} from './src/function/strSnake.mjs';


/**
 * String Snake case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns Snake sting data
 * @example
 *
 * strSnake('the fish is goad   with goat-1ss')
 *=> 'the_fish_is_goad_with_goat_1ss'
 */
export const strSnake = strSnake_module;

import {default as strSubs_module} from './src/function/strSubs.mjs';


/**
 * String Substr
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @param {number} minValue minimum value
 * @param {number=} maxValue maximum value
 * @returns {string} Returns camel sting data
 * @example
 *
 * strSubs('The fish is goad   with Goat-1ss',4)
 *=> fish is goad   with Goat-1ss
 */
export const strSubs = strSubs_module;

import {default as strUnEscape_module} from './src/function/strUnEscape.mjs';


/**
 * String Unescape
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} type Configuration
 * @returns {string} Returns unescape string
 * @example
 *
 * strUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss')
 *=>"yahii & adad ^ss"
 */
export const strUnEscape = strUnEscape_module;

import {default as strUpper_module} from './src/function/strUpper.mjs';


/**
 * String Upper case case
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * strUpper('The fish is goad   with Goat-1ss')
 *=> 'THE FISH IS GOAD   WITH GOAT-1SS'
 */
export const strUpper = strUpper_module;

import {default as subtract_module} from './src/function/subtract.mjs';


/**
 * Subtract logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for subtracted value
 * @example
 *
 * subtract(1, 1)
 * // => 0
 */
export const subtract = subtract_module;

import {default as swap_module} from './src/function/swap.mjs';


/**
 * Swapping the value either string or array in there specific position
 *
 * @since 1.4.86
 * @category Collection
 * @param {number} firstValue The data you want to map
 * @param {number} secondValue data that you want to merge
 * @param {any[]|string} listValue Passing value either array or string
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * swap(0, 2, 'foo')
 *=> off
 */
export const swap = swap_module;

import {default as take_module} from './src/function/take.mjs';


/**
 * Get the value from index zero until the last value
 *
 * @since 1.4.86
 * @category Array
 * @param {number} value First number, our first index will start at zero
 * @param {any[]|string} valueList Second number
 * @returns {any} Returns choice index value in list.
 * @example
 *
 * take(1, [1])
 * // => 1
 */
export const take = take_module;

import {default as templates_module} from './src/function/templates.mjs';


/**
 * Template value
 *
 * @since 1.0.1
 * @category String
 * @param {string} templateString Template string
 * @param {any} data Parameter to replace
 * @param {any=} option The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 *  template("<!= test !>", {"test": 11})
 *=>'11'
 */
export const templates = templates_module;

import {default as toArray_module} from './src/function/toArray.mjs';


/**
 * To convert any data type(except the data has been already been an array) into array type
 *
 * @since 1.0.1
 * @category Array
 * @param {any} value Value you want to convert in array
 * @returns {any[]} Return in array.
 * @example
 *
 * toArray(1)
 *=>[1]
 */
export const toArray = toArray_module;

import {default as toBoolean_module} from './src/function/toBoolean.mjs';


/**
 * To extract string invalid boolean and convert to boolean
 *
 * @since 1.4.872
 * @category Boolean
 * @param {any} value Value you to convert in boolean
 * @returns {boolean} Return in boolean.
 * @example
 *
 * toBoolean("true")
 *=>true
 */
export const toBoolean = toBoolean_module;

import {default as toDouble_module} from './src/function/toDouble.mjs';


/**
 * To extract number in string and convert to double, it will also remove all none numeric
 *
 * @since 1.0.1
 * @category Number
 * @param {any} value Value you to convert in double
 * @param {any=} config Option you want to set in this function.
 * @returns {number} Return in double.
 * @example
 *
 * toDouble("100.1d1")
 *=>100.11
 */
export const toDouble = toDouble_module;

import {default as toInteger_module} from './src/function/toInteger.mjs';


/**
 * To extract number in string and convert to , it will also remove all none numeric
 *
 * @since 1.0.1
 * @category Number
 * @param {any} value Value you to convert in integer
 * @returns {number} Return in integer.
 * @example
 *
 * toInteger("11d")
 *=>11
 */
export const toInteger = toInteger_module;

import {default as toPairs_module} from './src/function/toPairs.mjs';


/**
 *  Converts an object into an array of key-value pairs. if the value is nested object, it will be converted to an array of key-value pairs recursively.
 *
 * @since 1.4.87
 * @category Collection
 * @param {any} value First number
 * @returns {any[]} Returns array
 * @example
 *
 * toPairs({"s":1,"ss":{"a":2}})
 * // => [["s",1],["ss",["a",2]]]
 */
export const toPairs = toPairs_module;

import {default as toString_module} from './src/function/toString.mjs';


/**
 * To String
 *
 * @since 1.4.5
 * @category String
 * @param {any=} value Value you to convert in double
 * @returns {string} Return in double.
 * @example
 *
 * toString(1)
 *=> '1'
 */
export const toString = toString_module;

import {default as trim_module} from './src/function/trim.mjs';


/**
 * String trim in removing whitespace both start and end
 *
 * @since 1.4.8
 * @category String
 * @param {string} value String data that you want to trim
 * @param {any=} remove_value Replace preferred value to remove
 * @returns {string} Returns trim data
 * @example
 *
 * trim(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss'
 */
export const trim = trim_module;

import {default as trimEnd_module} from './src/function/trimEnd.mjs';


/**
 * String trim at the end only
 *
 * @since 1.4.86
 * @category String
 * @param {string} value String data that you want to trim
 * @param {any=} remove_value Replace preferred value to remove
 * @returns {string} Returns trim data in end of string
 * @example
 *
 * trimEnd(' The fish is goad   with Goat-1ss ')
 *=> ' The fish is goad   with Goat-1ss'
 */
export const trimEnd = trimEnd_module;

import {default as trimStart_module} from './src/function/trimStart.mjs';


/**
 * String trim  at the start only
 *
 * @since 1.4.86
 * @category String
 * @param {string} value String data that you want to trim
 * @param {any=} remove_value Replace preferred value to remove
 * @returns {string} Returns trim data in start of string
 * @example
 *
 * trimStart(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss '
 */
export const trimStart = trimStart_module;

import {default as union_module} from './src/function/union.mjs';


/**
 * To create a new array that is the union of all the arrays passed as arguments. The union will contain only unique values.
 *
 * @since 1.4.7
 * @category Collection
 * @param {...any?} arg First number
 * @returns {any[]} Returns true or false.
 * @example
 *
 * union([1,2,3,4,7],[1,2,3,4,5,6,7,8])
 * // => [1, 2, 3, 4, 7, 5, 6, 8]
 */
export const union = union_module;

import {default as unique_module} from './src/function/unique.mjs';


/**
 * Get only the unique data from array
 *
 * @since 1.4.1
 * @category Array
 * @param {any} value Value you want to convert in array
 * @returns {any[]} Return in array.
 * @example
 *
 * unique([1,2,3,2,3])
 *=>[1,2,3]
 */
export const unique = unique_module;

import {default as varExtend_module} from './src/function/varExtend.mjs';


/**
 * Var extend was use in replacing from `objectValueReplace` if not existed at objectValue
 *
 * @since 1.0.1
 * @category Collection
 * @param {object} objectValue Json or Array that this serve as your default value if `objectValueReplace` does not exist
 * @param {object} objectValueReplace Json, Array or Object that you want to assign to `objectValue`
 * @returns {any} Return Json or Array or Object.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
export const varExtend = varExtend_module;

import {default as where_module} from './src/function/where.mjs';


/**
 * Get the value in array the value in.mjson given the search value was in.mjson
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValueWhere Data you want to search in key
 * @param {any=} objectValue Json to Array
 * @returns {any} Return either Json to Array.
 * @example
 *
 * where({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 * where([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":2}}]
 */
export const where = where_module;


/**
 *  Get the type if arguments
 *
 * @since 1.4.7
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isArguments(undefined)
 *=> true
 */
function isArguments_default (value) {

    return getTypeof(value) === "arguments";

}


/**
 *  Get the type if array
 *
 * @since 1.4.7
 * @category Predicate
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
 *  Get the type if bigInt
 *
 * @since 1.4.7
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isBigInt(undefined)
 *=> true
 */
function isBigInt_default (value) {

    return getTypeof(value) === "bigInt";

}


/**
 *  Get the type if boolean
 *
 * @since 1.4.7
 * @category Predicate
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
 * @category Predicate
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
 * @category Predicate
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
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isFunction(undefined)
 *=> true
 */
function isFunction_default (value) {

    return getTypeof(value) === "function";

}


/**
 *  Get the type if map
 *
 * @since 1.4.7
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isMap(new Map([['hello', 'world']]))
 *=> true
 */
function isMap_default (value) {

    return getTypeof(value) === "map";

}


/**
 *  Get the type if null
 *
 * @since 1.4.7
 * @category Predicate
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
 * @category Predicate
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
 * @category Predicate
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
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isPromise(undefined)
 *=> true
 */
function isPromise_default (value) {

    return getTypeof(value) === "promise";

}


/**
 *  Get the type if regexp
 *
 * @since 1.4.7
 * @category Predicate
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
 *  Get the type if set
 *
 * @since 1.4.7
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isSet(new Set(["a","b","c"]))
 *=> true
 */
function isSet_default (value) {

    return getTypeof(value) === "set";

}


/**
 *  Get the type if string
 *
 * @since 1.4.7
 * @category Predicate
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
 *  Get the type if uint16Array
 *
 * @since 1.4.7
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUint16Array(undefined)
 *=> true
 */
function isUint16Array_default (value) {

    return getTypeof(value) === "uint16Array";

}


/**
 *  Get the type if uint32Array
 *
 * @since 1.4.7
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUint32Array(undefined)
 *=> true
 */
function isUint32Array_default (value) {

    return getTypeof(value) === "uint32Array";

}


/**
 *  Get the type if uint8Array
 *
 * @since 1.4.7
 * @category Predicate
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUint8Array(undefined)
 *=> true
 */
function isUint8Array_default (value) {

    return getTypeof(value) === "uint8Array";

}


/**
 *  Get the type if undefined
 *
 * @since 1.4.7
 * @category Predicate
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


export const isArguments=isArguments_default;
export const isArray=isArray_default;
export const isBigInt=isBigInt_default;
export const isBoolean=isBoolean_default;
export const isDate=isDate_default;
export const isError=isError_default;
export const isFunction=isFunction_default;
export const isMap=isMap_default;
export const isNull=isNull_default;
export const isNumber=isNumber_default;
export const isObject=isObject_default;
export const isPromise=isPromise_default;
export const isRegexp=isRegexp_default;
export const isSet=isSet_default;
export const isString=isString_default;
export const isUint16Array=isUint16Array_default;
export const isUint32Array=isUint32Array_default;
export const isUint8Array=isUint8Array_default;
export const isUndefined=isUndefined_default;
import {default as zip_module} from './src/function/zip.mjs';


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists
 *
 * @since 1.4.86
 * @category Array
 * @param {...any?} arg First number
 * @returns {any} Returns true or false.
 * @example
 *
 * zip([1],[2],[3])
 * // => [[1,2,3]]
 */
export const zip = zip_module;

import {default as add_module} from './src/function/add.mjs';


/**
 * Addition logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for added value
 * @example
 *
 * add(1, 1)
 * // => 2
 */
export const add = add_module;

