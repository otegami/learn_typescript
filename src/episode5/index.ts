// class User {
//   name: string = ""
//   age: number = 0
// }

// const otegami = new User()
// console.log(otegami.name)
// console.log(otegami.age)

// otegami.age = 28
// console.log(otegami.age)

// class User {
//   name: string = ""
//   age: number
// }

// const User = class {
//   static adminName: string = "kodama"
//   static getAdminUser() {
//     return new User(User.adminName, 26)
//   }

//   name: string
//   #age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.#age = age
//   }

//   isAdult(): boolean {
//     return this.#age >= 20
//   }

//   setAge(newAge: number) {
//     this.#age = newAge
//   }
// }

// const otegami = new User('otegami', 28)
// console.log(otegami.name)
// console.log(otegami.isAdult())
// // console.log(otegami.#age)

// console.log(User.adminName)
// const admin = User.getAdminUser()
// console.log(admin.isAdult())

// // console.log(otegami.adminName)

// クラスの静的初期化ブロック

// class C {
//   static {
//     console.log("otegami")
//   }
// }

// console.log("world")

// class User {
//   static adminUser: User
//   static {
//     this.adminUser = new User()
//     this.adminUser.#age = 9999
//   }

//   #age: number = 0

//   getAge() {
//     return this.#age
//   }

//   setAge(age: number) {
//     if (age < 0 || age > 150) {
//       return
//     }
//     this.#age = age
//   }
// }

// console.log(User.adminUser.getAge())

// 型引数を持つクラス
// class User<T> {
//   name: string
//   #age: number
//   readonly data: T

//   constructor(name: string, age: number, data: T) {
//     this.name = name
//     this.#age = age
//     this.data = data
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20
//   }
// }

// const otegami = new User<string>("otegami", 28, "追加データ")
// const dataOtegami = otegami.data

// const john = new User("John Smith", 15, { num: 123 })
// const dataJohn = john.data

// console.log(dataOtegami)
// console.log(dataJohn)

// クラスの型
// class User {
//   name: string = ""
//   age: number = 0

//   isAdult(): boolean {
//     return this.age >= 20
//   }
// }

// クラス式では、インスタンスの型を提供してくれない
// const User = class {
//   name: string = ""
//   age: number = 0

//   isAdult(): boolean {
//     return this.age >= 20
//   }
// }

// const otegami = new User()
// const uhyo: User = new User()

// const john: User = {
//   name: "John Smisth",
//   age: 15,
//   isAdult: () => true
// }

// class User<T> {
//   name: string
//   #age: number
//   readonly data: T

//   constructor(name: string, age: number, data: T) {
//     this.name = name
//     this.#age = age
//     this.data = data
//   }
// }

// const otegami: User<string> = new User("otegami", 28, "追加データ")

// type Item = {
//   name: string
//   price: number
// }

// const Item: Item = {
//   name: 'りんご',
//   price: 200
// }

// new シグネチャによるインスタンス化可能性の表現

// class User {
//   name: string = 'otegami'
//   age: number = 0
// }

// type MyUserConstructor = new () => User

// const MyUser: MyUserConstructor = User

// const u = new MyUser()
// console.log(u.name, u.age)

// instanceof 演算子と型の絞り込み

// class User {
//   name: string = ''
//   age: number = 0
// }

// const otegami = new User()
// console.log(otegami instanceof User)
// console.log({} instanceof User)

// const john: User = {
//   name: "John Smith",
//   age: 15
// }

// console.log(john instanceof User)

// クラスの継承

// implements キーワードによるクラスの型チェック

// type HasName = {
//   name: string
// }

// class User implements HasName {
//   name: string
//   #age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.#age = age
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20
//   }
// }

// this

// class User {
//   name: string
//   #age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.#age = age
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20
//   }
// }

// const otegami = new User("otegami", 28)
// const isAdult = otegami.isAdult
// console.log(isAdult())

// const user = {
//   name: 'otegami',
//   age: 28,
//   isAdult() {
//     return this.age >= 20
//   }
// }

// console.log(user.isAdult())
// user.age = 15
// console.log(user.isAdult())

// アロー関数における this

// class User {
//   name: string
//   #age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.#age = age
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20
//   }

// public filterOrder(users: readonly User[]): User[] {
//   return users.filter(u => u.#age > this.#age)
// }
// }

// const otegami = new User("otegami", 28)
// const john = new User("John Smith", 15)
// const bob = new User("Bob", 40)

// const older = otegami.filterOrder([john, bob])
// console.log(older)

// const otegami = new User('otegami', 28)
// const john = new User('John Smith', 15)

// console.log(otegami.isAdult())
// // console.log(otegami.isAdult.apply(john, []))
// // console.log(Reflect.apply(otegami.isAdult, john, []))

// const boundIsAdult = otegami.isAdult.bind(otegami)
// console.log(boundIsAdult())
// console.log(boundIsAdult.call(john))
// console.log(otegami.isAdult.call(john))

// 関数の中以外の this

// class A {
//   static foo = 123
//   static bar = this.foo + 100

//   static {
//     console.log("bar is", this.bar)
//   }
// }

// class RepeatArray<T> extends Array<T> {
//   repeat(times: number): RepeatArray<T> {
//     const result = new RepeatArray<T>()
//     for (let i = 0; i < times; i++) {
//       result.push(...this)
//     }
//     return result
//   }
// }

// const arr = new RepeatArray(1, 2)
// console.log(arr.push(3))
// const repeated = arr.repeat(3)
// console.log(repeated)

// 例外処理
// const throwError = () => {
//   const error = new Error("エラーが発生しました!!!")
//   throw error
// }

// console.log("エラーを発生させます")
// throwError()
// console.log("エラーを発生させました")

// const getAverage = (nums: number[]) => {
//   if (nums.length === 0) throw new Error("配列が空です。")
//   return sum(nums) / nums.length
// }

// 例外をキャッチする try-catch 文
// try {
//   console.log("エラーを発生させます")
//   throwError()
//   console.log("エラーを発生させました")
// } catch (err) {
//   console.log("エラーをキャッチしました")
//   console.log(err)
// }
// console.log("終わり")

// 例外処理と大域脱出

// const sum = (nums: number[]) => nums.reduce((prev, current, index, origin) => {
//   console.log(origin)
//   return prev + current
// })

// const getAverage = (nums: number[]) => {
//   if (nums.length === 0) return undefined
//   return sum(nums)
// }

// console.log(getAverage([1, 2, 3]))

// const throwError = () => {
//   const error = new Error("エラーが発生しました!!!")
//   throw error
//   console.log("これも表示されない error")
// }

// try {
//   throwError()
//   console.log("これは表示されない try")
// } catch (err) {
//   console.log(err)
// }

// try {
//   const bigInt = BigInt("foobar")
//   console.log(bigInt)
// } catch (error) {
//   console.log(error)
// }

// finally で脱出に割り込む
// try {
//   console.log("try ブロック")
//   throwError()
// } catch (err) {
//   console.log(err)
//   console.log("catch ブロック")
// } finally {
//   console.log("finally ブロック")
// }

// const sum = (max: number): number => {
//   try {
//     let result = 0
//     for (let i = 1; i <= max; i++) {
//       result += i
//     }
//     return result
//   } finally {
//     console.log("sum から脱出します!!!")
//   }
// }

// console.log(sum(100))

// class EmptyArrayError extends Error { }

// const sum = (nums: number[]) => nums.reduce((prev, current) => prev + current)

// const getAverage = (nums: number[]) => {
//   if (nums.length === 0) throw new EmptyArrayError("配列が空です。")
//   return sum(nums) / nums.length
// }

// try {
//   getAverage([1, 2, 3])
//   getAverage([])
// } catch (err) {
//   if (err instanceof EmptyArrayError) {
//     console.log("EmptyArrayError をキャッチしました。")
//   } else {
//     throw err
//   }
// }

class EmptyUserName extends Error { }

class User {
  readonly name: string
  readonly age: number

  constructor(name: string, age: number) {
    if (name === "") throw new EmptyUserName("名前は空にできません。")

    this.name = name
    this.age = age
  }

  getMessage(message: string): string {
    return `${this.name}(${this.age}) 「${message}」`
  }
}

const otegami = new User("otegami", 28)
console.log(otegami.getMessage("こんにちは"))

const createUser = (name: string, age: number): (x: string) => string => {
  return (message: string) => `${name}(${age}) 「${message}」`
}

const getMessage = createUser("otegami", 28)
console.log(getMessage("こんにちは"))
