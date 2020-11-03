

//获取某个DOM对象的样式属性(兼容性函数)
//参数：
//DOM对象
//样式属性名
//返回值：就是样式属性值

function getStyle(domObj,attr){
	//if(window.navigator.userArgent.indexOf("")){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		//return window.getComputedStyle(domObj)[attr];
		var obj  = window.getComputedStyle(domObj);
		return obj[attr];
	}
}