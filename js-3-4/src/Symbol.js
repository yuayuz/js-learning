let sym=Symbol("sym");
console.log(typeof sym);
console.log(sym);

let sym_Object=Object(sym);
console.log(typeof sym_Object);

// 可在全局符号注册表中必须用用字符串创建并重用,并且与Symbol()定义的符号不相同
let sym2=Symbol.for('foo')
let sym3=Symbol('foo')
console.log(typeof sym2)
console.log(sym2===sym3);
// 使用Symbol。KeyFor()查询
console.log(Symbol.keyFor(sym2));
