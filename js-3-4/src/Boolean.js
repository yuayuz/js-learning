/*Boolean的true与false区分大小写，TRUE与FALSE不是Boolean*/
// string非空字符转为true，""转为false
console.log("String")
console.log(Boolean("1"))
console.log(Boolean(""))
// Number非0数值转为true，0与NaN转为false
console.log("Number")
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(NaN))
// Object任意对象转为true，null转为false
console.log("Number")
console.log(Boolean({}))
console.log(Boolean(null))
// Undefined不存在传为true，undefined转为false
console.log("Undefined")
console.log(Boolean())
let u
console.log(Boolean(u))