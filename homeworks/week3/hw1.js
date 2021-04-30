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
  for (let i = 1; i <= lines[0]; i++) {
    console.log(star(i))
  }
}
function star(n) {
  let addstar = ''
  for (let i = 1; i <= n; i++) {
    addstar += '*'
  }
  return addstar
}
