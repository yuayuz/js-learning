const set1=new Set([1,2,3,4,5]); // 创建集合
console.log(set1); //Set(5) { 1, 2, 3, 4, 5 }
set1.add(6) // 添加
console.log(set1); //Set(6) { 1, 2, 3, 4, 5, 6 }
set1.delete(1)// 删除
console.log(set1);//Set(5) { 2, 3, 4, 5, 6 }

if(set1.has(6)){//查询
    console.log("js-6"); //js-6
}

// 迭代
for(let value of set1.values()){
    console.log(value)
}
//2 3 4 5 6
// values()为默认迭代器，因此可以对集合实例使用扩展操作，将其转换为数组
console.log([...set1]); //[ 2, 3, 4, 5, 6 ]

for(let value of set1.entries()){ //使得每个值重复出现
    console.log(value)
}
/*
[ 2, 2 ]
[ 3, 3 ]
[ 4, 4 ]
[ 5, 5 ]
[ 6, 6 ]
*/
