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
    const data = JSON.parse(body)
    const game = data.top
    for (let i = 0; i < game.length; i++) {
      console.log(game[i].game._id, game[i].game.name)
    }
  }
)
