let url =require('url');
console.log(url);
let httpUrl = 'http://nodejs.cn/api/path/path_extname_path.html';
let urlObj=url.parse(httpUrl);//parse把网页文件拆分
console.log(urlObj);//解析网址

//还可以合成网址 resolve 
let target = "http://www.taobao.com/";
httpUrl= "./sxt/xuyihan.html";
/* 自己还要去掉相对路径的。/ resolve不用 */
let newUrl = url.resolve(target,httpUrl);
console.log(newUrl);

/* axios 请求 ajax vue 库   axios库 vue的创始人  */