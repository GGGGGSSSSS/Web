let zz = {
  r() {
    console.log(this)
  }
}
function f(func) {
  func()
}
zz.r()
f(zz.r)