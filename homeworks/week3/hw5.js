const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})
function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    const temp = lines[i].split(' ')
    if (temp[2] === '1') {
      if (temp[0].length === temp[1].length) {
        if (temp[0] > temp[1]) {
          console.log('A')
        } else if (temp[0] < temp[1]) {
          console.log('B')
        } else {
          console.log('DRAW')
        }
      } else if (temp[0].length > temp[1].length) {
        console.log('A')
      } else {
        console.log('B')
      }
    } else {
      if (temp[0].length === temp[1].length) {
        if (temp[0] > temp[1]) {
          console.log('B')
        } else if (temp[0] < temp[1]) {
          console.log('A')
        } else {
          console.log('DRAW')
        }
      } else if (temp[0].length > temp[1].length) {
        console.log('B')
      } else {
        console.log('A')
      }
    }
  }
}
