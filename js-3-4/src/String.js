//可以用("")、('')、(``)标示
console.log("string"); //string
console.log('string'); //string
console.log(`string`); //string

let s="String "
// 长度
console.log(s.length); //7
// 字符串不可变，修改是先销毁后分配空间保存的。
s="new "+s
console.log(s); //new String

// 字符串转换，toString()，null与undefined没有该方法；接受底数参数
const num=10;
console.log(num.toString(2)); //1010
// 字符串转换String()将null与undefined分别转为"null"与"undefined"

// 模板字面量
const s1=`a
b
c`
console.log(s1.length); //5
console.log(s1);
/*
a
b
c
*/
const s2=`
    a
    b
    c`
console.log(s2.length); //18
console.log(s2);
/*
    a
    b
    c
*/

const name="小明"
console.log(`你好，${name}`); //你好，小明

let foo={toString:()=>'小名'}
console.log(`你好，${foo}`); //你好，小名

// 标签函数
function zipTag(strings,...expressions){
    console.log(strings);
    console.log(expressions);
    return strings[0]+
        expressions.map((e,i)=>`${e}${strings[i+1]}`).join("");
}

let a=6,b=9
let m=zipTag`${a}+${b}=${a+b}`
console.log(m);
//['','+','=','']
//[6,9,15]
//6+9=15