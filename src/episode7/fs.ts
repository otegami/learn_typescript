import path from "path"
import { fileURLToPath } from "url"
import { readFileSync } from "fs"

// // const bufferedText = fs.readFileSync('/Users/otegami/Coding/typescript/practice/otegami.txt')
// // const matchedOtegamiTimes = bufferedText.toString().match(/otegami/g)?.length ?? 0
// // console.log(matchedOtegamiTimes)

// const data = readFileSync("otegami.txt", { encoding: "utf8" })
// const matchedOtegamiTimes = data.match(/otegami/g)?.length ?? 0
// console.log(matchedOtegamiTimes)

const filename = fileURLToPath(import.meta.url)
const fileDir = path.dirname(filename)
const dataFIle = path.join(fileDir, "../../otegami.txt")
// const otegamiFileURL = join(filename, '../../../', 'otegami.txt')
console.log(dataFIle)
const data = readFileSync(dataFIle, { encoding: "utf8" })

let count = 0
let currentIndex = 0

while (true) {
  const nextIndex = data.indexOf("otegami", currentIndex)
  if (nextIndex >= 0) {
    count++
    currentIndex = nextIndex + 1
  } else {
    break
  }
}
console.log(count)
