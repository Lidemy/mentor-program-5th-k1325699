## 請以自己的話解釋 API 是什麼
api指的是進行資料交換時所用的介面，用於把所想要交換的資料進行提供與抓取。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. 401 需要授權以回應，與403相似但授權是可以辦到
2. 403 用戶端並無訪問權限，所以伺服器拒絕給予應有的回應
3. 102 伺服器收到並處理要求中，但並沒有回應


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

url:https://restaurant-platform.com
|說明|Method|path|參數|範例|
|:--:|:--:|:--:|:--:|:--:|
|回傳所有餐廳資料|GET|/restaurants|_limit:限制回傳資料數量|/restarants?_limut=5|
|回傳單一餐廳資料|GET|/restaurants/:id|無|/restaurant/10|
|刪除餐廳|DELETE|/restaurants/:id|無|無|
|新增餐廳|POST|/restaurants|name:餐廳名|無|
|更改餐廳|PATCH|/restaurants/:id|name:餐廳名|無|

