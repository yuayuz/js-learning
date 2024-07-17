/*typeof操作符*/
const num=1
console.log(typeof num)
console.log(typeof (num))
console.log(typeof "num")

/*undefined为假值，未赋值变量自动赋予undefined，“未声明也自动赋予”*/
let n;
console.log(typeof n)
console.log(typeof m)
if(n){
    n="不会执行"
    console.log(n)
}

if(!n){
    n="会执行"
    console.log(n)
}

/*
if(m){
    // 报错
}*/




