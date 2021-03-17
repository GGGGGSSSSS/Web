let u; //unknown就是不确定 有可能程序员不确定他是什么类型 允许他改动
u = 5;
u = '6';
let a; //如果一个变量像js中一样老变 那就是any ts是js的超集 他需要兼容js语法 那就关闭类型检查, 
a = 4;
a = '5';
let d;
function f() {
    //一个函数总会有返回值类型 void就会返回undefined 除非中间throw 就不会返回 他的类型是:never
}
let o; //这个相当于匿名接口 直接跟在变量后面
o = { name: '4', '3': 5 }; //这种跟在后面而不是接口的就是确定了对象的结构 属性多了少了都不行
let f1;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { label: "Size 10 Object" };
printLabel(myObj);
//父类用来固定一些属性,API 但是父类不用实例化 所以用抽象类做父类
class Aniaml {
    who() {
        console.log('他是一个动物');
    }
}
class Dog extends Aniaml {
    sayHello() { }
}
class MyClass {
}
//可索引类型: 可索引的几个类型索引值有number和string也就是数组和对象
let myArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
//一般函数如果不追求一种格式的参数 他可接受多种类型参数(js本该有的优势) 输入的改变会引起输出类型的改变 这种要求我们使用泛型
function fn(a) {
    return a;
}
fn(10);
fn('3');
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
