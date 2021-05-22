## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. <hr>:水平分隔線。
2. <aside></aside>:語意化標籤，主要用於包住與主要內容沒什麼關係的區塊，通常做為彥面的額外資訊，像是廣告或是側邊資訊。
3. <textarea></textarea>:表單中的用於多行文字輸入欄位。

## 請問什麼是盒模型（box modal）
在css中把html元素視作盒子，由內到外分別是內容、padding、border、margin，前三個會影響元素的長寬，當預設狀態下使用padding與border會使的元素長寬擴大，而當固定寬高時會使內容的隨著padding與border縮小

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* display:inline 行內元素，並不會撐滿整行且無法變更上下的長度。
* display:block 區塊元素，會盡可能地撐滿整行，當使用其他的標籤時會自動換行，可變更長寬。
* display:inline-block 似行內元素不會撐滿整行，但可以變更長寬
## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* position:static 預設值，不會被特別定位在頁面任何位置
* position:relative 相對定位，以自己為自身的基準位置，自身原本的空間仍保留不會消失
* position:absolute 絕對定位，以向上找第一個為relative非static的元素作為基準位置，自由指定配置位置，脫離元素原本的位置，後續元素自動遞補
* position:fixed 與position:absolute相似，以整個視窗(body)為基準，就算拉動捲軸仍會維持在同個位置。
