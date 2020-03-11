function displayAbbreviations(){
    var abbreviations = document.getElementsByTagName("abbr");/* 这是一个数组 */
    if(abbreviations.length<1){
        return false;
    }
    var defs = new Array();
    for (var i=0;i<abbreviations.length;i++){
        var definition = abbreviations[i].getAttribute("title");
        var key= abbreviations[i].lastChild.nodeValue;/* abbr这是获取里面的内容 */
        defs[key]=definition;//关联数组
    }

}