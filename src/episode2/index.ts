// 下記の場合は true になるのでよく使われる
null == undefined
null == null

const secret = process.env.SECRET ?? 'default'
console.log(`secret は、 ${secret} です。`)

