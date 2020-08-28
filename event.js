setTimeout(() => {
  console.log("timeout callback1()");

  Promise.resolve(3).then((value) => {
    console.log("Promise onResolved3()", value);
  });
  console.log("timeout callback11()");
}, 0);
setTimeout(() => {
  console.log("timeout callback2()");
}, 0);
Promise.resolve(1).then((value) => {
  console.log("Promise onResolved1()", value);
});
Promise.resolve(2).then((value) => {
  console.log("Promise onResolved2()", value);
  setTimeout(() => {
    console.log("timeout callback3()");
  });
});
