// 每个函数都是Function的类型的实力。函数是对象，因此函数名是指向函数对象的指针

/*定义函数*/

// 函数声明
function f(num1, num2) {
    return num1 + num2;
}

// 函数表达式
let f1 = function (num1, num2) {
    return num1 + num2;
}
// 箭头函数
let f2 = (num1, num2) => {
    return num1 + num2;
};
// 构造函数--不推荐（会被解释两遍，第一遍当作ECMAScript代码，第二遍解释传给构造函数的字符串）
let f3 = new Function("num1", "num2", "return num1+num2");


// ！！！箭头函数不能使用arguments、super金额new.target，也不能当作构造函数；箭头函数没有prototype属性

// 函数名是指向函数的指针，一次一个函数可以有多个函数名；
// 使用Function构造函数创建，name会被标识为“anonymous”


/*参数*/
// ECMAScript的函数参数在内部表现为一个数组，函数在调用时总会接收一个数组并不关心数组包含什么，不关心传入的参数个数
// 在使用function关键字定义（非箭头）函数时，可以在函数内部访问arguments对象，从中获取传进来的每个参数值
// arguments对象的长度根据传入的参数个数而非定义函数时给出的命名参数个数确定
// 箭头函数不能使用arguments关键字访问，但可以在包装函数中把它提供给箭头函数
function foo(name) {
    let bar = () => {
        console.log(arguments[0]);
    }
    bar()
}

foo("小明")

/*ECMAScript函数没有重载*/

/*默认参数值*/
// ES6后支持显式定义默认参数，arguments对象的值不反映参数的默认值;可以使用调用函数的返回值
// 参数初始化遵循“暂时性死区”规则，参数按照顺序初始化，前面定义的参数不能引用后面定义的，后定义的默认参数可以引用先定义的参数
let x = function (name = "x", father = `${name}的父亲`) {
    console.log(name)
    console.log(father)
    console.log(arguments)
}
x()
x("小明")


/*扩展参数（分别传入数组元素）*/
function getSum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) { //
        sum += arguments[i]
    }
    console.log(sum)
}

const values = [1, 2, 3, 4]
getSum(...values)
getSum(5, ...values, ...[6, 7])

let sum = (a = 0, b = 0, c = 0) => {
    console.log(a + b + c)
}
sum(...[5])
sum(...[1, 2])
sum(...[1, 2, 3, 4])

/*收集参数*/

// 使用扩展操作符把不同俄对立参数组合为一个数组
function getSum1(...values) {
    return values.reduce((sum, value) => sum + value, 0)
}

console.log(getSum1(1, 2, 3))

let sum1 = (...values) => values.reduce((sum, value) => sum + value, 0)
console.log(sum1(1, 2, 3))

/*函数声明提升，函数表达式必须等到代码执行到那一行，才会在执行上下文中生成函数定义*/

/*函数作为值----函数名在ECMAScript中就是变量，因此可以把函数作为参数传入另一个函数，也可以从函数中返回另一个参数*/
function num(num1, num2) {
    return num1 + num2
}

let getSum3 = (sum, num1, num2, num3) => {
    return sum(num1, num2)
}
console.log(getSum3(num, 1, 2))


/*arguments*/

// arguments中有一个callee属性，指向arguments对象所在的函数，可用来在递归调用时的解耦
function factorial(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * arguments.callee(num - 1)
    }
}

console.log(factorial(5))

/*this*/
// 标准函数中，this引用的是把函数的当成方法调用的上下文对象，此时称其为this值
// 箭头函数，this引用的是定义箭头函数时的上下文

/*caller引用的是调用当前函数的函数*/
let a = function () {
    console.log(a.caller)
}
let b = function () {
    a()
}
b()

/*prototype保存引用类型所有实例方法的地方，从而有所有实例共享*/
/*apply()和call()*/
// apply()，接收两个参数，一个是this值，第二个参数是参数数组（可以是array实例也可以是，arguments对象）
// call()第一个参数为this值，剩下的要传给被调用函数的参数则需要逐个传入

/*函数表达式*/
// 函数表达式创建的函数被称为匿名函数（兰姆达函数），因为function关键字后没有标识符

/*尾调用优化---外部函数的返回值是一个内部函数的返回值*/
// 条件：1、严格模式；2、外部函数的返回值是对尾调用函数的调用


/*闭包*/
// 闭包是指引用了另一个函数作用域中变量的函数
let c = function (num1, num2) {
    let d = function () {       // 在闭包中使用this会是代码变复杂，匿名函数在这种情况下不会绑定某个对象，意味着this会指向window
        console.log(num1 + num2)
        console.log(this)
    }
    d()
}
c(1, 2);
/*立即调用的函数表达式（IIFE）*/
// 类似与函数声明，被包含在括号中会被解释为函数表达式，紧跟着第二组括号会立即调用前面的函数表达式
(function () {

})();

(function () {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
})();


/*私有变量（没有私有成员）*/

// 使用构造函数
function MyObject() {
    // 私有变量与函数--只能在函数中访问
    let privateVariable=10;
    function privateFunction() {
        return false
    }
    // 特权方法--闭包可以访问函数中的所有变量和函数
    this.publicFunction = function (){
        privateVariable++;
        return privateFunction
    }
}

// 使用私有作用域
(function (){
        //私有变量与函数--只能在函数中访问
        let privateVariable=10;
        function privateFunction() {
            return false
        }

        //构造函数
        let MyObject1=function (){}  //使用函数表达式

        MyObject1.prototype.publicFunction = function (){
            privateVariable++
            return privateFunction()
        }
    }
)()

