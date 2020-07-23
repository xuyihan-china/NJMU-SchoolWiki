var str ='abcd';
console.log(str.charAt(0));
var prefix = "foo"
var myObj = {
    [prefix+"bar"]:"hello",
    [prefix+"baz"]:"world"
};
console.log(myObj["foobar"])

var my = ["foo",43,"bar"]
my["3"]="baz"
console.log(my.length)//4

var myObject = {
    a:2
}
Object.preventExtensions(myObject)
//myObject.b=3;
console.log(myObject.a)