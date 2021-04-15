## 請解釋後端與前端的差異。
後端與前端的差異以餐廳做舉例的話，前端是櫃檯的人員，負責接收要求與把餐點(資料)給客人；後端則是餐廳，拿到菜單後做出餐點送回櫃台。
簡單來說前端就是負責網站上看的到的東西，像是網頁畫面、網頁動畫與資料的傳入；而後端則是把資料進行儲存至一個資料庫內，從資料庫尋找要的資料進行輸出。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
網站 request google的伺服器，接著再database中尋找與`JavaScript`相關的資訊回傳至google server 再response 資料至網站上，就出現搜尋的結果。


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

* `git blame 檔案名稱`查看檔案內容 commit 的時間點與作者

* `git clean -fX 檔案名稱`刪除所有已忽略的檔案

* `git stash 檔案名稱`將還沒 commit 的修改部分，暫時儲存並移除，回復到最近 commit 的內容，相同於 git stash save

  1. `git stash show`查看由 git stash 所儲存的修改檔案名稱

  2. `git stash list`查看由 git stash 所儲存的修改列表

  3. `git stash pop`回復由 git stash 所儲存的修改部分，並刪除 stash

  4. `git stash branch 新分支` => 在本機端，新建立一個 branch，並在該 branch 作 `git stash pop`

  5. `git stash apply`回復由 git stash所儲存的修改部分，但不刪除stash