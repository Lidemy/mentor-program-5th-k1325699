## Webpack 是做什麼用的？可以不用它嗎？
把所有用到的預處理器編譯打包成瀏覽器看得懂的內容。

不用的話會出現瀏覽器無法知道內容而沒有顯示

## gulp 跟 webpack 有什麼不一樣？
gulp為任務的管理，把所有任務自動化完成，但無法做到模組化與打包；
而webpack則是模組的打包，把所有資源視作模組進行打包。

## CSS Selector 權重的計算方式為何？
權重分為4項，由最低到最高分別為element(pseudo-elements),class(attributes selectors, pseudo-classes),id,inline style attribute
element指的是像是p,a,ul,li等
pseudo-elements指的是偽元素，像是::before,::after等
class指的是.class
attributes selectors指的像是.class[name=exercise]這種形式
pseudo-classes指的像是:hover、:active等
id指的是#id
inline style attributey則指的是在html的tag中的style
計算方式是從inline style attribute開始比較，如果inline style attribute比較多則權重比較高，一樣則向下比較直到element。
相同權重下後面的程式比前面還要高

 !important為最高權重
