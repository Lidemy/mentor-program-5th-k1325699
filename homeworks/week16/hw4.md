```js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() //2
obj2.hello() // 2
hello() // undefined
```
obj.inner.hello()等同於obj.inner.hello.call(obj.inner)，this.value也就是obj.inner.value，等於2
obj2.hello()等同於obj2.hello.call(obj2)，而obj2=obj.inner，this.value也就是obj.inner.value，等於2
hello()等同於hello.call(undefined)，this.value等於undefined