let fs =require('fs');
fs.unlink('text2.txt',function(){
    console.log('删除成功');
})