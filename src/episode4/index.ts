// # Episode4
// ## 4.4 ジェネリクス

// import { listenerCount } from "process"

// type User<N> = {
//   name: N
// }

// type Func = <T>(arg: T, num: number) => T[]

// function repeat<T>(element: T, length: number): T[] {
//   const result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result.push(element)
//   }
//   return result
// }

// const repeatArrow: Func = (element, length) => {
//   const result = []
//   for (let i = 0; i < length; i++) {
//     result.push(element)
//   }
//   return result
// }

// console.log(repeat<string>("a", 5))
// console.log(repeat<number>(123, 3))

// const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right]
// const p = pair<string, number>("otegami", 28)

// const repeatWithExtend = <T extends { name: string }>(element: T, length: number): T[] => {
//   const result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result.push(element)
//   }
//   return result
// }

// type HasNameAndAge = {
//   name: string,
//   age: number
// }

// console.log(repeatWithExtend<HasNameAndAge>({ name: 'otegami', age: 26 }, 3))
// const result = repeat("a", 5)

// const double = <T>(func: (arg: T) => T): (arg: T) => T => {
//   return (arg) => func(func(arg))
// }

// type NumberToNumber = (arg: number) => number

// const plus2: NumberToNumber = double(x => x + 1)
// console.log(plus2(10))

// 4.5 変数スコープと関数

// function sabayomi(age: number) {
//   if (age >= 20) {
//     const lie = age - 5
//     return lie
//   }

//   return age
// }

// console.log(sabayomi(28))
// console.log(sabayomi(20))

type FizzBuzz = "FizzBuzz" | "Fizz" | "Buzz" | number

const getFizzBuzzString = (num: number): FizzBuzz => {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
  if (num % 3 === 0) return "Fizz"
  if (num % 5 === 0) return "Buzz"
  return num
}

const sequence = (start: number, end: number): number[] => {
  const arrayLength: number = end - start + 1
  return [...Array(arrayLength)].map((_, index) => index + 1)
}

// for (const num of sequence(1, 100)) { console.log(getFizzBuzzString(num)) }
sequence(1, 100).forEach((num) => console.log(getFizzBuzzString(num)))

// コールバック関数の練習
const map = <T, U>(array: T[], callback: (value: T) => U): U[] => {
  let result: U[] = []
  for (const num of array) {
    result.push(callback(num))
  }
  return result
}

const data = [1, 1, 2, 3, 5, 8, 13]
const result = map(data, (x) => x * 10)

console.log(result)

const dataBool = [1, -3, -2, 8, 0, -1]
const resultBool: boolean[] = map(dataBool, (x) => x >= 0)

console.log(resultBool)

