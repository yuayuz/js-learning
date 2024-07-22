// var为函数作用域，let为块作用域
function test_var() {
    var message = "hi"
    console.log(message)
}
// console.log(message)
if(true){
    var name="dog"
    console.log(name)
    let age = 3
    console.log(age)
}
console.log(name)
// console.log(age)


// var声明提升,let暂时性死区
function test_var2() {
    console.log(message)
    var message = "hello var2"
}
test_var2()

// console.log(age)
// let age = 3

// var会渗透到循环外部，let不会
for (var i = 0; i < 5; ++i) {
}
console.log(i)
for(let j=0;j<5;++j){}
// console.log(j)

// var进行超时逻辑时，z为同一变量
// let会创建新迭代变量
for (var z = 0; i < 5; ++i) {
    setTimeout(() => console.log(z), 0)
}
for(let j=0;j<5;++j){
    setTimeout(() => console.log(j), 0)
}

// const必须初始化，为块作用域,可视为常量

const num = "const1"
if (true) {
    const num = "const2"
}
console.log(num)

// const只限制指向的变量，可以修改其内部属性
const people = {}
people.name = "小明"
console.log(people)
