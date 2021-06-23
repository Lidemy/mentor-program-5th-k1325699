const apiUrl = 'https://api.twitch.tv/kraken'
const clientID = '7vxwhu3fnd6lqfy4fg452bnwpgnixa'
// 串api
// 前五名遊戲
function getGame(callback) {
  const request = new XMLHttpRequest()
  request.onload = (e) => {
    if (request.status >= 200 && request.status < 400) {
      const games = JSON.parse(request.responseText).top
      callback(games)
    }
  }
  request.open('GET', `${apiUrl}/games/top?limit=5`, true)
  request.setRequestHeader('Client-ID', clientID)
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request.send()
}
// 前20頻道
function getStream(gameName, callback) {
  const request = new XMLHttpRequest()
  request.onload = (e) => {
    if (request.status >= 200 && request.status < 400) {
      const { streams } = JSON.parse(request.responseText)
      const data = JSON.parse(request.responseText)
      console.log(data)
      console.log(streams)
      callback(streams)
    }
  }
  request.open('GET', `${apiUrl}/search/streams?query=${encodeURIComponent(gameName)}&limit=20`, true)
  request.setRequestHeader('Client-ID', clientID)
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request.send()
}

// 新增前20頻道
function appendStreams(stream) {
  const li = document.createElement('li')
  li.innerHTML = `
    <a href="${stream.channel.url}">
      <img src="${stream.preview.large}" alt="" class="preview">
      <div class="news">
        <img src="${stream.channel.logo}" alt="" class="logo">
        <div class="profiles">
          <h3>${stream.channel.status}</h3>
          <p class="channel">${stream.channel.name}</p>
        </div>
      </div>
    </a>
    `
  document.querySelector('.content ul').appendChild(li)
}
// 清單
getGame((games) => {
  for (const game of games) {
    const element = document.createElement('li')
    const gameName = game.game.name
    element.innerHTML = `
    <a href="#">${gameName}</a>
    `
    document.querySelector('.header ul').appendChild(element)
  }
  changeGame(games[0].game.name)
})
function changeGame(gameName) {
  const checked = document.querySelectorAll('.header a')
  for (let i = 0; i < checked.length; i++) {
    checked[i].classList.remove('checked')
    if (checked[i].innerText === gameName) {
      checked[i].classList.add('checked')
    }
  }
  document.querySelector('.content h2').innerText = gameName
  document.querySelector('.content ul').innerText = ''
  getStream(gameName, (streams) => {
    for (const stream of streams) {
      appendStreams(stream)
    }
  })
}
document.querySelector('.header ul').addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'a') {
    e.preventDefault()
    changeGame(e.target.innerText)
  }
})
