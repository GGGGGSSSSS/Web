const decoratorClass = (targetClass) => {
  targetClass.test = "123"
}
@decoratorClass
class Test { }
Test.test; // "123"

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
class Person {
  @readonly name = "person"
}
const person = new Person();
person.name = "tom";