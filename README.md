# Structkit
[![NPM version][npm-image]][npm-url] 

[Site](https://structkit.codehyouka.xyz/) |
[Docs](https://structkit.codehyouka.xyz/api) |

## Download

To download this JS library and install in your local library
 * [Core build](https://raw.githubusercontent.com/compts/structkit/main/dist/web/structkit-full.iife.js) ([~60KB](https://raw.githubusercontent.com/compts/structkit/main/dist/web/web/structkit-full.iife.js))

Using npm to install in your project folder:
```shell
$ npm i structkit
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
```
keep in mind `_stk` is used as global library at html


CJS, ESM and TS use this code below
```bash
repeat("1",20)

```



[npm-url]: https://www.npmjs.com/package/structkit
[npm-image]: https://img.shields.io/badge/structkit-1.4.7-brightgreen


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
arraySum([1,2])// 3.00
```
