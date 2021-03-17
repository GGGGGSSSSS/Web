// // TypeScript是对数据类型的规范 :
// //基本类型:
// let q: any
// q = Error('2')

// // 对象的类型——接口:
// interface Person {
//   name: string;
//   age: number;
// }

// let tom: Person = {
//   name: "Tom",
//   age: 25,
// };

// // 接口定义函数形状 :
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// //接口的嵌套--泛型 : (对应对象的多层)

// //-------------------------------ctrl shift + B 把ts编译成js------------------------------------

// //数组类型
// interface NumberArray {
//   [indezx: number]: number;
// }
// let fibonacci: NumberArray = [1, 1, 2, 3, 5];


// let n: null = null;
// u = null;
// n = undefined;
// let z: Array<Person>;

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function (sdource: string, subString: string) {
//   return sdource.search(subString) !== -1;
// };


// let createArray = function <T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// }

// //元组: 更加详细的数组类型
// let tomc: [string, string] = ["Tom", "25"];

// let fibonacc: number[]