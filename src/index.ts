import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('名前を入力してください:', (name) => {
  console.log("こんにちは、" + name + "さん")
  rl.close()
})

// const bigint = BigInt("fooooo")
// console.log("bigint is ", bigint)

// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question('文字列を入力してください:', (line) => {
//   const num = Number(line)
//   const result = num + 1000
//   console.log(result)
//   rl.close()
// })



// const message: string = "Hello, world"
// console.log(message)

// const greeting = "Hello";
// const target = "world!";
// console.log(greeting + target);

// string, number, boolean, Bigint, null, undefined, symbol
