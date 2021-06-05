document.querySelector('.banner').addEventListener('click', (e) => {
  if (e.target.classList.contains('lottery__btn')) {
    const request = new XMLHttpRequest()
    const banner = document.querySelector('.banner')
    let removeClassName
    if (banner.classList.contains('first-prize') || banner.classList.contains('second-prize') || banner.classList.contains('third-prize') || banner.classList.contains('none-prize')) {
      removeClassName = function removeClassName(className) {
        banner.classList.remove(className)
      }
      removeClassName('first-prize')
      removeClassName('second-prize')
      removeClassName('third-prize')
      removeClassName('none-prize')
      banner.innerHTML = `
      <div class="lottery">
        <h2>
          2020 夏日輕盈特賞！ 抽獎活動辦法
        </h2>
        <div>
          <div class="lottery__title">活動期間：</div>
          <div class="lottery__content">2020/06/01~2020/07/01</div>
        </div>
        <hr>
        <div>
          <div class="lottery__title">活動說明：</div>
          <div class="lottery__content">
            今天老闆佛心來著決定給大家發獎勵，有看有機會，沒看只能幫QQ！只要在店內消費滿1000000元即有機會獲得 - 頭獎日本東京來回雙人遊！
          </div>
        </div>
        <hr>
        <div>
          <div class="lottery__title">
            獎&emsp;品：
          </div>
          <div class="lottery__content">
            ❤ 頭獎一名：日本東京來回雙人遊(市價14990元)
            <br>
            ❤ 貳獎三名：90 吋電視一台(市價5990元)
            <br>
            ❤ 參獎十名：知名 YouTuber 簽名握手會入場券一張(市價1500元)
          </div>
        </div>
        <div>
          <button class="lottery__btn">我要抽獎</button>
        </div>
      </div>    
      `
      return
    }
    request.addEventListener('load', (e) => {
      const response = request.responseText
      let json = ''
      if (request.status >= 200 && request.status < 400) {
        try {
          json = JSON.parse(response)
        } catch (error) {
          alert('系統不穩定，請再試一次')
        }
        if (json.prize === 'FIRST') {
          banner.classList.add('first-prize')
          banner.innerHTML = `
            <div class='prize'>
              <h2>恭喜你中頭獎了！日本東京來回雙人遊！</h2>
              <button class="lottery__btn">我要抽獎</button>
            </div>
          `
        } else if (json.prize === 'SECOND') {
          banner.classList.add('second-prize')
          banner.innerHTML = `
            <div class='prize'>
              <h2>二獎！90 吋電視一台！</h2>
              <button class="lottery__btn">我要抽獎</button>
            </div>
          `
        } else if (json.prize === 'THIRD') {
          banner.classList.add('third-prize')
          banner.innerHTML = `
            <div class='prize'>
              <h2>恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！</h2>
              <button class="lottery__btn">我要抽獎</button>
            </div>
          `
        } else if (json.prize === 'NONE') {
          banner.classList.add('none-prize')
          banner.innerHTML = `
            <div class='prize'>
              <h2>銘謝惠顧</h2>
              <button class="lottery__btn">我要抽獎</button>
            </div>
          `
        } else {
          alert('系統不穩定，請再試一次')
        }
      } else {
        alert('系統不穩定，請再試一次')
      }
    })
    request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
    request.send()
  }
})
