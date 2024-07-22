// from将类数组结构转换为数组实例
console.log(Array.from("hello")) //[ 'h', 'e', 'l', 'l', 'o' ]
// 将集合与映射转换为数组
const m = new Map().set(1, 2)
    .set(3, 4)
const s = new Set().add(1)
    .add(2)
    .add(3)
    .add(4)
console.log(Array.from(m)) //[ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(s)) //[ 1, 2, 3, 4 ]

// 对数组进行浅复制
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const a2 = Array.from(a1)
console.log(a1)
/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

// 用逗号可以创建空位
const d=[1,,,,5]
console.log(d.length) //5
console.log(d) //[ 1, <3 empty items>, 5 ]

// 数组索引
let colors=["red","green","blue"]
console.log(colors[1]) //green
colors[colors.length]="black"
console.log(colors.length) //4
console.log(colors) //[ 'red', 'green', 'blue', 'black' ]

// Array.isArray()确定值是否是数组
console.log(Array.isArray(d)) //true

// 数组迭代器方法
// key返回索引迭代器，values返回元素迭代器，entries返回索引/值迭代器

// 数组复制、填充方法（都包含开始，不包含结束）
// fill，第一参数为填充数，第二、三参数为填充的开始、结束索引
// copyWithin。第一参数填充开始索引，第二三参数为填充值的索引范围（没用默认从0开始）

console.log(colors.toLocaleString())// 调用该函数时，会调用每个值的该函数--red,green,blue,black
console.log(colors.toString())// 返回数组字符串表示--red,green,blue,black
console.log(colors.valueOf())// 返回数组本身--[ 'red', 'green', 'blue', 'black' ]

// 栈方法-push推入。pop弹出(LIFO后进先出)
let a=[1,2,3,4,5,6,7,8,9,10]
a.push(11)
console.log(a.toString())//1,2,3,4,5,6,7,8,9,10,11
a.push(2)
console.log(a.toString())//1,2,3,4,5,6,7,8,9,10,11,2
let aa=a.pop()
console.log(aa) //2
console.log(a.toString())//1,2,3,4,5,6,7,8,9,10,11

// 队列方法 shift与push（FIFO先进先出）
let b = [1,2,3,4,5,6,7,8,9,10]
b.push(2)
console.log(b.toString()) //1,2,3,4,5,6,7,8,9,10,2
console.log(b.shift())
console.log(b.toString())//1

// 排序方法reverse()反向排序，sort()升序
let c=[1,2,3,4,5,6,7,8,9,10]
c.reverse()
console.log(c.toString()) //10,9,8,7,6,5,4,3,2,1
c.sort()// 按照字符串形式排列为1,10,2,3,4,5,js-6,7,8,9
console.log(c.toString()) //1,10,2,3,4,5,6,7,8,9
c.sort((a,b)=>a>b?-1:a<b?1:0)
console.log(c.toString()) //10,9,8,7,6,5,4,3,2,1

let e=[1,2]
let f=[3,4,5,6,7]
console.log(e.concat(f))
/*
[
  1, 2, 3, 4,
  5, 6, 7
]

*/

// 打平数组参数？？？？

// slice()创建包含原有数组一个或者多个元素的新数组
console.log(f.slice(1,4))// 包含头但不包含为

// splice() 始终返回数组中被删除的元素
let g=["a","b","c","d","e"];
// 删除：传入两个参数，要删除的第一个元素的位置，要要删除元素的数量
console.log(g.splice(1,2)) //[ 'b', 'c' ]
console.log(g) //[ 'a', 'd', 'e' ]
// 插入：传入3个参数，开始位置，0,要插入的元素
g.splice(1,0,"f","g")
console.log(g) //[ 'a', 'f', 'g', 'd', 'e' ]
// 替换：传入三个参数，开始位置，要删除的元素数量，要插入的元素
g.splice(1,2,"b","c")
console.log(g) //[ 'a', 'b', 'c', 'd', 'e' ]

// 数组迭代方法（接受三个参数，数组元素，数组索引，数组本身）
// every()对数组每一项运行传入的函数，都返回true则返回true
// filter()对数组每一项运行传入的函数,将返回为true的项组成数组返回
// foreach()对数组每一项运行传入的函数,无返回值
// map()对数组每一项运行传入的函数,返回结果
// some()对数组每一项运行传入的函数,有一项返回true则返回true

// 归并方法(接受四个参数，上一归并值，当前项，当前项索引，数组本身)两者归并方向不同
let values=[1,2,3,4,5,6,7,8,9,10]
let sum1=values.reduce((a,b)=>a+b)
console.log(sum1) //55
let sum2=values.reduceRight((a,b)=>a+b)
console.log(sum2) //55
