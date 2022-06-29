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

class User {
  name: string
  #age: number

  constructor(name: string, age: number) {
    this.name = name
    this.#age = age
  }

  public isAdult(): boolean {
    return this.#age >= 20
  }

  // public filterOrder(users: readonly User[]): User[] {
  //   return users.filter(u => u.#age > this.#age)
  // }
}

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

class A {
  static foo = 123
  static bar = this.foo + 100

  static {
    console.log("bar is", this.bar)
  }
}
