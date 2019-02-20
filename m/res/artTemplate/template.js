
function template_tool (str,obj) {
	// 正则表达式
	var reg = /\w+/;

	// 挖坑字符串
	var str=str;

	// 填坑数组
	var obj=obj;

	// 索引
	var result;

	// 检测正常 筛选
	while (result=reg.exec(str)) {
		// 索引
		var key=result[0];
		var value=obj[key];
		// 替换
		str=str.replace(key,value);	
	}

	return str;
}


// 升级版

function template_pro (str,obj) {
	var reg=/{{(\w+)}}/;

	var str=str;

	var obj=obj;

	var result;

	while (result=reg.exec(str)) {
		var key=result[1];
		var value=obj[key];
		str=str.replace(result[0],value);
	}
	return str;
}