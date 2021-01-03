import indexOf from '../function/indexOf';
import each from '../function/each';
import count from '../function/count';
const getKeyVal =function(jsn,typ){
	
	
	var typ_s=typ,ky=[],vl=[];
	var list_raw = [];
	each(jsn,function(kk,vv){
		ky.push(kk);vl.push(vv);
		list_raw.push({
			"key":kk,
			"value":vv
		});
	});
	if(indexOf(["key","value"],typ )>-1 ){
		var ars=(typ=="key")?ky:vl;
		return (count(ars)==1)?ars[0]:ars;		
	}
	if(typ =="first_index"){
		return count(list_raw)>0?list_raw[0]:null;
	}
	if(typ =="last_index"){
		return count(list_raw)>0?list_raw[ count(list_raw)-1 ]:null;
	}
	
}
export default getKeyVal;
