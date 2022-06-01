// // 下記の場合は true になるのでよく使われる
// null == undefined
// null == null

// const secret = process.env.SECRET ?? 'default'
// console.log(`secret は、 ${secret} です。`)

// const switcher = (name: string) => {
//   switch (name) {
//     case 'greet':
//       console.log('こんにちは')
//       break // <- これを忘れないで、無いと各 case を最後まで評価しちゃうよ
//     case 'cat':
//       console.log('あなたは猫派ですか？')
//       break
//     default:
//       console.log(`${name}は、外れ値です。`)
//   }
// }

// switcher('otegami')

// let i = 1
// while (i <= 100) {
//   i++
//   if (i % 2 === 1) {
//     continue
//   }
//   console.log(i)
// }

const fizzBuzz = (max: number) => {
  for (let i = 1; i <= max; i++) {
    console.log(generateFizzbuzzNumber(i))
  }
}

const generateFizzbuzzNumber = (i: number): number | string => {
  if (i % 15 === 0) return 'FizzBuzz'
  if (i % 5 === 0) return 'Buzz'
  if (i % 3 === 0) return 'Fizz'
  return i
}

fizzBuzz(100)
