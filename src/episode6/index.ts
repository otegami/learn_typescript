// ユニオン型とインターセクション型

// type Animal = {
//   species: string
// }

// const cat = {
//   species: "Felis silvertris catus",
//   age: "永遠の 17 歳"
// }

// const animal: Animal = cat

// type Animal = {
//   species: string
//   age: string
// }

// type Human = {
//   name: string
//   age: number
// }

// type User = Animal | Human

// const tama: User = { species: "Felissilvestriscatus", age: "永遠の17歳" }
// const otegami: User = { name: "otegami", age: 26 };

// const showAge = (user: User) => {
//   const age = user.age
//   return console.log(age)
// }

// type MysterFunc =
//   | ((str: string) => string)
//   | ((str: string) => number)

// const useFunc = (func: MysterFunc) => {
//   const result = func("otegami")
//   console.log(result)
// }

// インターセクション型
// type Animal = {
//   species: string
//   age: number
// }

// type Human = Animal & {
//   name: string
// }

// const tama: Animal = {
//   species: "Felis silberstris catus",
//   age: 3
// }

// const otegami: Human = {
//   species: "Homo sapiens sapiens",
//   age: 28,
//   name: "otegami"
// }

// type StringAndNumber = string & number

// ユニオン型とインターセクション型の表裏一体な関係

// type Human = { age: number }
// type Animal = { species: string }

// const getName = (human: Human) => human.age
// const getSpecies = (animal: Animal) => animal.species

// const human: Human = { age: 28 }
// const animal: Animal = { species: "cat" }

// const mysterFunc = Math.random() < 0.5 ? getName : getSpecies

// const otegami: Human & Animal = {
//   age: 28,
//   species: "Homo sapiens sapiens"
// }
// console.log(mysterFunc(otegami))

// オプショナルプロパティ再訪

// type Human = {
//   name: string
//   age?: number
// }

// type StrictHuman = {
//   name: string
//   age: number | undefined
// }

// const otegami: Human = {
//   name: "otegami",
//   age: 28
// }

// const john: Human = {
//   name: "John Smith"
// }

// const strictJohn: StrictHuman = {
//   name: "John Smith"
// }

// オプショナルチェイニングによるプロパティアクセス
// type Human = {
//   name: string
//   age: number
// }

// const useMaybeHumna = (human: Human | undefined) => {
//   const age = human?.age
//   console.log(age)
// }

// type GetTimeFunc = () => Date

// const useTime = (getTimeFUnc: GetTimeFunc | undefined) => {
//   const timeOrUndefined = getTimeFUnc?.()
//   console.log(timeOrUndefined)
// }

// type User = {
//   isAdult(): boolean
// }

// const checkForAdultUser = (user: User | null) => {
//   if (user?.isAdult()) {
//     showSpecialContents(user)
//   }
// }

// リテラル型

// const getHelloStr = (): `Hello, ${string}!` => {
//   const rand = Math.random()
//   if (rand < 0.3) {
//     return "Hello, world!"
//   } else if (rand < 0.6) {
//     return "Hello, my world!"
//   } else if (rand < 0.9) {
//     return "Hello, world."
//   } else {
//     return "Hell, world!"
//   }
// }

// const makeKey = <T extends string>(userName: T) => {
//   return `user.${userName}` as const
// }

// const otegamiKey: "user.otegami" = makeKey("otegami")

// const fromKey = <T extends string>(key: `user:${T}`): T => {
//   return key.slice(5) as T
// }

// const user = fromKey("user:otegami")

// ユニオン型とリテラル型を組み合わせて使う

// const signNumber = (type: "plus" | "minus") => {
//   return type === "plus" ? 1 : -1
// }

// console.log(signNumber("plus"))
// console.log(signNumber("minus"))
// // console.log(signNumber("otegami"))

// type Otegami = {
//   name: "otegami"
//   age: number
// }

// const otegami: Otegami = {
//   name: "otegami",
//   age: 26
// }

// // otegami.name = 'a'

// const windeningOtegami = "otegami"
// const otegami: "otegami" = "otegami"

// let otegami3 = windeningOtegami
// let otegami4 = otegami

// type SingType = "plus" | "minus"

// const signNumber = (type: SingType) => {
//   return type === "plus" ? 1 : -1
// }

// const numberWithSign = (num: number, type: SingType | "none") => {
//   if (type === "none") return 0
//   return num * signNumber(type)
// }

// const numberWithSign3 = (num: number, type: SingType | "none") => {
//   return type === "none" ? 0 : num * signNumber(type)
// }

// console.log(numberWithSign(5, "plus"))
// console.log(numberWithSign(5, "minus"))
// console.log(numberWithSign(5, "none"))

// console.log(numberWithSign3(5, "plus"))
// console.log(numberWithSign3(5, "minus"))
// console.log(numberWithSign3(5, "none"))

