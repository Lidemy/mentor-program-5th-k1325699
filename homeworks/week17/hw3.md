## 什麼是 MVC？
MVC是將應用程式分為三個元件，模型（Model）、視圖（View）、控制器（Controller）
Model指的是資料相關的程式；View是顯示介面；控制器是把不同的元件組織起來與應用程式的控制。

## 請寫下這週部署的心得
heroku花了一點時間就完成部署了，但那時候在做amazonserver跟nginx與pm2時出了一點狀況，一開始多設了一個ufw，結果把ssh給擋住無法登入只好放棄，接著又東弄弄西弄弄用壞了五個server，第六個按照之前的做法做一次，加上nginx後因為80被占領了，所以把原本占著80的關掉，這樣就沒辦法連phpmysql，最後我就裝了nginx、mysqlserver、php(順便的)，最後調整一下mysql讓它可以遠端，最後再東弄弄西弄弄總算弄玩了，前後花了3天，壞了6個server才總算成功。

## 寫 Node.js 的後端跟之前寫 PHP 差滿多的，有什麼心得嗎？
我覺得php前後端沒有分離，覺得都混在一起，而用node.js來使用有把前後端分開，不同的模板會進行分開。