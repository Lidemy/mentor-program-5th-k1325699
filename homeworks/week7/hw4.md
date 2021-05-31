## 什麼是 DOM？
DOM是一個模型，把HTML中的各種標籤，包含文字圖片等都定義成物件，形成一種樹狀結構

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
分為三個階段，捕獲階段、目標階段、冒泡階段。  
DOM事件從最上層(window)開始向下尋找目標，叫做捕獲階段  
從目標沿原路回去的過程，叫做冒泡階段。

## 什麼是 event delegation，為什麼我們需要它？
event delegation指的是把事件綁在parent上，以減少監聽數的方法。
優點在於不需要寫很多監聽，只需要寫在父層然後判定所要的監聽上

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()指的是停止事件的預設動作，像是原本是連結到某個網址，對a標籤使用後，連結這動作就取消了。
event.stopPropagation()指的是停止事件冒泡，像是
```js
<div class="outer">
  <div class="inner">
    <div class="block"></div>
  </div>
</div>
```
對著outer、inner、block做監聽時，會使的原本發生block的事件會連同outer、inner都做反應，使用event.stopPropagation()後，outer、inner就不會有反應