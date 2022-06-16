// // const obj = {
// //   foo: 123,
// //   bar: 'Hello, world'
// // }

// import { maxHeaderSize } from "http"

// // const typeObject: {
// //   foo: number,
// //   bar: string
// // } = {
// //   foo: 123,
// //   bar: true
// // }

// const obj = {
//   foo: 123,
//   bar: 'hi'
// }
// type T = typeof obj

// const obj2: T = {
//   foo: 50,
//   bar: ''
// }
// const foo = 50
// const bar = ''
// const res: typeof foo = typeof bar

// type FooBar = {
//   foo: string,
//   bar: number
// }

// type FooBarBaz = {
//   foo: string,
//   bar: number,
//   baz: boolean
// }

// const obj: FooBarBaz = {
//   foo: 'h1',
//   bar: 1,
//   baz: false
// }

// const obj2: FooBar = obj

// FooBarBaz は、FooBar の部分型になる

// type User = { name: string, age: number }
// const u: User = {
//   name: 'Uhyo',
//   age: 26,
//   telNumber: '09012345678'
// }
// const obj = {
//   name: 'Uhyo',
//   age: 26,
//   telNumber: '09012345678'
// }
// const user: User = obj

// type User<T> = {
//   name: string,
//   child: T
// }

// const obj: User<number> = {
//   name: '',
//   child: 1
// }

// type Family<Parent, Child> = {
//   mother: Parent,
//   father: Parent,
//   child: Child
// }

// error
// const obj: Family = {
//   mother: 0,
//   father: 100,
//   child: "1000"
// }

// type HasName = {
//   name: string
// }

// type Family<Parent extends HasName, Child extends Parent> = {
//   mother: Parent,
//   father: Parent,
//   child: Child
// }

// type Animal = {
//   name: string
// }

// type Human = {
//   name: string
//   age: number
// }

// type S = Family<Human, Animal>
// type T = Family<Animal, Human>

// type Animal = {
//   name: string
// }

// type Family<Parent = Animal, Child = Animal> = {
//   mother: Parent,
//   father: Parent,
//   child: Child
// }

// type T = Family

// const arr: readonly number[] = [1, 10, 100]
// // error
// arr[1] = 50

// const arr = [1, 10, 100]
// for (const elm of arr) {
//   console.log(elm)
// }

// let tuple: [string, number] = ["foo", 0]
// tuple = ["aiueo", -555]
// const str = tuple[0]
// const num = tuple[1]
// const nothing = tuple[2]

// type User = [name: string, age: number]

// const uhyo: User = ["uhyo", 26]

// console.log(uhyo[1])

// const obj = { foo: 1, bar: 'baz' }
// const { foo, bar } = obj
// console.log(foo)
// console.log(bar)

// const { foo: fooNumber, bar: barString } = obj
// console.log(fooNumber)
// console.log(barString)

// const nested = {
//   num: 123,
//   obj: {
//     foo: 'hello',
//     bar: 'world'
//   }
// }

// const { num, obj: { foo } } = nested
// console.log(num)
// console.log(foo)

// const arr = [1, 2, 4, 8, 16, 32]
// const [, foo, , bar, , baz] = arr
// console.log(foo)
// console.log(bar)
// console.log(baz)

// type Obj = { foo?: number }
// const obj1: Obj = {}
// const obj2: Obj = { foo: -1234 }

// const { foo = 500 } = obj1
// console.log(foo)

// const { foo: bar = 500 } = obj2
// console.log(bar)

// const obj = {
//   foo: 123,
//   bar: "string",
//   baz: false
// }

// const { foo, ...restObj } = obj
// console.log(foo)
// console.log(restObj)

// console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/g, "foobar"))

// const result = "Hello, abbbbbbbc world! abbc".match(/a(?<worldName>b+)c/)
// if (result !== null) {
//   console.log(result.groups?.worldName)
// }
// const result = "Hello, abbbbbbbc world! abbc".match(/a(b+)c/g)
// if (result !== null) {
//   console.log(result)
// }

// const map: Map<string, number> = new Map()
// map.set("foo", 1234)

// console.log(map.get("foo"))
// console.log(map.get("bar"))

// type User = {
//   name: string,
//   age: number,
//   premiumUser: boolean
// }

// const data: string = `
// kodama,28,1
// John Smith,17,0
// Mary Sue,14,1
// `


// const matchedUserData = data.match(/(\w*,\d*,\d)/g)
// const userStrings = matchedUserData ? matchedUserData : []

// const users: User[] = userStrings.map((userString) => {
//   const [name, age, premiumUser] = userString.split(',')
//   return { name, age: Number(age), premiumUser: Boolean(Number(premiumUser)) }
// })

// const userLines: string[] = data.split("\n").filter((line) => line !== "")
// const users: User[] = userLines.map((line) => {
//   const [name, ageString, premiumUserString] = line.split(",")
//   return {
//     name,
//     age: Number(ageString),
//     premiumUser: premiumUserString === "1"
//   }
// })

// for (const user of users) {
//   if (user.premiumUser) {
//     console.log(`${user.name}(${user.age})はプレミアムユーザーです。`)
//   } else {
//     console.log(`${user.name}(${user.age})はプレミアムユーザーではありません`)
//   }
// }

// const obj = {
//   double(num: number): number {
//     return num * 2
//   },
//   double2: (num: number): number => num * 2
// }

// console.log(obj.double(100))
// console.log(obj.double2(-50))

// type User = { name: string, age: number }

// const getName = (u: User): string => u.name
// const users: User[] = [{ name: 'uhyo', age: 26 }, { name: "John", age: 15 }]

// const names = users.map(getName)
// console.log(names)

// type F = (repeatNum: number) => string
// const xRepeat: F = (num: number): string => "x".repeat(num)
// xRepeat(1)

// function range(min: number, max: number): number[] {
//   const result = []
//   for (let i = min; i <= max; i++) {
//     result.push(i)
//   }
//   return result
// }

// const arr = range(5, 10)
// for (const value of arr) console.log(value)

// type HasName = {
//   name: string
// }
// type HasNameAndAge = {
//   name: string,
//   age: number
// }

// const fromAge = (age: number): HasNameAndAge => ({ name: "John Smith", age })
// const f: (age: number) => HasName = fromAge

// const obj: HasName = f(100)

// const showName = (obj: HasNameAndAge) => {
//   console.log(obj.name)
// }

// const g: (obj: HasName) => void = showName

// g({ name: "takuya", age: 28 })

// - 関数型
//   - 関数型の帰り値の型は、関数型の共変の位置にある
//   - 関数型の引数の型は、反変の位置にある

// F: (obj: HasName, num: number) => HasNameAndAge
// G: (obj: HasNameAndAge, num: number) => HasName

// 部分型には、2種類ある
//   - 引数の型は、反変の位置にある
//   - 戻り値の型は、共変の位置にある

// 引数
// HasName:> HasNameAndAge

// 返り値
// HasNameAndAge <: HasName

// type UnaryFunc = (arg: number) => number
// type BinaryFunc = (left: number, rigth: number) => number

// const double: UnaryFunc = arg => arg * 2
// const add: BinaryFunc = (left, rigth) => left + rigth

// const bin: BinaryFunc = double
// console.log(bin(10, 100))

// type HasName = { name: string }
// type HasNameAndAge = { name: string, age: number }

// type Obj = {
//   func: (arg: HasName) => string,
//   method(arg: HasName): string
// }

// const something: Obj = {
//   func: user => user.name,
//   method: user => user.name
// }

// const getAge = (user: HasNameAndAge) => String(user.age)

// something.func = getAge
// something.method = getAge
