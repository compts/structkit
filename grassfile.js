const list_package_utility_js =  [ 
  "src/function/*.js",
  
];




exports.module=function(grassconf){   
  var grass_concat = grassconf.require("grass_concat")  
  var compts_script_interpreter = grassconf.require("compts-script-interpreter");
  
  
  grassconf.load("cjs",function(test){
    
    
    return grassconf.src(list_package_utility_js)
    //    .pipe(grass_composer( {
    //      "banner":{
    //        "header":"(function(window){ \n" +
    //        " /** \n" +
    //        " /* This program was writtern by pein freccs. \n" +
    //        " /* Please check my repository for more details and update \n" +
    //        " /* https://github.com/compts/compts \n"+
    //        " **/ \n",
    //        "footer":"\n })(window);"
    //        
    //      }//,main_file:__dirname+"/src/a_test_import.js"
    //    } ) )
    .pipe(compts_script_interpreter.esm_to_cjs( {
        "isWeb":false,
    }))
    .pipe(grass_concat(__dirname+"/dist/node.cjs.js",{
      istruncate:true,
      main_file:__dirname+"/src/a_test_import.js"
    }) );
    
    
  });


  
  grassconf.load("esm",function(test){
    
    
    return grassconf.src(list_package_utility_js)
    //    .pipe(grass_composer( {
    //      "banner":{
    //        "header":"(function(window){ \n" +
    //        " /** \n" +
    //        " /* This program was writtern by pein freccs. \n" +
    //        " /* Please check my repository for more details and update \n" +
    //        " /* https://github.com/compts/compts \n"+
    //        " **/ \n",
    //        "footer":"\n })(window);"
    //        
    //      }//,main_file:__dirname+"/src/a_test_import.js"
    //    } ) )
    .pipe(compts_script_interpreter.esm( {
      
    }))
    .pipe(grass_concat(__dirname+"/dist/node.es.js",{
      istruncate:true,
      main_file:__dirname+"/src/a_test_import.js"
    }) );
    
    
  });


  grassconf.load("web_cjs",function(test){
    
    
    return grassconf.src(list_package_utility_js)
    //    .pipe(grass_composer( {
    //      "banner":{
    //        "header":"(function(window){ \n" +
    //        " /** \n" +
    //        " /* This program was writtern by pein freccs. \n" +
    //        " /* Please check my repository for more details and update \n" +
    //        " /* https://github.com/compts/compts \n"+
    //        " **/ \n",
    //        "footer":"\n })(window);"
    //        
    //      }//,main_file:__dirname+"/src/a_test_import.js"
    //    } ) )
    .pipe(compts_script_interpreter.esm_to_cjs( {
        "isWeb":true,
    }))
    .pipe(grass_concat(__dirname+"/dist/web/web-full.cjs.js",{
      istruncate:true,
      main_file:__dirname+"/src/a_test_import.js"
    }) );
    
    
  });
  
} 

exports.execute=function( lib ){   
  lib.default=function(strm){
    strm.series("cjs")
    .series("esm")
    .series("web_cjs");
  }  
  return lib;    
}       

