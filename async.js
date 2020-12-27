function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  console.log(value);
  await timeout(ms);
  return 'over'
}

let z = asyncPrint('hello world', 3000);
z.then(function (param) {
  console.log(param);
});
//async函数执行立即返回一个promise 可以进行.then()
//这个promise的resolve或reject由async内部执行进行状态赋值
//promise从一开始的设计就是想搭配generator实现async的效果而设计的