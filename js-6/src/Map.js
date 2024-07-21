let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]);
console.log(map);
map.set("d", 4)// 添加键/值
if (map.has("a")) {// 查询
    console.log(map.get("a"))// 获得
}
map.delete("b")// 删除
console.log(map)
console.log(map.size)// 取得元素数量
map.clear()// 清空
console.log(map)

const map1 = new Map()
    .set("a", 1)
    .set("b", 2)
    .set("c", 3)
    .set("d", 4)

//迭代键/值
for (let pair of map1){
    console.log(pair)
}
for (let pair of map1.entries()){
    console.log(pair)
}

// 迭代键
for(let key of map1.keys()){
    console.log(key)
}

// 迭代值
for (let values of map1.values()){
    console.log(values)
}
