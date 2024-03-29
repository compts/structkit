const list_package_utility_js = ["src/function/*.js"];
const list_package_utility_js1 = ["src/*/*.js"];


exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");

    const packpier = grassconf.require("packpier");
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
                "plugin": [cjsToEsmFileNameOnly()]

            }
        )
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
                "plugin": []
            }
        )
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

