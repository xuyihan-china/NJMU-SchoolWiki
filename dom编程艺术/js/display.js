function displayAbbreviations(){
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    /* 检查兼容性 */
    var abbreviations = document.getElementsByTagName("abbr");/* 这是一个数组 用到类数组的好像必须要加上第几个元素 */
    if(abbreviations.length<1){
        return false;
        /* 看看有没有获取到abbr */
    }
    var defs = new Array();
    for (var i=0;i<abbreviations.length;i++){
        var definition = abbreviations[i].getAttribute("title");
        var key= abbreviations[i].lastChild.nodeValue;/* abbr这是获取里面的内容 */
        defs[key]=definition;/* 关联数组 缩写 = 不缩写的内容 */
    }
    var dlist = document.createElement("dl");
    /* 遍历关联数组的方式
    key(element) in defs (array)
    */
    for(key in defs){
        var definition = defs[key];
        var dtitle = document.createElement("dt");//创建dom树下的4个节点
        var dtitle_text = document.createTextNode(key);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        dtitle.appendChild(dtitle_text);//把文本加给dd dt
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);//把dd dt 加给dl
    }
    var header = document.createElement("h2");
    var header_text =document.createTextNode("Abbreviations");//如果要添加文字就要用document.createTextNode
    header.appendChild(header_text);//然后用appendChild加上
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
    addLoadEvent(displayAbbreviations);  //调用函数

    
function displayCitations(){
    var quotes = document.getElementsByTagName("blockquote");
    for(var i=0 ;i<quotes.length; i++){
        if(!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        /* 获取block的最后一个元素 */
        var quotesChildren = quotes[i].getElementsByTagName("*");
        if(quotesChildren.length<1) continue;
        var elem = quotesChildren[quotesChildren.length-1];/* 获取最后一个元素 */
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);