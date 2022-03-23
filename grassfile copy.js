const list_package_utility_js = ["src/function/*.js"];
const list_package_utility_js1 = ["src/*/*.js"];

const ref ='';
const rename = require("gulp-rename");

exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");
    const grass_packpier = grassconf.require("grass_packpier");
    const packpier_ext_import_file = grassconf.require("packpier-ext-import-file");


    grassconf.load("cjs", function () {

        return grassconf.src(list_package_utility_js)
            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly"},
                "convertType": "cjs"
            }))
            .pipe(grass_concat("dist_exp/cjs/node.cjs"+ref+".js", {
                "istruncate": true
            }));

    });

    grassconf.load("cjs2", function () {

        return grassconf.src(list_package_utility_js1)
            .pipe(grass_packpier({
                "config": {"mainType": "convertExportToRequire"},
                "convertType": "cjs"
            }))
            .pipe(grassconf.dest("dist_exp/cjs/", {
                "lsFileType": "path"
            }));

    });


    grassconf.load("ts", function () {

        return grassconf.src(list_package_utility_js)
            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly"},
                "convertType": "typescript"
            }))
            .pipe(grass_concat("dist_exp/ts/index.d.ts", {
                "istruncate": true
            }));

    });

    grassconf.load("ts2", function () {

        return grassconf.src(list_package_utility_js)
            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly",
                    "prefixPath": "./"
                },
                "convertType": "typescript"
            }))
            .pipe(rename(function (path) {
                // Updates the object in-place
               // path.dirname += "/ciao";
               // path.basename += "-goodbye";
                path.extname = ".d.ts";
              }))
            .pipe(grassconf.dest("dist_exp/ts/src/", {
                //"lsFileType": "path"
            }));

    });


    grassconf.load("esm", function () {

        return grassconf.src(list_package_utility_js)

            .pipe(grass_packpier({
                "output": {
                    "format": "esm"
                },
                "plugin": [packpier_ext_import_file()]

            }))
            .pipe(grass_concat("dist_exp/node.es"+ref+".js", {
                "istruncate": true
            }));


    });


    grassconf.load("web_cjs", function () {


        return grassconf.src(list_package_utility_js)

            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly",
                    "moduleName": "_stk"},
                "convertType": "iife"

            }))
            .pipe(grass_concat("dist_exp/web/structkit-full"+ref+".cjs.js", {
                "istruncate": true
            }));


    });


    grassconf.load("esm_list", function () {

        return grassconf.src(list_package_utility_js1)
            .pipe(grass_packpier({
                "config": {"mainType": "convertExportToRequire"},
                "convertType": "cjs"
            }))
            .pipe(grassconf.dest("dist_exp/esm/", {
                "lsFileType": "path"
            }));

    });


};

exports.execute=function (lib) {

    lib.default=function (strm) {

        strm
           // .series("cjs")
           // .series("cjs2")
            //.series("ts")
           // .series("ts2")
            .series("esm");
           // .series("web_cjs");
           //.series("esm_list");

    };

    return lib;

};

