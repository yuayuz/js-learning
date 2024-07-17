/*Object*/
let person = {
    name: "小明",
    age_: 25,
    sayName() {
        console.log(this.name)
    }
}

Object.defineProperty(person, "Age", { // 定义访问器属性
    get() {
        return this.age_;
    },
    set(value) {
        this.age_ = value;
    }
})

person.Age = 29
console.log(person) //{ name: '小明', age_: 29, sayName: [Function: sayName] }

Object.defineProperties(person, {  //一次性定义多个属性
    name: {
        value: "小红"
    },
    birth: {
        value: 2017
    }
})
console.log(person) //{ name: '小红', age_: 29, sayName: [Function: sayName] }

// 读取属性的特性
let descriptor = Object.getOwnPropertyDescriptor(person, "Age");
console.log(descriptor)
/*
{
  get: [Function: get],
  set: [Function: set],
  enumerable: false,
  configurable: false
}
*/

// 合并对象
const a = {
    a: "a"
}

Object.assign(person, a)// assign对每个源对象进行浅复制
console.log(person) //{ name: '小红', age_: 29, sayName: [Function: sayName], a: 'a' }

// Object.is()判定对象标识是否相等

// 可计算属性，使用变量作为属性--先声明对象，让后通过中括号添加

const bName = "b"
let b = {}
b[bName] = "b"
console.log(b[bName]) //b

// 对象解构

let {name, age_, newA = "new", b1} = person
console.log(name) //小红
console.log(age_) //29
console.log(newA)//定义默认值--new
console.log(b1)//引用对象不存在--undefined

// 可以用解构复制对象属性，同时可以嵌套解构(外层属性没有定义则不能使用嵌套解构)
const newB = "new_b"
person[newB] = b;
console.log(person)
/*
{
  name: '小红',
  age_: 29,
  sayName: [Function: sayName],
  a: 'a',
  new_b: { b: 'b' }
}
*/

let c = {
    c: "c"
};

({
    name: c.name,
    age_: c.age_,
    new_b: c.new_b,
} = person)
console.log(c)
//{ c: 'c', name: '小红', age_: 29, new_b: { b: 'b' } }



// 创建对象

// 工厂模式
function createPerson(name, age) {
    let o = {}
    o.name = name
    o.age = age
    o.sayName = function () {
        console.log(o.name)
    }
    return o;
}

let newO = createPerson("o", 22)
console.log(newO)

// 构造函数模式
function Dog(dogName, dogAge) { //函数声明
    this.dogName = dogName
    this.dogAge = dogAge
}

//也可以是函数表达式
/*let Dog=function (dogName,dogAge) {
    this.dogName=dogName
    this.dogAge=dogAge
}*/
let dog1 = new Dog("小黄", 3)
console.log(dog1) //Dog { dogName: '小黄', dogAge: 3 }

// 原型--每个函数都会创建一个prototype属性，该属性是个对象，包含着相应对象实例共享的属性和方法
// 原型对象会自动获得一个constructor属性，指向与其关联的构造函数
// 每次调用构造函数创建一个新实例，实例内部[[prototype]]指针会赋值为构造函数的原型对象
Dog.prototype.dog = "dog" //构造函数中副值给对象实例的值也可以给他们的原型

console.log(dog1 instanceof Dog)// instanceof检查实例原型链中是否包含指定构造函数的原型--true
console.log(Dog instanceof Object)//true

//isPrototypeOf--确定实例是否指向Dog.prototype
console.log(Dog.prototype.isPrototypeOf(dog1))//true

//Object.getPrototypeOf()返回参数内部的[[prototype]]值
console.log(Object.getPrototypeOf(dog1) === Dog.prototype) // 确定该函数返回的对象就是Dog的原型对象--true
console.log(Object.getPrototypeOf(dog1).dog) //dog

//dog1可以取得dog属性
console.log(dog1.dog)//dog
console.log(dog1.hasOwnProperty("dog"))//false
//hasOwnProperty确定属性在实例上还是在原型上.在原型上返回true

// in单独使用时在能通过对象访问指定对象是返回true，无论在原型或者实例上
console.log("dog" in dog1) //true
console.log("dog" in Object.getPrototypeOf(dog1))//true

// 在对象实例中添加同名属性，会遮蔽原型对象上的同名属性
let dog2 = new Dog("dog2", 6)
dog2.dog = "aaa"
console.log(dog2.dog) //aaa

// 对象迭代
// Object.values()返回对象值的数组
// Object.entries()返回键/值对的数组

// 可以通过对象.prototype={}重写原型对象，原型对象的constructor不再指向原先的构造函数
// 可以通过对象.prototype={ constructor：对象名 }重新设置

// 原型具有动态性，任何时候对其的修改都会在实例上显示出来
// 实例只有指向原型的指针，没有指向构造方法的指针


