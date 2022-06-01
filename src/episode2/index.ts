// 下記の場合は true になるのでよく使われる
null == undefined
null == null

const secret = process.env.SECRET ?? 'default'
console.log(`secret は、 ${secret} です。`)

const switcher = (name: string) => {
  switch (name) {
    case 'greet':
      console.log('こんにちは')
      break // <- これを忘れないで、無いと各 case を最後まで評価しちゃうよ
    case 'cat':
      console.log('あなたは猫派ですか？')
      break
    default:
      console.log(`${name}は、外れ値です。`)
  }
}

switcher('otegami')
