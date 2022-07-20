// import { readFile } from "fs"

// // console.log("1. 読み込みを開始します")
// // readFile("otegami.txt", (data) => {
// //   console.log("3. 読み込みました")
// // })
// // console.log("2. 読み込みを開始しました")

// // const startTime = performance.now()
// // readFile("otegami.txt", "utf8", (err, result) => {
// //   const endTime = performance.now()
// //   console.log(`${endTime - startTime}ミリ秒かかりました`)
// // })
// // console.log("読み込み開始")

// setTimeout(() => {
//   console.log("タイマーが呼び出されました")
// }, 100)

// const startTime = performance.now()
// let count = 0

// while (performance.now() - startTime < 1000) {
//   count++
// }

// console.log(count)

// Promise を使う

import { readFile } from "fs/promises"

// success
const p = readFile("otegami.txt", "utf8")
// fail
// const p = readFile("failed.txt", "utf8")

p.then((data) => { console.log(data) })
p.then((result) => { console.log("1") })
p.then((result) => { console.log("3") })
p.then((result) => { console.log("2") })

p.catch((err) => { console.log("失敗", err) })
