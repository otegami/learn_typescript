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

// 代数的データ型をユニオン型で再現するテクニック

// type Animal = {
//   tag: "animal"
//   species: string
// }

// type Human = {
//   tag: "human"
//   name: string
// }

// type User = Animal | Human

// const tama: User = {
//   tag: "animal",
//   species: "Felis silvestris catus"
// }

// const otegami: User = {
//   tag: "human",
//   name: "otegami"
// }

// // const alien: User = {
// //   tag: "alien",
// //   name: "gray"
// // }

// const getUserName = (user: User): string => {
//   switch (user.tag) {
//     case "human":
//       return user.name
//     case "animal":
//       return "名無し"
//   }
// }

// console.log(getUserName(tama))
// console.log(getUserName(otegami))

// // const getUserNameByType = (user: User): string => {
// //   switch (typeof user) {
// //     case "Human":
// //       return user.name
// //     case "Animal":
// //       return "名無し"
// //   }
// // }

// type Human = {
//   type: "human"
//   name: string
//   age: bigint
// }

// const setAge = (human: Human, age: Human["age"]): Human => {
//   return { ...human, age }
// }

// const otegami: Human = {
//   type: "human",
//   name: "otegami",
//   age: 28n
// }

// const futureOtegami = setAge(otegami, 29n)
// console.log(futureOtegami)

// type Human = {
//   name: string
//   age: number
// }

// type HumanKeys = keyof Human

// let key: HumanKeys = "name"
// key = "age"
// // key = "hoge"

// const mmconversionTable = {
//   mm: 1,
//   cm: 10,
//   m: 1e3,
//   km: 1e6
// }

// const convertUnits = (value: number, unit: keyof typeof mmconversionTable) => {
//   const mmValue = value * mmconversionTable[unit]
//   return {
//     mm: mmValue,
//     m: mmValue / 1e3,
//     km: mmValue / 1e6
//   }
// }

// console.log(convertUnits(5600, "m"))

// const get = <T, K extends keyof T & string>(obj: T, key: K): T[K] => {
//   const keyName: string = key
//   return obj[key]
// }

// type Human = {
//   name: string
//   age: number
// }

// const otegami: Human = {
//   name: "otegami",
//   age: 28
// }

// const otegamiName = get(otegami, "name")
// const otegamiAge = get(otegami, "age")
// // const otegamiGender = get(otegami, "gender")

// type Obj = {
//   0: string,
//   1: number
// }

// const obj: Obj = {
//   0: "otegami",
//   "1": 28
// }

// obj["0"] = "john"
// obj[1] = 15

// console.log(obj)
// type ObjKeys = keyof Obj
// const key: ObjKeys = 1
// const key2: ObjKeys = 0
// // const key3: ObjKeys = "1"
// // const key4: ObjKeys = "0"

// as による型アサーション
// const getFirstFiveLetters = (strOrNum: string | number) => {
//   const str = strOrNum as string
//   return str.slice(0, 5)
// }

// console.log(getFirstFiveLetters("otegamiotegami"))
// console.log(getFirstFiveLetters(123))

// type Animal = {
//   tag: "animal"
//   species: string
// }

// type Human = {
//   tag: "human"
//   name: string
// }

// type User = Animal | Human

// const getNameslfAllHuman = (users: readonly User[]): string[] | undefined => {
//   if (users.every(user => user.tag === "human")) {
//     return (users as Human[]).map(user => user.name)
//   }
//   return undefined
// }

// type Human = {
//   name: string
//   age: number
// }

// const getOneUserName = (user1?: Human, user2?: Human): string | undefined => {
//   // if (user1 === undefined && user2 === undefined) {
//   //   return undefined
//   // }
//   // if (user1 !== undefined) {
//   //   return user1.name
//   // }
//   // // return user2!.name
//   // return (user2 as Human).name
//   return user1?.name ?? user2?.name
// }

// const names1 = ["otegami", "john", "taro"]
// const names2 = ["otegami", "john", "taro"] as const

// type Name = (typeof names2)[number]

// const doWhatever = (obj: any) => {
//   console.log(obj.user.name)
//   obj()
//   const result = obj * 10
//   return result
// }

// doWhatever(3)
// doWhatever({ user: { name: "otegami" } })
// doWhatever(() => console.log("hi"))

// const doNothing = (val: unknown) => {
//   // const name = val.name
//   console.log(val)
// }

// doNothing(3)
// doNothing({ user: { name: "otegami" } })
// doNothing(() => console.log("hi"))

// const useUnknown = (val: unknown) => {
//   if (typeof val === "string") {
//     console.log(val.slice(0, 5))
//   } else {
//     console.log(val)
//   }
// }

// useUnknown("foobar")
// useUnknown(null)

// さらに高度な型

// type HasToString = {
//   toString: () => string
// }

// const useToString = (value: HasToString) => {
//   console.log(`value is ${value.toString()}`)
// }

// useToString!({
//   toString() {
//     return "foo"
//   }
// })
// useToString(3.14)

// const useToString2 = (value: HasToString & object) => {
//   console.log(`value is ${value.toString()}`)
// }

// useToString2({
//   toString() {
//     return "foo"
//   }
// })
// useToString2(3.14)

// const useNever = (value: never) => {
//   const num: number = value
//   const str: string = value
//   const obj: object = value
//   console.log(`value is ${value}`)
// }

// useNever({})
// useNever(3.14)

// const thrower = (): never => {
//   throw new Error("error!")
// }

// const resultNever: never = thrower()
// const str: string = resultNever

// console.log(str)

// const isStringOrNumber = (value: unknown): value is string | number => {
//   return typeof value === "string" || typeof value === "number"
// }

// const isStringOrNumber = (value: unknown): value is string | number => {
//   return typeof value === "string" || typeof value === "boolean"
// }

// const something: unknown = 123

// if (isStringOrNumber(something)) {
//   console.log(something.toString())
// }

// type Human = {
//   type: "Human"
//   name: string
//   age: number
// }

// const isHuman = (value: any): value is Human => {
//   if (value === null) return false
//   return (
//     value.type === "Human" &&
//     typeof value.name === "string" &&
//     typeof value.age === "number"
//   )
// }

// type AssertHuman = (value: any) => asserts value is Human

// const assertHuman: AssertHuman = (value: any): asserts value is Human => {
//   if (value == null) {
//     throw new Error("Given value is null or undefined")
//   }
//   if (value.type !== "Human" || typeof value.name !== "string" || typeof value.age !== "number") {
//     throw new Error("Given value is not a Human")
//   }
// }

// const checkAndUserHuman = (value: unknown) => {
//   assertHuman(value)
//   const name = value.name
// }

// 可変長タプル型

