// for-in(枚举对象中非符号键属性)
for(let i in [1,2,3]){
    console.log(i); //0 1 2
}

//for-of（枚举对象中元素）
for(let i of [1,2,3]){
    console.log(i); //1 2 3
}

//标签语句
start :for(let i in [1,2,3]){
    console.log(i); //0 1 2
}
//with
let o={
    name : "John",
    age : 18,
    birth : "January",
}
with (o) {
    console.log(name); //john
    console.log(age); //18
    console.log(birth); //january
}