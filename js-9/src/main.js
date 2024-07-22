// 代理与反射

// 代理是对象目标的抽象

// Proxy接受两个参数：目标对象和处理程序对象
// 捕获器是在处理程序独一项中定义的“基本操作的拦截器”

const target = {
    foo:"bar"
}

const handler={
    get(){
        return "hello"
    }
}

const proxy =new Proxy(target,handler)

console.log("proxy",proxy.foo) //proxy hello
console.log("target",target.foo) //target bar

console.log("proxy",proxy["foo"]) //proxy hello
console.log("target",target["foo"]) //target bar

// k可以调用全局Reflect对象上（封装了原始行为）的同名方法来轻松重建

const handler1={
    get(){
        return Reflect.get(...arguments)+" hello,handler1"
    }
}
const proxy1=new Proxy(target,handler1)
console.log("proxy",proxy1.foo) //proxy bar hello,handler1
console.log("target",target.foo) //target bar

const handler2={
    get:Reflect.get
}
const proxy2=new Proxy(target,handler2)
console.log("proxy",proxy2.foo) //proxy bar
console.log("target",target.foo) //target bar

// 捕获器不变式---每个获得的方法都知道目标对象上下文、捕获函数签名，但捕获处理程序的行为必须遵循“不变式”以防止出现反常行为

// 可撤销代理 revocable（）方法支持撤销代理对象与目标对象的关联

