let u: unknown //unknown就是不确定 有可能程序员不确定他是什么类型 允许他改动
u = 5
u = '6'

let a //如果一个变量像js中一样老变 那就是any ts是js的超集 他需要兼容js语法 那就关闭类型检查, 
a = 4
a = '5'
let d

function f(): void {
  //一个函数总会有返回值类型 void就会返回undefined 除非中间throw 就不会返回 他的类型是:never
}

let o: { name: string, [zz: number]: any }  //这个相当于匿名接口 直接跟在变量后面
o = { name: '4', '3': 5 } //这种跟在后面而不是接口的就是确定了对象的结构 属性多了少了都不行
let f1: (a: number, b: number) => number

enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green;
console.log(c);

//接口是type的超集 他可以定义对象,函数,类的结构 对象和类接口相似

interface LabelledValue {
  label: string
  width?: number
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
let myObj = { label: "Size 10 Object" };
printLabel(myObj);

//父类用来固定一些属性,API 但是父类不用实例化 所以用抽象类做父类
abstract class Aniaml {
  name: string;
  who() {
    console.log('他是一个动物')
  }
  abstract sayHello(n: string): void
}
class Dog extends Aniaml {
  // sayHello() { }
}
class MyClass implements LabelledValue {
  label: '4'
}

interface ReadonlyStringArray {
  [u: number]: string;
}
//可索引类型: 可索引的几个类型索引值有number和string也就是数组和对象
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!

//一般函数如果不追求一种格式的参数 他可接受多种类型参数(js本该有的优势) 输入的改变会引起输出类型的改变 这种要求我们使用泛型
function fn<T>(a: T): T {
  return a
}
fn(10)
fn<string>('3')
//输入不同输出类型也跟着不同 泛型是对js的扩展 不是对静态类型的扩展

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}

let list: Array<number> = [1, 2, 3];
//泛型接口
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any>;
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']