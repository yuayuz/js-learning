/*正则表达式*/

/*
    let expression =/pattern/flags
    pattern(模式)
    flags（标记）
*/

/*
    flags：
    g：全局模式，查找全部内容
    i：不区分大小写
    m：多行模式，茶找到一行文本末尾时会继续查找
    y：粘附模式，从lastIndex开始及之后的字符串
    u：Unicode模式
    s：dotAll模式，匹配任何字符
*/
//"\"转义，某些情况下需要二次转移

const text = "batCAt.cat"
let pattern1 = /[bc]at/gi
let matches1 = pattern1.exec(text)
console.log(matches1.index)
console.log(matches1[0])

let pattern2 = /.at/gi;//匹配所有at结尾的三字符
let matches2 = pattern2.exec(text)
console.log(matches2[0])
matches2 = pattern2.exec(text)
console.log(matches2[0])
matches2 = pattern2.exec(text)
console.log(matches2[0])

let pattern3 = /..at/gi
let matches3 = pattern3.exec(text)
console.log(matches3[0])
matches3 = pattern3.exec(text)
console.log(matches3[0])

let pattern4 = /at/gi//匹配所有at结尾的字符
let matches4 = pattern4.exec(text)
console.log(matches4[0])

//Boolean（不建议直接实例化）

let f=new Boolean(false) //所有对象在布尔表达式中自动转换为true
console.log(f&&true)
let f1=Boolean(false)
console.log(f1&&true)

//Number （不建议直接实例化）
//valueOf返回原始数值
//toString,toLocaleString返回数值字符串,toString可接受一个表示底数的参数
let num=10
console.log(num)
console.log(num.valueOf())
console.log(num.toString(2))
console.log(num.toString(16))
console.log(num.toLocaleString())
console.log(typeof num.toString())
console.log(typeof num.toLocaleString())

//toFix返回包含指定小数点位的数值字符串
console.log(num.toFixed(3))
//toExponential返回科学计数法，接受一个表示小数位数的参数
console.log(num.toExponential(1))

//String
//valueOf，toString,toLocaleString返回原始字符串值

//charAt返回相应索引的字符
let s="123456"
console.log(s.charAt(2))

//concat()拼接字符串
const hello=" hello,"
const world="world!! "
const helloWorld=hello.concat(world)
console.log(helloWorld)

//子字符串提取，第一个参数均为开始提取的位置，slice()，substring()第二个参数表示字符串结束的位置。
// substr()第二个参数表示返回子字符串的数量
console.log(helloWorld.slice(3))
console.log(helloWorld.slice(0,5))
console.log(helloWorld.substring(0,5))

//从头或者尾查找字符串的索引
console.log(helloWorld.indexOf("l"))
console.log(helloWorld.lastIndexOf("e"))

//在头部查找字符串
console.log(helloWorld.startsWith("he"))
console.log(helloWorld.startsWith("e"))
//在尾部查找字符串
console.log(helloWorld.endsWith("d!"))
console.log(helloWorld.endsWith("e"))
//查找字符串
console.log(helloWorld.includes("ll"))
//去除头尾部的空格
console.log(helloWorld.trim())
//将字符串重复打印
console.log("as".repeat(4))
//填充字符串，从头部或者尾部填充空格
console.log("as".padStart(4))
console.log("as".padEnd(4))
//解构
console.log([...helloWorld])
//将字符串转换为大写或者小写
console.log(helloWorld.toUpperCase())
console.log(helloWorld.toUpperCase().toLowerCase())
//比较字母表顺序
const num1="ab"
const num2="ac"
console.log(num1.localeCompare(num2))
