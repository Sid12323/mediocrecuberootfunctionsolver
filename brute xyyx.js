



let x = 0;
let y = 0;
let a = Math.pow(x,y);
let b = Math.pow(y,x);
let c = true;
function between(min, max) {  
  return (
    Math.random() * (max - min + 1) + min
  )
}
let i = 0;
for (i=0; i<10000; i++) {

console.time(i);
while (c) {
x = between(.1,9);
y = between(.1,9);
let a = Math.pow(x,y);
let b = Math.pow(y,x);
if ((a = b) && (x != y)) {
//c = false;
c = false;
console.timeEnd(i);
console.log(i,x,y,a);
}
}
c = true;
}