// *to uppercase------------>convert the string in uppercase
// let str='hello';
// console.log(str.toUpperCase());
// string method---------------------->(.includes()) is used to check if the particular character is present in string or not
// console.log(str.includes('he'))

// Reverse string----------------->(.reverse()) is used reverse the string
// let strr='hello'
// item=strr.reverse()
// console.log(item)

let str='hello';
let reversed=str.split("").reverse().join()
console.log(reversed)

// to check the length
console.log(str.length)
console.log(str.includes(""))
console.log(str.indexOf("h"))

console.log(str.slice(0,2))
console.log(str.replace('he','ge'))
