// import { readFile } from "fs"

// import { readFile } from "fs/promises";

// const sleepReject = (duration: number) => {
//   return new Promise<never>((resolve, reject) => { setTimeout(reject, duration) })
// }

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

// import { readFile } from "fs/promises"

// success
// const p = readFile("otegami.txt", "utf8")
// fail
// const p = readFile("failed.txt", "utf8")

// p.then((data) => { console.log(data) })
// p.then((result) => { console.log("1") })
// p.then((result) => { console.log("3") })
// p.then((result) => { console.log("2") })

// p.catch((err) => { console.log("失敗", err) })

// p.then(
//   (result) => {
//     console.log("成功", result)
//   },
//   (error: unknown) => {
//     console.log("失敗", error)
//   })

// const promise = new Promise<number>((resolve) => {
//   setTimeout(() => {
//     resolve(100)
//   }, 3000)
// })

// promise.then((num) => { console.log(`結果は${num}`) })

// const sleep = (duration: number) => {
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, duration)
//   })
// }

// sleep(3000).then(() => { console.log("3秒経ちました") })

// sleepReject(3000).catch(() => { console.log("失敗!!!") })

// const p = Promise.resolve(100)
// const instanceP = new Promise<number>((resolve) => { resolve(100) })

// p.then(() => {
//   console.log("2")
// })
// console.log("1")

// // const r = Promise.reject('foo')
// const instanceR = new Promise<never>((resolve, reject) => { reject('foo') })

// instanceR.catch((err: string) => { console.log(err) })

// const p = Promise.race([
//   readFile("foo.txt", "utf8"),
//   readFile("otegami.txt", "utf8"),
//   readFile("foo.txt", "utf8"),
// ])

// p.then((result) => {
//   console.log(result)
// })

// const p = Promise.race([
//   readFile("foo.txt", "utf8"),
//   sleepReject(5000)
// ])

// p.then((result) => {
//   console.log("成功", result)
// }, (error: unknown) => { console.log("失敗", error) })

// const p = Promise.allSettled([
//   readFile("foo.txt", "utf8"),
//   sleepReject(500)
// ])

// p.then((result) => { console.log(result) })

// // const p = readFile("otegami.txt", "utf8")
// const p = readFile("error.txt", "utf8")
// // const p2 = p.then((result) => result + result)
// const p2 = p.catch(() => "")

// p2.then((result) => {
//   console.log(result)
// })

// const repeat10 = (str: string) => new Promise<string>((resolve) => { setTimeout(() => resolve(str.repeat(10)), 1000) })
// const p1 = readFile("otegami.txt", "utf8")
// const p2 = p1.then((result) => repeat10(result))
// const p3 = p2.then((result) => { console.log(result) })
// console.log('1')

// const p1 = readFile("otegami", "utf8")
// const p2 = p1.then((result) => {
//   throw new Error("Error!!!")
// })
// p2.then((result) => { console.log(result) })

// const p = readFile("otegami.txt", "utf8")
//   .then(() => {
//     // throw new Error("Error!!!")
//     sleepReject(1000)
//   })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err: unknown) => {
//     console.log("エラーが発生しました!!!", err)
//   })

import("fs/promises")
  .then(({ readFile }) => readFile("otegami.txt", "utf8"))
  .then((result) => { console.log(result) })
  .catch((error) => { console.log("エラーが発生しました!!!", error) })
