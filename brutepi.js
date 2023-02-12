
//Estimating the value of Pi using Monte Carlo
//node --max-old-space-size=8192          3660 iterations / 1 mb, 0.000273224044/it
var process = require('process');
//var os = require('os');
var os = require('os-utils');
let x = 0;
let y = 0;
let cpts = 0;
let sqpts = 0;
let d = 0;
let pi =  0;
let pts = [];
let it = 100000000*100/10*100;// /2000000; 
let maxitforpts = 501; //5000 most accurate that works in desmos

let hits = 0;
if (it > 14991360) {
var os2 = require('os');
console.warn("iterations! "+it);
console.log("hey! "+it+" iterations requires > 4GB of heap memory allocated! it needs ~"+0.000273224044*it+" MB if you log points! ("+0.000000266820355*it+" GB) make sure to use node --max-old-space-size="+(0.000273224044*it+1).toFixed(0)+" or lower the iteration count :)");
if (os2.freemem() < 286.496175*it) {
	console.warn("NOT ENOUGH FREE MEMORY! will likely error D:");
}

}
let r = .5;
let loginc = it/100; //1%
let p = -1;
function between(min, max) {  
  return (
    Math.random() * (max - min + 1) + min
  )
}

console.time("time");
let i = 0;
for (i=0; i<it; i++) {

if (i < 16777216-2) {
console.time(i); //call takes time and can crash at higher iteration counts due to running out of internal ids
}

x = between(-r,r)-r;
y = between(-r,r)-r;
d = x*x + y*y;
if (it < maxitforpts){
pts.push("("+x+","+y+")"); //takes up mem!!
}

if (d<=2*r*2*r) {
cpts++;
}
sqpts++;
pi = 4*(cpts/sqpts);
if (pi == Math.PI) { console.log("\nWOWIE!\n"); hits++;}

//console.log(i,x,y,d,cpts,sqpts,pi);
//console.timeEnd(i);


if (i%loginc == 0) {
if (i < 16777216) {
console.timeEnd(i);
}
p++;
console.log("it","x","y","d","cpts","sqpts","pi~");
console.log(i,x,y,d,cpts,sqpts,pi,p+"%");  

console.log("mem",process.memoryUsage().heapUsed+"/"+process.memoryUsage().heapTotal+" AKA "+(process.memoryUsage().heapUsed/Math.pow(1024,3)).toFixed(3)+"/"+(process.memoryUsage().heapTotal/Math.pow(1024,3)).toFixed(3)+" GB");
//console.log( 'CPU Usage (%): ' + os.cpuUsage() + " at "+p+"% / iteration "+ it);
}
}
//console.log("average cpu load for the past 1 minute", os2.loadavg()[0],"5m",os2.loadavg()[1],"15m",os2.loadavg()[2]);
pi = 4*(cpts/sqpts);
console.timeEnd("time");
console.time("compnum");
if (pts.length <= 500) {console.log(pi,pts);let longpt = "";pts.forEach(point => {longpt += point + ",";});longpt = longpt.slice(0, longpt.length - 1);console.log(pi,"desmos\n"+longpt);}
console.timeEnd("compnum");
console.log("hits to actual pi:",hits,"pi ~",pi);
console.log("% error",((Math.PI-pi)/Math.PI)*100);


//f(x) = 1, f(x) = -1, f(y) = 1, f(y) = -1, x^2 + y^2 = 1
//[paste points]