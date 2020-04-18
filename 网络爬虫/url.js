let url =require('url');
console.log(url);
let httpUrl = 'http://nodejs.cn/api/path/path_extname_path.html';
let urlObj=url.parse(httpUrl);//parse把网页文件拆分
console.log(urlObj);

