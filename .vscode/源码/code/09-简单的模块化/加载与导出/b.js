var foo = 'bbb'

// console.log(exports)
//单个成员就是这么调用的！！！！
exports.foo = 'hello'
exports.xyh = 'xyh'
exports.add = function (x, y) {
  return x + y
}

exports.readFile = function (path, callback) {
  console.log('文件路径：', path)
}

var age = 18

exports.age = age

function add(x, y) {
  return x - y
}
