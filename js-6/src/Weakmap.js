const a = {id: 1},
    b = {id: 2},
    c = {id: 3},
    d = {id: 4}

weakMap = new WeakMap([   // 弱映射中的键只能是Object或者继承自Object的类型
    [a, 1],
    [b, 2],
    [c, 3],
]);
console.log(weakMap);//WeakMap { <items unknown> }
weakMap.set(d, 4)// 添加键/值
if (weakMap.has(a)) {// 查询
    console.log(weakMap.get(a))// 获得--1
}
weakMap.delete(b)// 删除
console.log(weakMap)//WeakMap { <items unknown> }

// 每有 clear 方法，不可迭代


//可以用来实现私有变量