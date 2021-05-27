const list_package_utility_js = ["src/function/*.js"];
const list_package_utility_js1 = ["src/*/*.js"];

const ref ='';

exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");
    const grass_packpier = grassconf.require("grass_packpier");

    grassconf.load("cjs", function () {

        return grassconf.src(list_package_utility_js)
            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly"},
                "convertType": "cjs"
            }))
            .pipe(grass_concat("dist/cjs/node.cjs"+ref+".js", {
                "istruncate": true,
                "main_file": "/src/a_test_import.js"
            }));

    });

    grassconf.load("cjs2", function () {

        return grassconf.src(list_package_utility_js1)
            .pipe(grass_packpier({
                "config": {"mainType": "convertExportToRequire"},
                "convertType": "cjs"
            }))
            .pipe(grassconf.dest("dist/cjs/", {
                "lsFileType": "path"
            }));

    });


    grassconf.load("esm", function () {


        return grassconf.src(list_package_utility_js)

            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly",
                    "prefixPath": "../"},
                "convertType": "es6"
            }))
            .pipe(grass_concat("dist/node.es"+ref+".js", {
                "istruncate": true,
                "main_file": "/src/a_test_import.js"
            }));


    });


    grassconf.load("web_cjs", function () {


        return grassconf.src(list_package_utility_js)

            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly",
                    "moduleName": "_stk"},
                "convertType": "iife"

            }))
            .pipe(grass_concat("dist/web/structkit-full"+ref+".cjs.js", {
                "istruncate": true,
                "main_file": "/src/a_test_import.js"
            }));


    });

};

exports.execute=function (lib) {

    lib.default=function (strm) {

        //  Strm.series("new_esm");
        strm
            .series("cjs")
            .series("cjs2")
            .series("esm")
            .series("web_cjs");

    };

    return lib;

};

