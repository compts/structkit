const structkit = require('./src/node.cjs');
const types = require('./src/variable/types');

const list_package_utility_js = ["src/function/*.js"];
const list_package_utility_js1 = ["src/*/*.js"];

const listOfType = {
    "array": "[]",
    "boolean": "true",
    "date": "new Date()",
    "error": "new Error()",
    "null": "null",
    "number": "1",
    "object": "{}",
    "regexp": "/(1)/g",
    "string": "'string'",
    "undefined": "undefined"
};

/**
 *  Get the type if
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} objectCallTypeAll Pass any value to check its type
 * @param {any} suffix Pass any value to check its type
 * @returns {string} Return either Json to Array.
 * @example
 *
 *
 *=> true
 */
function isTypeFunction (objectCallTypeAll, suffix) {

    let stringCnt = '';

    structkit.each(objectCallTypeAll, (value) => {

        const name = 'is'+structkit.stringCapitalize(value);

        stringCnt += `
/**
 *  Get the type if ${value}
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * ${name}(${structkit.ifUndefined(listOfType, value, '')})
 *=> true
 */
`;

        stringCnt +='function '+name+suffix+' (value) {\n\n';
        stringCnt +='    return getTypeof(value) === "'+value+'";\n\n';
        stringCnt +='}\n\n';

    });

    return stringCnt;

}
exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");
    const {convertIifeFunction} = grassconf.require("pack-extract");

    const packpier = grassconf.require("packpier");

    const objectCallTypeAll = structkit.getValue(types.objectCallTypeAll);

    const {cjsFileNameOnlyImportOnly, cjsToEsmFileNameOnly} = grassconf.require("pirate-pack-js");


    grassconf.load("esm", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "path": list_package_utility_js1
                },
                "output": {
                    // Esm,cjs,iife,
                    "type": "esm"
                }
            }
        )
            .pipe(grassconf.dest("dist/esm", {
                "lsFileType": "path"
            }));

    });

    grassconf.load("esm_only", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "path": list_package_utility_js
                },
                "output": {
                    // Esm,cjs,iife,
                    "type": "cjs"
                },
                "plugin": [
                    {
                        "name": "webIIfe",
                        "transform": () => null,
                        "transformFirstFile": () => null,
                        "transformLastFile": () => null
                    },
                    cjsToEsmFileNameOnly({"isAddComment": true})
                ]

            }
        ).pipe(grassconf.streamPipe(function (data) {

            const getData = data.readData();


            if (data.path === 'src/function/whereNot.js') {


                data.writeData(getData+""+isTypeFunction(objectCallTypeAll, '_default')+"\n"+ structkit.map(objectCallTypeAll, function (value) {

                    const name = 'is'+structkit.stringCapitalize(value);

                    return "export const "+name+"="+name+"_default;";

                }).join("\n")+"\n");

            }

            data.done();

        }))
            .pipe(grass_concat("dist/esm/node.esm.js", {
                "istruncate": true
            }));

    });

    grassconf.load("cjs_only", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "path": list_package_utility_js1
                },
                "output": {
                    // Esm,cjs,iife,
                    "type": "cjs"
                },
                "plugin": [
                    {
                        "name": "webIIfe",
                        "transform": () => null,
                        "transformFirstFile": () => null,
                        "transformLastFile": () => isTypeFunction(objectCallTypeAll, '_default')+"\n"+ structkit.map(objectCallTypeAll, function (value) {

                            const name = 'is'+structkit.stringCapitalize(value);

                            return "exports."+name+"="+name+"_default;";

                        }).join("\n")+"\n"

                    },
                    cjsFileNameOnlyImportOnly({
                        "replacePath": (file) => file.replace(/(src\/)/g, "")
                    })
                ]
            }
        )
            .pipe(grass_concat("src/node.cjs.js", {
                "istruncate": true
            }));

    });

    grassconf.load("web_iife", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "path": list_package_utility_js
                },
                "output": {
                    "globalName": "_stk",
                    "type": "iife"
                },
                "plugin": [
                    {
                        "name": "webIIfes",
                        "transform": (config) => {

                            if (config.currentPath === 'src/function/whereNot.js') {

                                return config.content+'\n'+isTypeFunction(objectCallTypeAll, '')+"\n"+structkit.map(objectCallTypeAll, function (value) {

                                    const name = 'is'+structkit.stringCapitalize(value);

                                    return "_stk."+name+"="+name+";";

                                }).join("\n");

                            }

                            return config.content;

                        },
                        "transformFirstFile": () => null,
                        "transformLastFile": () => null
                    }
                ]
            }
        ).pipe(grassconf.streamPipe(function (data) {

            let getData = data.readData();


            getData = getData.replace("(function(global){\nglobal._stk={};", "const _stk = exports;");

            getData = getData.replace('})(typeof window !== "undefined" ? window : this);', "\n //end of file");
            data.writeData(getData);
            data.done();

        }))
            .pipe(grass_concat("dist/cjs/structkit-full.cjs.js", {
                "istruncate": true
            }))

            .pipe(grassconf.streamPipe(function (data) {

                let getData = data.readData();

                getData = convertIifeFunction(getData, true);
                getData = getData.replace("const _stk = exports;", "(function(global){\nglobal._stk={};");
                getData = getData.replace("//end of file", '})(typeof window !== "undefined" ? window : this);');
                getData = getData.replace(/([\s\n\r\t]{0,})(const|let)\s{1,}/g, "$1var ");
                data.writeData(getData);
                data.done();

            }))
            .pipe(grass_concat("dist/web/structkit-full.iife.js", {
                "istruncate": true
            }));

    });

};

exports.execute=function (lib) {

    lib.default=function (strm) {


        strm.series("web_iife");
        strm.series("esm");
        strm.series("esm_only");
        strm.series("cjs_only");

    };

    return lib;

};

