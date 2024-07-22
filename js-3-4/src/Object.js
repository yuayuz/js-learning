let o={}

o.constructor=()=>console.log('constructor')
console.log(o.constructor) //[Function(anonymous)]
o.name="Object"
console.log(o.hasOwnProperty("name")); //true
console.log(o); //{ constructor: [Function (anonymous)], name: 'Object' }
console.log(o.toString()); //[object Object]
console.log(o.valueOf()); //{ constructor: [Function (anonymous)], name: 'Object' }
