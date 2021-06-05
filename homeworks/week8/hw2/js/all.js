const request = new XMLHttpRequest()

request.onload = (e) => {
  if (request.status >= 200 && request.status < 400) {
    const popularGame = JSON.parse(request.responseText).top
    document.querySelector('.header ul').innerHTML = `
    <li><a href="#" class="checked">${popularGame[0].game.name}</a></li>
    <li><a href="#">${popularGame[1].game.name}</a></li>
    <li><a href="#">${popularGame[2].game.name}</a></li>
    <li><a href="#">${popularGame[3].game.name}</a></li>
    <li><a href="#">${popularGame[4].game.name}</a></li>
    `
  }

  console.log(JSON.parse(request.responseText).top[0].game.name)
  document.querySelector('.content h2').innerText = JSON.parse(request.responseText).top[0].game.name
  const live = new XMLHttpRequest()
  live.onload = (e) => {
    if (request.status >= 200 && request.status < 400) {
      const { streams } = JSON.parse(live.responseText).streams
      for (let i = 0; i < streams.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = `
        <a href="${streams[i].channel.url}">
        <img src="${streams[i].preview.large}" alt="" class="preview">
          <div class="news">
            <img src="${streams[i].channel.logo}" alt="" class="logo">
            <div class="profiles">
              <h3>${streams[i].channel.status}</h3>
              <p class="channel">${streams[i].channel.name}</p>
            </div>
          </div>
        </a>
        `
        document.querySelector('.content ul').appendChild(li)
      }
    }
  }
  live.open('GET', `https://api.twitch.tv/kraken/search/streams?query=${JSON.parse(request.responseText).top[0].game.name}&limit=20`, true)
  live.setRequestHeader('Client-ID', '7vxwhu3fnd6lqfy4fg452bnwpgnixa')
  live.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  live.send()
}
request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', true)
request.setRequestHeader('Client-ID', '7vxwhu3fnd6lqfy4fg452bnwpgnixa')
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
request.send()

document.querySelector('.header').addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'a') {
    e.preventDefault()
    const removChecked = document.querySelectorAll('.header a')
    for (let i = 0; i < removChecked.length; i++) {
      removChecked[i].classList.remove('checked')
    }
    e.target.classList.add('checked')
    document.querySelector('.content h2').innerText = e.target.innerText
    console.log(document.querySelector('.content ul'))
    const removes = document.querySelectorAll('.content li')
    for (const remove of removes) {
      remove.remove()
    }
    console.log(e.target.innerText)
    const live = new XMLHttpRequest()
    live.onload = (e) => {
      if (request.status >= 200 && request.status < 400) {
        const { streams } = JSON.parse(live.responseText).streams
        for (let i = 0; i < streams.length; i++) {
          const li = document.createElement('li')
          li.innerHTML = `
          <a href="${streams[i].channel.url}">
            <img src="${streams[i].preview.large}" alt="" class="preview">
            <div class="news">
              <img src="${streams[i].channel.logo}" alt="" class="logo">
              <div class="profiles">
                <h3>${streams[i].channel.status}</h3>
                <p class="channel">${streams[i].channel.name}</p>
              </div>
            </div>
          </a>
          `
          document.querySelector('.content ul').appendChild(li)
        }
      }
    }
    live.open('GET', `https://api.twitch.tv/kraken/search/streams?query=${e.target.innerText}&limit=20`, true)
    live.setRequestHeader('Client-ID', '7vxwhu3fnd6lqfy4fg452bnwpgnixa')
    live.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
    live.send()
  }
})
