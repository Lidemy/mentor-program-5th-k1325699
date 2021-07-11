const apiUrl = 'https://api.twitch.tv/kraken'
const clientID = '7vxwhu3fnd6lqfy4fg452bnwpgnixa'
// 串api
// 前五名遊戲
function getGame(callback) {
  fetch(`${apiUrl}/games/top?limit=5`, {
    headers: {
      'Client-ID': clientID,
      Accept: 'application/vnd.twitchtv.v5+json'
    },
    mode: 'cors'
  }).then((response) => response.json()
  ).then((json) => {
    callback(json.top)
  }).catch((err) => {
    console.log('err', err)
  })
}
// 前20頻道
function getStream(gameName, callback) {
  fetch(`${apiUrl}/search/streams?query=${encodeURIComponent(gameName)}&limit=20`, {
    headers: {
      'Client-ID': clientID,
      Accept: 'application/vnd.twitchtv.v5+json'
    },
    mode: 'cors'
  }).then((response) => response.json()
  ).then((json) => {
    callback(json.streams)
  }).catch((err) => {
    console.log('err', err)
  })
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
