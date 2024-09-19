# Structkit
Javascript framework in using functional syntax for programmer.

[![NPM version][npm-image]][npm-url] 
[![NPM version][npm-ts-image]][npm-url-ts] 
[![Build Status](https://github.com/compts/structkit/actions/workflows/cicd.yaml/badge.svg?branch=main)](https://github.com/compts/structkit/actions)

[Site](https://structkit.codehyouka.xyz/) |
[Docs](https://structkit.codehyouka.xyz/api) |

## Why Structkit
A Javascript library that make easier in working with arrays, number,object, String and etc.

## Download

To download this JS library and install in your local library
 * [Core build](https://raw.githubusercontent.com/compts/structkit/main/dist/web/structkit-full.iife.js) ([~74KB](https://raw.githubusercontent.com/compts/structkit/main/dist/web/structkit-full.iife.js))

Using npm to install in your project folder:
```shell
$ npm i structkit
```

Due to conflict in Typescript and ES, it was decided to separate in separate package for typescript(Still working in progess)
```shell
$ npm i structkit-ts
```


## How to import the Library

In a browser :
```html
<script src="structkit-full.iife.js"></script>
```

Import on cjs
```bash
const {repeat} = require('structkit');

```

Import on ESM or TS
```bash
import {repeat} from 'structkit';

```

## Example

In a browser
```html
_stk.repeat("1",20)
//11111111111111111111
```
keep in mind `_stk` is used as global library at html


CJS, ESM and TS use this code below
```bash
repeat("1",20)
//11111111111111111111
```

If you are familiar in curry function, good thing structkit is now also supported.
```bash
test = repeat(__,20)
test("1")
//11111111111111111111
```
In the example you noticed that we can apply and arguments if we are unsure of possible that you need to pass as well no need to create a function just for value only

[npm-url]: https://www.npmjs.com/package/structkit
[npm-url-ts]: https://www.npmjs.com/package/structkit-ts
[npm-image]: https://img.shields.io/badge/structkit-1.4.86-brightgreen
[npm-ts-image]: https://img.shields.io/badge/structkit:ts-1.4.8-brightgreen


## Partial sampe you can use as your utitlity function

[get the first index of array](#first-index-of-array)
``` javascript
first([2,3,4,5])// 2
```

[get the last index of array](#last-index-of-array)
``` javascript
last([2,3,4,5])// 5
```

[get start and end of array index](#slice-array-index)
``` javascript
arraySlice([1,2],1)// [2]
```

[get sum of array](#get-sum-of-array)
``` javascript
arraySum([1,2])// 3
```
