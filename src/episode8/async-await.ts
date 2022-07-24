// const get3 = async (): Promise<number> => {
//   console.log("get3 が呼び出されました。")
//   return 3
// }

// import { readFile, writeFile } from "fs/promises";

// const fail = async (): Promise<never> => { throw new Error("Oh my gosh!!!") }
// const failP = fail()
// failP.catch(err => { console.log(err) })

// console.log("get3 を呼び出します")
// const p = get3()
// p.then(num => {
//   console.log(`num is ${num}`)
// })
// console.log("get3 を呼び出しました")

// const sleep = (duration: number) => {
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, duration)
//   })
// }

// const get3 = async () => {
//   console.log("get3 が呼び出されました")
//   await sleep(1000)
//   console.log("await の次に進みました")
//   return 3
// }

// console.log("get3 を呼び出します")
// const p = get3()
// p.then(num => {
//   console.log(`num is ${num}`)
// })
// console.log("get3 を呼び出しました")

// const main = async () => {
//   const num1 = await get3()
//   const num2 = await get3()
//   const num3 = await get3()
//   return num1 + num2 + num3
// }

// main().then(result => {
//   console.log(`result is ${result}`)
// })

// const main = async () => {
//   const { readFile, writeFile } = await import("fs/promises")

//   const otegamiContent = await readFile("otegami.txt", "utf8")
//   await writeFile("foo.txt", otegamiContent + otegamiContent)
//   console.log("書き込みが完了しました!")
// }

// main().then(() => {
//   console.log("main() が完了しました!")
// })

// const otegamiContent = await readFile("otegami.txt", "utf8")
// await writeFile("foo.txt", otegamiContent + otegamiContent + otegamiContent)
// console.log("書き込みが完了しました")

// const fooContent = await readFile("foo.txt", "utf8")
// export const bar = fooContent + fooContent

// const main = async () => {
//   const { readFile, writeFile } = await import("fs/promises")

//   try {
//     const otegamiContent = await readFile("otegami.txt", "utf8")
//     await writeFile("foo.txt", otegamiContent)
//     console.log("書き込み完了しました")
//   } catch {
//     console.error("失敗しました")
//   }
// }

// main().then(() => {
//   console.log("main() が成功しました")
// })

// memo
//   - アロー関数の this は関数の外側の this と一緒だ
//   - そうでない場合は、関数の呼び出し方によって変化する

// import { readFile } from "fs/promises"
// import path from "path"
// import { fileURLToPath } from "url"

// const filePath = fileURLToPath(import.meta.url)
// const fileDir = path.dirname(filePath)
// const dataFile = path.join(fileDir, "../../otegami.txt")

// const coumtOtegamiWord = async (): Promise<number> => {
//   const data = await readFile(dataFile, { encoding: "utf8" })

//   let count = 0
//   let currentIndex = 0

//   while (true) {
//     const nextIndex = data.indexOf("otegami", currentIndex)
//     if (nextIndex > 0) {
//       count++
//       currentIndex = nextIndex + 1
//     } else {
//       break
//     }
//   }

//   return count
// }

// coumtOtegamiWord().then((result) => console.log(result))

import { readFile } from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const filePath = fileURLToPath(import.meta.url)
const fileDir = path.dirname(filePath)
const dataFile = path.join(fileDir, "../../otegami.txt")

// const sleepReject = (duration: number) => {
//   return new Promise<never>((resolve, reject) => {
//     setTimeout(reject, duration)
//   })
// }

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration)
  })
}

const errorAfter1ms = async () => {
  sleep(1)
  throw new Error("Timeout!")
}

// const generateEmptyString = async (): Promise<string> => {
//   sleep(1)
//   return ''
// }

const readFileWithTimeout = Promise.race([
  readFile(dataFile, { encoding: "utf8" }),
  errorAfter1ms()
])

try {
  const data = await readFileWithTimeout.catch(() => "")

  let count = 0
  let currentIndex = 0

  while (true) {
    const nextIndex = data.indexOf("otegami", currentIndex)
    if (nextIndex > 0) {
      count++
      currentIndex = nextIndex + 1
    } else {
      break
    }
  }

  console.log(count)
} catch (err: unknown) {
  console.error("ファイルの読み込みで Timeout しました", err)
  process.exit()
}
