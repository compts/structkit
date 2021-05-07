const list_package_utility_js = ["src/function/*.js"];
const list_package_utility_js1 = ["src/*/*.js"];

const ref ='';

exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");
    const compts_script_interpreter = grassconf.require("compts-script-interpreter");


    grassconf.load("cjs", function () {

        return grassconf.src(list_package_utility_js)

            .pipe(compts_script_interpreter.esm_to_cjs_require({

                "outputType": "main"
            }))
            .pipe(grass_concat("dist/cjs/node.cjs"+ref+".js", {
                "istruncate": true,
                "main_file": "/src/a_test_import.js"
            }));

    });

    grassconf.load("cjs2", function () {

        return grassconf.src(list_package_utility_js1)

            .pipe(compts_script_interpreter.esm_to_cjs_require({

                "outputType": "convert_to_require"

            }))
            .pipe(grassconf.dest("dist/cjs/", {
                "lsFileType": "path"
            }));

    });


    grassconf.load("esm", function () {


        return grassconf.src(list_package_utility_js)

            .pipe(compts_script_interpreter.esm({

            }))
            .pipe(grass_concat("node.es"+ref+".js", {
                "istruncate": true,
                "main_file": "/src/a_test_import.js"
            }));


    });


    grassconf.load("web_cjs", function () {


        return grassconf.src(list_package_utility_js)

            .pipe(compts_script_interpreter.esm_to_cjs({
                "globalName": "_stk",
                "isWeb": true
            }))
            .pipe(grass_concat("dist/web/structkit-full"+ref+".cjs.js", {
                "istruncate": true,
                "main_file": "/src/a_test_import.js"
            }));


    });

    grassconf.load("new_esm", function () {


        return grassconf.src(list_package_utility_js)

            .pipe(compts_script_interpreter.new_esm({

            }))
            .pipe(grass_concat("dist/node.new_esm"+ref+".js", {
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

