let num = 1;
console.log(num++);//1
console.log(++num);//3
console.log(num--);//3
console.log(--num);//1

// "+"在前无影响，“-”变为其负数
console.log(+num);//1
console.log(-num);//-1

num += num
console.log(num);//2
num -= num
console.log(num);//0

// ECMAScript的之一IEEE 754 64位格式存储，位操作县转换为32为进行操作再转换为64位（NaN与Infinity会被当0处理）
// 按位非（～）
let a = 1
let a1 = ~1
console.log(a.toString(2))//1
console.log(a1.toString(2))//-10

// &按位与
// |按位或
// 按位移或
// 左移
let b = 1;
let b1 = b << 1
console.log(b) //1
console.log(b1) //2

// 右移
let c = 1;
let c1 = c >> 1
console.log(c) //1
console.log(c1) //0

// 无符号右移
let d = -1;
let d1 = d >>> 1
console.log(d);//-1
console.log(d.toString(2))//-1
console.log(d1);//2147483647
console.log(d1.toString(2))//1111111111111111111111111111111

// 逻辑与&&，逻辑或||
let e = 6, f = 2
console.log(e * f) //12
console.log(e / f) //3
console.log(e % f) //0

// **指数操作符
console.log(2 ** 2) //4
let g = 3;
g **= 2
console.log(g) //9

// 等于==和不等于！==（会进行强制类型转换）
const n=1
const s="1"
console.log(n==s) //true

// 全等===和不全等！===（不会进行强制类型转换）
const n1=1
const s1="1"
console.log(n1===s1) //false

// 条件操作符
console.log(2>1?"a":"b") //a

