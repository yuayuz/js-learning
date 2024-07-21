// 期约是对尚不存在结果的一个替身

// ECMAScript6新增引用类型Promise，通过new操作符实例化；创建新期约时需要传入执行器（executor）函数作为参数
// 期约拥有三个状态（待定-pending；兑现、解决-fulfilled、resolved；拒绝-rejected）
// 期约的用途：1、抽象表示一个异步操作；2、期约封装的异步操作会实际生成某个值，
// 程序期待期约状态改变时可以访问这个值或者拒绝理由
// 期约会有一个内部值value或者reason

// 期约执行器
// 内部操作会在期约执行器中完成；期约转换状态通过调用他的两个函数参数实现-
// -resolve()与reject()，value或者reason分别对应着传入两个函数的第一个参数
// 执行器是期约初始化程序；1、初始化期约的异步行为2、控制状态的最终转换


// 期约的实例方法
// 实现Thenable接口-ECMAScript暴露的异步结构中，任何对象都有一个then()方法，被认为实现了该接口
// Promise.prototype.then()是为七月实例添加处理程序的主要方法，接收onResolved、onRejected处理程序（两个都可选）
// Promise.prototype.catch()用于为期约添加拒绝处理程序相当于调用Promise.prototype.then(null,onRejected)
// Promise.prototype.finally()用于为期约添加onFinally处理程序，其在期约转换为解决或者拒绝时都会执行


// 非重入期约方法---当期约进入落定状态时，与该状态相关的处理程序仅仅会被排期


// 期约连锁--期约的实例方法都会返回一个新的期约对象，而新期约对象又有自己的实例方法，这样连缀方法调用构成“期约连锁”
let p1 = new Promise(resolve => {
    console.log("p1");
    setTimeout(resolve, 1000)
});
p1.then(() => new Promise(resolve => {
    console.log("p2");
    setTimeout(resolve, 1000)
}))
.then(() => new Promise(resolve => {
    console.log("p3");
    setTimeout(resolve, 1000)
}))
.then(() => new Promise(resolve => {
    console.log("p4");
    setTimeout(resolve, 1000)
}))

// 期约合成
// Promise.all()静态方法创建的期约会在一组七月全部解决后再解决；接收一个可迭代对象返回一个新期约
// Promise.race()静态方法返回一个包装期约，是一组集合中最先解决或者拒绝的期约的镜像;接收一个可迭代对象返回一个新期约



// 异步函数（async/await）
// async用于声明异步函数，让函数拥有异步特征，始终返回期约对象。
// 在函数外部调用这个函数可以得到返回的期约
// 返回值期待（实际上不要求）一个实现thenable接口的对象，但常规值也可以。
// 如果返回该对象，这个对象可以由于提供then()的处理程序“解包”
// 如果不是，返回值当作已经解决的期约

//await可以暂停一部函数代码的执行，等待期约解决；
//await尝试“解包”对象的值，然后将这个值传给表达式，再异步恢复一部分函数的执行
// 必须在异步函数中使用
async function foo(){
    console.log(await Promise.resolve('foo'));
}
foo()

async function bar(){
    return await Promise.resolve('bar');
}
bar().then(console.log)

async function baz(){
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("baz")
}
baz()

// await期待（但实际上不要）一个实现thenable接口的对象，但常规值也可以
// 如果是实现了这个接口的对象，则这个对象有await“解包”
// 如果不是，则被当作已经解决的期约
/*
p1
foo
bar
p2
baz
p3
p4
*/