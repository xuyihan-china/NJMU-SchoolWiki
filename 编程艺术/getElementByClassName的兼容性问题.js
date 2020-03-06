function getElementByClassName(node,classname){
	if(node.getElementByClassName){
		return node.getElementByClassName(classname);
	}
	else{
		var result = new Array;
		var elems = node.getElementsByTagName("*");//elems以数组的方式存放了所有的标签名字
		for(var i=0 ;i<elems.lengh;i++){//遍历所有的数组元素
			if (elems[i].className.indexOf(classname) != -1){//indexOf 方法返回字符串首次出现的位置 不存在返回-1
			//className 返回元素的class属性
				result[result.length] = elems[i];//resultlength从 0 开始 有元素加入就加一
			}
		}
		return results;//最后返回result数组
	}
}