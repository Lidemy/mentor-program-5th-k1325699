const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery'
const errorMessage = '系統不穩定，請再試一次'

//  抽獎
// cd function(err,data)
function getPrize(cb) {
  const xhr = new XMLHttpRequest()
  xhr.addEventListener('load', (e) => {
    if (xhr.status >= 200 && xhr.status < 400) {
      let data
      try {
        data = JSON.parse(xhr.response)
      } catch (error) {
        cb(errorMessage)
        return
      }
      if (!data.prize) {
        cb(errorMessage)
      }
      cb(null, data)
    } else {
      cb(errorMessage)
    }
  })
  xhr.open('GET', apiUrl, true)
  xhr.send()
}

document.querySelector('.banner').addEventListener('click', (e) => {
  if (e.target.classList.contains('lottery__btn')) {
    const banner = document.querySelector('.banner')
    if (e.target.closest('.prize')) {
      window.location.reload()
    }
    getPrize((err, data) => {
      if (err) {
        alert(err)
        return
      }
      if (data.prize === 'FIRST') {
        banner.classList.add('first-prize')
        banner.innerHTML = `
          <div class='prize'>
            <h2>恭喜你中頭獎了！日本東京來回雙人遊！</h2>
            <button class="lottery__btn">我要抽獎</button>
          </div>
        `
      } else if (data.prize === 'SECOND') {
        banner.classList.add('second-prize')
        banner.innerHTML = `
          <div class='prize'>
            <h2>二獎！90 吋電視一台！</h2>
            <button class="lottery__btn">我要抽獎</button>
          </div>
        `
      } else if (data.prize === 'THIRD') {
        banner.classList.add('third-prize')
        banner.innerHTML = `
          <div class='prize'>
            <h2>恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！</h2>
            <button class="lottery__btn">我要抽獎</button>
          </div>
        `
      } else if (data.prize === 'NONE') {
        banner.classList.add('none-prize')
        banner.innerHTML = `
          <div class='prize'>
            <h2>銘謝惠顧</h2>
            <button class="lottery__btn">我要抽獎</button>
          </div>
        `
      }
    })
  }
})
