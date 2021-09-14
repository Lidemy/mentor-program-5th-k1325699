```js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
從for(var i=0; i<5; i++) {開始，i=0，打印出i: 0，接著把setTimeout儲存在task queue
接著i=1，回到console.log('i: ' + i)，打印出i: 1，把setTimeout儲存在task queue，回到console.log('i: ' + i)
接著i=2，打印出i: 2，把setTimeout儲存在task queue，回到console.log('i: ' + i)
接著i=3，打印出i: 3，把setTimeout儲存在task queue，回到console.log('i: ' + i)
接著i=4，打印出i: 4，把setTimeout儲存在task queue
接著i=5，迴圈停止，stack清空，執行儲存在task queue的setTimeout，都打印出5