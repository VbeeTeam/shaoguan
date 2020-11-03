
function $(id){
	return document.getElementById(id);
}

//获取随机的颜色值 rgb(0,0,0,0.1)
function getColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b},${0.7})`;
}