 
	function showpic(taga){
		                
						var source =taga.getAttribute("href");
						var placeholder = document.getElementById("placeholder");
						placeholder.setAttribute("src",source);
						var text = taga.getAttribute("title");
						var discription = document.getElementById("discription");
						/* nodevalue 可以设置或者获取一个节点的值 */
						discription.firstChild.nodeValue = text;
					}
	window.onload=function(){ //这是一个点击跳弹窗的函数 与主题无关 掌握open的方法
		function preparelinks(){
			var links = document.getElementsByTagName("a");
			for(var i=0 ; i<links.length ; i++ ){
				if(links[i].getAttribute("class") == "popup"){//如果属性值为popup 执行函数 判断class是否为popup
					link[i].onclick = function(){
						popup(this.getAttribute("href"));//调用超链接的地址
						return false;
					}
				}
			}
		}
	}
	function popup(winURL){
		window.open(winURL,"popup","width=320,height=480"); //
		//open 函数是属于bom的案例 第一个参数是网页URL的地址  第二个参数是新窗口的名字 第三个参数是弹出窗口的属性 大小等
	}
	/* function count(){
		var bodyelelements = document.getElementsByTagName("body")[0];
	   childnodes 里有一个nodetype 可以更具nodetype值来判断里面的节点  
       判断只对里面特定的节点起作用 元素.nodevalue 可以获取元素内的值
	   这些都是用元素来调用
	}
	count(); */
	//完整代码 完善的代码
	function prepareGallery(){
		if(!document.getElementsByName()) return false;//如果浏览器不存在这些方法就劝退
		if(!document.getElementById()) return false;//如果浏览器不存在这些方法就劝退
		if(!document.getElementById("imagegallery")) return false;//如果浏览器不存在这些方法就劝退
		var gallery =document.getElementById("imggegallery");
		var links = gallery.getElementsByTagName("a"); //links中获取了所有的a标签 返回类数组
		for(var i=0 ; i<links.length ; i++){
			links[i].onclick = function(){
				return shoupic(this) ? false : right;  //如果showpic存在就阻止默认行为 所以为false 如果不存在就弹出一个空白的窗口
			}
		}
	    
	}
	function showpic(whichpic){
		if(!document.getElementById("placeholder")) return false;
		var source = whichpic.getAttribute("href");//获取href属性
		var placeholder = document.getElementById("placeholder"); 
		if(placeholder.nodeName !=  "IMG") return false;
		placeholder.setAttribute("src",source);
		if(document.getElementById("discription")){//这是一个p标签 看看是否存在discription标签 discription 只有一个标签
			var text = whichpic.getAttribute("title") ? getAttribute("title"): "";//如果whichpic.getAttribute("title")有title就赋值 不然就赋值为空串
			var discription = document.getElementById("discription");  //获取文本id discription
			if(discription.firstChild.nodeType == 3){     //判断nodetype是不是一个文本节点 文本节点是3 属性是2 元素是1        
				discription.firstChild.nodeValue = text;  //text中获取了title的值 
			}
			return true;//如果获取失败 就执行函数的默认行为
		}
	}