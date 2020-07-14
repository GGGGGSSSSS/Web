//对象类型
interface Person {
  name: string;
  age?: number;
  [gggg: number]: any;
}
let d = 3;
let tom: Person = {
  name: "Tom",
  [d]: "male",
};

//       -----ctrl shift + B 把ts编译成js

//数组类型
interface NumberArray {
  [indezx: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

let u: undefined = undefined;
let n: null = null;
u = null;
n = undefined;
let z: Array<Person>;
