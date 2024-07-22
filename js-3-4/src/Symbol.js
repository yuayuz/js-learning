let sym=Symbol("sym");
console.log(typeof sym); //symbol
console.log(sym); //Symbol(sym)

let sym_Object=Object(sym); //
console.log(typeof sym_Object); //object

// 可在全局符号注册表中必须用用字符串创建并重用,并且与 Symbol()定义的符号不相同
let sym2=Symbol.for('foo')
let sym3=Symbol('foo')
console.log(typeof sym2) //symbol
console.log(sym2===sym3); //false
// 使用 Symbol.keyFor()查询
console.log(Symbol.keyFor(sym2)); //foo
