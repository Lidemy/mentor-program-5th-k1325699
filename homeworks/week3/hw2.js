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
  const temp = lines[0].split(' ')
  const n = Number(temp[0])
  const m = Number(temp[1])
  for (let i = n; i <= m; i++) {
    if (nar(i)) {
      console.log(i)
    }
  }
}
function nar(n) {
  const num = n.toString()
  const power = num.length
  let narnum = 0
  for (let i = 0; i < power; i++) {
    narnum += num[i] ** power
  }
  return narnum === n
}
