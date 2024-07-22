// typeof 操作符
const num=1
console.log(typeof num) //number
console.log(typeof (num)) //number
console.log(typeof "num") //string

// undefined 为假值，未赋值变量自动赋予 undefined，“未声明也自动赋予”
let n;
console.log(typeof n) //undefined
console.log(typeof m) //undefined
if(n){
    n="不会执行"
    console.log(n)
}

if(!n){
    n="会执行"
    console.log(n)
}
//会执行

/*
if(m){
    // 报错
}*/




