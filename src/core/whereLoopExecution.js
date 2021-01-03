import count from '../function/count';
import getTypeof from '../function/getTypeof';
import each from '../function/each';
import getJSONVariable from '../function/getJSONVariable';
import isExact from '../function/isExact';
import has from '../function/has';
import append from '../function/append';

function whereLoopExecution(jsn,whr,func,is_where){
	
	
	var jsn_val={};
	
	var jsn_s=(count(jsn,true)==0)?((getTypeof(jsn)=="array")?jsn:[jsn]):jsn;
	var whr_s=whr||{};
	var variable=getJSONVariable(jsn);
	
	each(jsn_s,function(jk,jv){
		
		if(getTypeof(jsn)=="array"){
			filter = [jv];
		}else{
			var filter = {};
			filter[jk]=jv;
		}
		
		if(isExact(filter,whr_s,is_where)){
			
			append(variable,jv,jk);
			if(has(func)){
				func(jv,jk);
			}
			
		}
	});
	
	return variable;
	
}
export default whereLoopExecution;
