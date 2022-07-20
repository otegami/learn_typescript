import fs from 'fs'

const bufferedText = fs.readFileSync('/Users/otegami/Coding/typescript/practice/otegami.txt')
const matchedOtegamiTimes = bufferedText.toString().match(/otegami/g)?.length ?? 0
console.log(matchedOtegamiTimes)
