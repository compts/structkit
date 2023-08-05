# Structkit
[![NPM version][npm-image]][npm-url] 

[Site](https://structkit.codehyouka.xyz/) |
[Docs](https://structkit.codehyouka.xyz/docs) |

## Download

To download this JS library and install in your local library
 * [Core build](https://raw.githubusercontent.com/compts/structkit/main/dist/web/structkit-full.iife.js) ([~60KB](https://raw.githubusercontent.com/compts/structkit/main/dist/web/web/structkit-full.iife.js))

Using npm to install in your project folder:
```shell
$ npm i structkit
```
## Requirement
You need to install this in your machine to compile in your machine
```bash
npm install grasseum -g
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
[npm-image]: https://img.shields.io/badge/structkit-1.4.1.1-brightgreen
