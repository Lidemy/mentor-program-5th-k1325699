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
  console.log(isPal(lines[0]))
}
function isPal(str) {
  let reverse = ''
  for (let i = 0; i < str.length; i++) {
    reverse += str[str.length - 1 - i]
  }
  if (reverse === str) return 'True'
  return 'False'
}
