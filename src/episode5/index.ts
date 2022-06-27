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

class User {
  static adminName: string = "kodama"
  static getAdminUser() {
    return new User(User.adminName, 26)
  }

  constructor(public name: string, private age: number) {
    this.name = name
    this.age = age
  }

  isAdult(): boolean {
    return this.age >= 20
  }

  setAge(newAge: number) {
    this.age = newAge
  }
}

const otegami = new User('otegami', 28)
console.log(otegami.name)
console.log(otegami.isAdult())

console.log(User.adminName)
const admin = User.getAdminUser()
console.log(admin.isAdult())

// console.log(otegami.adminName)
