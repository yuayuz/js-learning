// for-in(枚举对象中非符号键属性)
for(let i in [1,2,3]){
    console.log(i);
}

//for-of（枚举对象中元素）
for(let i of [1,2,3]){
    console.log(i);
}

//标签语句
start :for(let i in [1,2,3]){
    console.log(i);
}
//with
let o={
    name : "John",
    age : 18,
    birth : "January",
}
with (o) {
    console.log(name);
    console.log(age);
    console.log(birth);
}