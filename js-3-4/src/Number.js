// Number
const intNum1=1 // 十进制
console.log(intNum1) //1
const intNum2= 0o70 // 八进制
console.log(intNum2) //56
const intNum3= 0xA // 十六进制
console.log(intNum3) //10

const floatNum1=.1 // 有效，不推荐
console.log(floatNum1) //0.1
const floatNum2=1. // 视为整数
console.log(floatNum2) //1
const floatNum3=1.0 // 视为整数
console.log(floatNum3) //1
let floatNum4=0.0000003 // 小数点后至少包含 6 个 0 的浮点值自动转为科学计数法
console.log(floatNum4) //3e-7

// 特殊数值 NaN（Not a Number）,用于表示本来要返回数值的操作失败，判断函数为 NaN()
console.log(isNaN(1)) //false
console.log(isNaN(NaN)) //true

// 数值转换
// Number()将 undefined 转为 NaN
console.log("Number") //Number
console.log(isNaN(()=>Number(undefined))) //true
// ""转为 0
console.log(Number("")) //0

// parseInt()
// ""转为 NaN
console.log(parseInt("")) //NaN
// 1234red 转为 1234
console.log(parseInt("1234red")) //1234
// 浮点数转为整数
console.log(parseInt("1.1")) //1
// parseInt()第二个参数用于指定底数
console.log(parseInt("100",10)) //100
console.log(parseInt("100",16)) //256
