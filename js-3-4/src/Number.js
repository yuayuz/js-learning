/*Number*/
const intNum1=1// 十进制
console.log(intNum1)
const intNum2= 0o70// 八进制
console.log(intNum2)
const intNum3= 0xA// 十六进制
console.log(intNum3)

const floatNum1=.1// 有效，不推荐
console.log(floatNum1)
const floatNum2=1.// 视为整数
console.log(floatNum2)
const floatNum3=1.0// 视为整数
console.log(floatNum3)
let floatNum4=0.0000003// 小数点后至少包含6个0的浮点值自动转为科学计数法
console.log(floatNum4)

// 特殊数值NaN（Not a Number）,用于表示本来要返回数值的操作失败，判断函数为NaN()
console.log(isNaN(1))
console.log(isNaN(NaN))

// 数值转换
// Number()将undefined转为NaN
console.log("Number")
console.log(isNaN(()=>Number(undefined)))
// ""转为0
console.log(Number(""))

// parseInt()
// ""转为NaN
console.log(parseInt(""))
// 1234red转为1234
console.log(parseInt("1234red"))
// 浮点数转为整数
console.log(parseInt("1.1"))
// parseInt()第二个参数用于指定底数
console.log(parseInt("100",10))
console.log(parseInt("100",16))
