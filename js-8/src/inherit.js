// 原型链继承的问题：
// 1、原型包含的引用值会在所有是类共享，
// 原型实现继承时，原型会成为另一个类型的实例，导致原先的实力属性成为原型属性
// 2、子类实例化时不能给父类型构造函数传参

function SuperType1() {
    this.colors = ["red", "green", "blue"];
}

function SubType1() {
}

SubType1.prototype = new SuperType1;

let instance1 = new SubType1()
instance1.colors.push("black");
console.log(instance1.colors);//[ 'red', 'green', 'blue', 'black' ]

let instance11 = new SubType1();
console.log(instance11.colors)//[ 'red', 'green', 'blue', 'black' ]

// 盗用构造函数：在子类构造函数中调用父类构造函数--可以在子类构造汉书中向父类构造函数传参
function SuperType2(name) {
    this.name = name;
}


function SubType2(name, age) {
    SuperType2.call(this, name)
    this.age = age
}

let instance2 = new SubType2("小明", 29)
console.log(instance2)//SubType2 { name: '小明', age: 29 }
// 问题：1、必须在构造函数汇总定义方法，函数不能重用；2、子类不能访问父类原型上定义的方法

// 组合式继承（原型链与盗用构造方法）
function SuperType3(name) {
    this.name = name
    this.colors = ["red", "green", "blue"]
}

SuperType3.prototype.getColors = function () { // 不能使用箭头函数
    console.log(this.colors)
}
SuperType3.prototype.add = function (color) {
    this.colors.push(color)
}
SuperType3.prototype.getName = function () {
    console.log(this.name)
}

function SubType3(name, age) {   // 继承属性
    SuperType3.call(this, name)
    this.age = age
}

SubType3.prototype = new SuperType3()  // 继承方法

SubType3.prototype.getColor = function (index) {
    console.log(this.colors[index])
}
SubType3.prototype.delete = function (color) {
    this.colors.splice(this.colors.indexOf(color), 1)
}
SubType3.prototype.getAge = function () {
    console.log(this.age)
}

let instance3 = new SubType3("小红", 18)
console.log(instance3.colors) //[ 'red', 'green', 'blue' ]
instance3.getColors() //[ 'red', 'green', 'blue' ]
instance3.getColor(1) //green
console.log(instance3.colors[0]) //red
instance3.getName() //小红
instance3.getAge() //18
console.log(instance3) //SuperType3 { name: '小红', colors: [ 'red', 'green', 'blue' ], age: 18 }
instance3.add("black")
console.log(instance3)
/*
SuperType3 {
  name: '小红',
  colors: [ 'red', 'green', 'blue', 'black' ],
  age: 18
}
*/
instance3.delete("red")
console.log(instance3)
/*
SuperType3 {
  name: '小红',
  colors: [ 'green', 'blue', 'black' ],
  age: 18
}
*/
// 父类构造函数会被调用两次：1、创建子类原型时调用；2、子类构造函数中调用


// 原型式继承
// 创建一个临时构造函数，将传入的对象复制给这个构造函数的原型，然后返回这个临时类型的实例；
// 本质是对传入的对象执行了一个浅复制
// ES5增加了Object.create（）方法将原型式继承的概念规范化

let person = {
    name: "小明",
    friends: ["a", "b", "c", "d"]
}

let person1 = Object.create(person)
person1.name = "小红"
person1.friends.push("小明")
console.log(person1)//{ name: '小红' }
console.log(person1.friends)//[ 'a', 'b', 'c', 'd', '小明' ]

let person2 = Object.create(person)
person2.name = "小黄"
person2.friends.splice(person1.friends.indexOf("c"), 1)
console.log(person2) //???? { name: '小黄' }
console.log(person2.friends) //[ 'a', 'b', 'd', '小明' ]

// 寄生式继承

// 思路类似寄生构造函数和工厂模式：创建一个实现继承的函数。以某种方式增强对象并返回这个对象
function createAnother(original) {
    let clone = Object(original)
    clone.get = function () {
        console.log(clone)
    }
    return clone;
}

let a = ["a", "b", "c", "d"]
let aa = createAnother(a)
aa.get() //[ 'a', 'b', 'c', 'd', get: [Function (anonymous)] ]

// 寄生式组合继承
// 通过盗用构造方法继承属性，使用混合原型链继承方法；
// 思路是不通过调用父类构造方法给子类原型赋值，而是取得父类原型的一个副本
// 使用盗用构造函数继承属性--调用一次父类构造函数
// 使用寄生式继承prototype--比起组合式继承要调用一次父类构造函数

function inheritPrototype(subType, superType) {
    let protoType = Object(superType.prototype)  // 创建对象
    protoType.constructor = subType  // 增强对象
    subType.prototype = protoType  // 赋值对象
}

function SuperType4(name) {
    this.name = name
    this.colors = ["red", "green", "blue"]
}

SuperType4.prototype.getName = function () {
    console.log(this.name)
}

function SubType4(name, age) {  // 盗用构造函数
    SuperType4.call(this, name)
    this.age = age
}

inheritPrototype(SubType4, SuperType4)

SubType4.prototype.getAge = function () {
    console.log(this.age)
}

let instance4 = new SubType4("小紫", 12)
console.log(instance4) //SubType4 { name: '小紫', colors: [ 'red', 'green', 'blue' ], age: 12 }
instance4.getName() //小紫
instance4.getAge() //12