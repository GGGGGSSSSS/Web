class BeeKeeper {
}
class ZooKeeper {
}
class Animal {
}
class Bee extends Animal {
}
class Lion extends Animal {
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper; // typechecks!
createInstance(Bee).keeper.hasMask;
