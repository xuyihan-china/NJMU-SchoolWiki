let request =require('request');
let httpUrl='https://www.dy2018.com/?__wangan=38358d0dd34c8a98930467522f1a4f5ab1488806044_24245';
Request.get(httpUrl,{
    // headers:{"upgrade-insecure-requests: 1,user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"}
}).then(function(err,res,body){
    console.log(err);
    
    console.log(res);
    console.log(body);
    
});//请求数据 网址
