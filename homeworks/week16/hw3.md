```js
var a = 1
function fn(){
  console.log(a)//undefined
  var a = 5
  console.log(a)//5
  a++
  var a
  fn2()
  console.log(a)//20
  function fn2(){
    console.log(a)//6
    a = 20
    b = 100
  }
}
fn()
console.log(a)//1
a = 10
console.log(a)//10
console.log(b)//100
```
在一開始a=1，進到fn()中，因fu()中有var a = 5，所以var a提升至最上面所以第一個a為undefined，往下來到a++此時a變成了6，var a因為前面已經有設定變數a所以沒有效果，進入到fn2()，第一個a為6，接下來fn()中的a變成20而因為沒有設定b，所以b變成全域變數，b =100 ，回到fn2()下面，a為20。
離開fn()後，因為function中的變數並不會保留所以接下來a為1，接著a = 10 所以a變成了10，最後b為100