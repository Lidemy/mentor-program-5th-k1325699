```js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
先輸出1，接著輸出3與5，最後是2跟4。
一開始console.log(1)輸出1，接著setTimeout放至task queue
再來console.log(3)輸出3，setTimeout放至task queue
console.log(5)輸出5。
在輸出task queue中的2與4