let o={}

o.constructor=()=>console.log('constructor') //?????
console.log(o.constructor)//????
o.name="Object"
console.log(o.hasOwnProperty("name"));
console.log(o);
console.log(o.toString());
console.log(o.valueOf());
