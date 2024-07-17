class Person {
}
console.log(Person);
console.log(typeof Person); //类是一种特殊函数
const animal = class {
}
let person = new Person();

//类定义不能提升，受块用域限制
//包含构造函数，实例方法，获取函数，设置函数，静态类方法

//类定义语法把类块中定义的方法作为原型方法

class Person1{
    constructor(name){
        this.name_=name
        this.sayHi=function (){
            console.log("Hi")
        }
    }
    getName=function (){
        console.log(this.name_)
    };

    //类方法等同于对象属性，因此可以使用字符串、符号或者计算的值作为键
    ["say"+"hello"](){
        console.log("Hello")
    }

    set name(newName){
        this.name_=newName;
    }

    get name(){
        return this.name_
    }

    static locate(){
        console.log("haha");
    }

    getProtoTypeN(){
        console.log(this.n);
    }
}

let person1=new Person1("小明")
person1.sayHi()
person1.getName()
person1.sayhello()
person1.name="jake"
console.log(person1.name)
Person1.locate()
//类定义不显式支持在类上或者原型上添加成员函数，但在外部可以手动添加
person1.age=16
console.log(person1)

Person1.prototype.n="小红"
let p=new Person1()
p.getProtoTypeN()

/*继承*/

class A{
    constructor(){
        console.log("A是B的父类")
    }
    A="A"
}

class B extends A{
    constructor() {
        super(); //如果显式定义了构造函数，则必须条用super()或者在其中返回一个对象
    }
    B="B"
}

let b=new B()
console.log(b)


//类混入，值混入多个对象的属性使用Object().assign（）；混入类的行为需要自己实现表达式

//一种策略是定义一组“可嵌套”的函数，每个函数分别接受一个超类作为参数，而将混入类定义为这个参数的子类，并返回这个类

class C{}

let D=(Superclass)=>class extends Superclass{
    D="D"
}

let E =(Superclass)=> class extends Superclass{
    E="E"
}

let F=(Superclass)=>class extends Superclass{
    F="F"
}

class CDEF extends D(E(F(C))){}

let cdef = new CDEF()
console.log(cdef)
