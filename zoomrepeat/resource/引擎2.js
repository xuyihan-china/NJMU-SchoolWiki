var template = require('art-template');
// template('script 标签 id',{对象});
//怎么用！
//template.render('模板字符串',{{对象}});
var ret = template.render('hello{{name}}',{
    name:'jack'
})
console.log(ret);
