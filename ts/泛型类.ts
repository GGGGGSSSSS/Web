// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

class GenericNumber<T> {
  // to get rid of  error, you can define constructor 
  // which takes [zeroValue] and [add] as arguments
  constructor(private zeroValue: T, public add: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

let myGenericNumber = new GenericNumber<number>(0, function (x, y) { return x + y; });
myGenericNumber.zeroValue = 5;
myGenericNumber.add = function (x, y) { return x + y; };