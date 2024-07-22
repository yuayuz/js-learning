let now =new Date("2024-07-13T08:00:57.657Z");
console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`);//2024-7-13
console.log(now) //2024-07-13T08:00:57.657Z

let date1=new Date(Date.parse("2014-07-12"));
console.log(date1) //2014-07-12T00:00:00.000Z

let date2=new Date(Date.UTC(2014, 0,1));// 0 起点月数
console.log(date2) //2014-01-01T00:00:00.000Z

// toLocaleString
console.log(now.toLocaleString()) //2024/7/13 16:00:57
// toString
console.log(now.toString()) //Sat Jul 13 2024 16:00:57 GMT+0800 (中国标准时间)
// valueOf()部返回字符串，返回日期毫秒表示
console.log(now.valueOf()) //1720857657657

console.log(now.toDateString())//Sat Jul 13 2024
console.log(now.toTimeString())//16:00:57 GMT+0800 (中国标准时间)
console.log(now.toLocaleDateString())//2024/7/13
console.log(now.toLocaleTimeString())//16:00:57
console.log(now.toUTCString())//Sat, 13 Jul 2024 08:00:57 GMT