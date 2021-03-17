class Animal2 {
  // private name: string;
  protected name: string;
  //不写就是public

  constructor(theName: string) {
    this.name = theName;
  }
  getName() {
    console.log(this.name)
  }
}

class Rhino extends Animal2 {
  constructor() {
    super('Rhino');
  }
  getName() {
    console.log(this.name)
    // private只能被他的类成员以xx.xx的方式调用 继承他的类也不行 protected则可以被子类调用
  }
}

let oo = new Animal2('Cat').name;