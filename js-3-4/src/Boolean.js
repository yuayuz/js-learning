// Boolean的true与false区分大小写，TRUE与FALSE不是Boolean
// string非空字符转为true，""转为false
console.log("String") //String
console.log(Boolean("1")) //true
console.log(Boolean("")) //false
// Number 非 0 数值转为 true，0 与 NaN 转为 false
console.log("Number") //Number
console.log(Boolean(1)) //true
console.log(Boolean(0)) //false
console.log(Boolean(NaN)) //false
// Object 任意对象转为 true，null 转为 false
console.log("Object") //Object
console.log(Boolean({})) //true
console.log(Boolean(null)) //false
// Undefined 不存在传为 true，undefined 转为 false
console.log("Undefined") //Undefined
console.log(Boolean()) //false
let u
console.log(Boolean(u)) //false