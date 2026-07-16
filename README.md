# Structkit
JS/TS functional tool to simplify JS Developer

---
# ⚠️ WARNING: MASSIVE CHANGES INCOMING ⚠️
**Version 1.4.9-rc.0 is a major rewrite with numerous breaking changes.**

Please read the complete [Changelog](CHANGELOG.md) and [Upgrade Guide](UPGRADE_GUIDE.md) carefully before proceeding. The changes are substantial and will likely affect existing implementations.

---

[![NPM version][npm-image]][npm-url]
[![Build Status](https://github.com/compts/structkit/actions/workflows/cicd.yaml/badge.svg?branch=main)](https://github.com/compts/structkit/actions)
[![NPM Downloads](https://img.shields.io/npm/dm/structkit?logo=npm&style=flat-square)](https://npmtrends.com/structkit)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://jsr.io/@compts/structkit)
[![Install Size](https://packagephobia.now.sh/badge?p=structkit)](https://packagephobia.now.sh/result?p=structkit)

[Site](https://structkit.codehyouka.xyz/) |
[Docs](https://structkit.codehyouka.xyz/api) |

## Why Structkit
A Javascript functional that make easier in working with arrays, number,object, String and etc.

## Download

To download this JS library and install in your local library
 * [Core build](https://raw.githubusercontent.com/compts/structkit/main/dist/web/structkit-full.iife.js) ([~143KB](https://raw.githubusercontent.com/compts/structkit/main/dist/web/structkit-full.iife.js))

Using npm to install in your project folder:
```shell
$ npm i structkit
```

If you want to try to Deno
```shell
$ deno add jsr:@compts/structkit

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
[npm-image]: https://img.shields.io/badge/structkit-1.4.9.rc.0-brightgreen


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
