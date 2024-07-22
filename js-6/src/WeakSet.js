const a = {id: 1},
    b = {id: 2},
    c = {id: 3},
    d = {id: 4}

let weakSet = new WeakSet([a,b,c,d])
weakSet.add(a)
console.log(weakSet.has(a))// true
weakSet.delete(b)
console.log(weakSet.has(b)) //false

//不可迭代