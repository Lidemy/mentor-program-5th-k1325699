const request = require('request')

request(
  {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      'Client-ID': '7vxwhu3fnd6lqfy4fg452bnwpgnixa',
      Accept: 'application/vnd.twitchtv.v5+json'
    }
  },
  (err, response, body) => {
    if (err) {
      console.log('err', err)
      return
    }
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log('err', err)
      return
    }
    const game = data.top
    for (let i = 0; i < game.length; i++) {
      console.log(game[i].viewers, game[i].game.name)
    }
  }
)
