const len = 8;
const str = "1234567890abcdefghijklmnopqrstuvwxyz";
const strLen = str.length;

export function random(){
let result:string="";
for (var i = 0; i < len; i++) {
  result += str[Math.floor(Math.random() * strLen)];
}
return result
}