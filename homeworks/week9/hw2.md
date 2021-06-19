## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
VARCHAR可給預設值，TEXT沒辦法給預設值
VARCHAR建索引可不指定索引長度，TEXT一定要指定長度
VARCHAR最大長度64k，TEXT最大長度4G


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
Cookie是為了辨別使用者身分而儲存在用戶端的資料，通常經過加密。

http回應後從伺服器傳送cookie至用戶代理。
當打開網頁，客戶端儲存的cookie會發送給serve，並從中拿取資料。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
帳號密碼放在同一個資料表中，如果被入侵的話會知道所有帳號密碼。

