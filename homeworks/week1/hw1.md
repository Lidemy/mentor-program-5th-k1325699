## 交作業流程

1. 把github的儲存庫(repositories)下載下來 `git clone https://github.com/Lidemy/mentor-program-5th-k1325699.git`  

2. 建立新分支`git branch hwl`
  
3. 切換至分支`git checkout hw1`

4. 填寫作業

5. 把新增的檔案全部加至版本控制`git add -A`

6. 新建版本 `git commit -am "hw1更改"`

7. 上傳分支至github`git push origin hw1`
   
8. 點選github上Compare & pull request

9. 複製連結貼至當周繳交的PR 

作業改完並merge後：

1. 切換至matser`git checkout master`
2. 下載最新的資料下來`git pull origin master`
3. 刪除hw1分之`git branch -d hw1`