## 跟你朋友介紹 Git

git是一種版本控管的系統，可以儲存所有版本的狀態，知道變更的狀況與隨時可回到某一版本的檔案，還可分出另一分支進行更改再跟其他分支合併在一起。

git的基本使用第一步驟先到線上下載git，安裝後在要做控管的資料夾中右鍵選擇`git bash here`，開啟 git bash ，在裡面打上`git init`創立一個git。

* 在資料夾中的檔案使用`git add 檔案名稱`即可把檔案放入版控，亦可使用`git add -A`把所有檔案放進控管。
  
* 控管完畢後接著使用`git commit -am "更改的說明"`即可新增一個版本，如果是再次更改的檔案只需要打上此指令即可新增版本，但如果是新檔案要再次使用`git add 新增的檔案`進行控管才可使用此指令進行更新版本。
  
* 使用`git log`可顯示所有更改的版本

* 使用`git branch 分支名稱` 建立分支

* 使用`git branch -v` 顯示所有分支與現在所在分支
  
* 使用`git checkout 版本名稱` 回歸(此名稱的)版本

* 使用 `git checkout 分支` 切換分支，並把檔案切換到分支的版本

* 檔名取作`.gitignore`把不做版控的檔案放置其中，在使用`git add`與`git commit`下會無視這些檔案

* 使用`git branch -d 分支名稱` 刪除分支

* github為可線上儲存git的資料庫
  
* 打開github開啟新的repositories,接著在已經版控的檔案中隨著 …or push an existing repository from the command line 中的資訊使用command line操作

* `git push origin 分支名稱` 把git放入github中的分支

* 使用`git pull origin 分支名稱` 把github中的分支放入git中

* 使用`git diff 檔案` 觀看更改內容
