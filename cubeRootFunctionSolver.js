//CHANGE THESE TO MATCH THE SITUATION
//rounding accuracy
var accuracy = 10; 
//passes through:
var x1 = -5
var y1 = 12
//also passes through (main)
var x2 = 3
var y2 = 4
//also also passes through 
var x3 = 2
var y3 = 5

//ranges for values
var rA = -4
var rAv2 = -1
var rB = 8
var rBv2 = -8
var rH = -3
var rHv2 = 3
var rK = 6
var rKv2 = 9
// STOP HERE ****************

//Cuberoot function solver
var val,val2,val3 = 0;
var fits = false;
var a = 0;
var b = 1;
var h = 0;
var k = 0;
var x = 0;
var cycles = 0;
var cycles3 = 0;



console.time('time elapsed');
function between(min, max) {  
  return (
    Math.random() * (max - min + 1) + min
  )
}

function done() {
  fits = true;
  a = Math.round(a * (accuracy*10)) / (accuracy*10);
  b = Math.round(b * (accuracy*10)) / (accuracy*10);
  h = Math.round(h * (accuracy*10)) / (accuracy*10);
  k = Math.round(k * (accuracy*10)) / (accuracy*10);
  console.log('\n\ndonee; hit found at: \na = ' + a+'\nb = '+b+'\nh = '+h+'\nk = '+k+'\ncycles: '+cycles+'\nlevel 3 cycles: '+cycles3+'\naccuracy to the: '+accuracy+'th');
  console.timeEnd('time elapsed')
}
  console.log ('workin...')
while (!fits) {
  cycles += 1;
  x = x1;
  val = a*(Math.cbrt(b*x-h)) + k;
  if (((Math.floor(val*accuracy))/accuracy) == y1) {
    x = x2;
    val2 = a*(Math.cbrt(b*x-h)) + k;
    if (((Math.floor(val2*accuracy))/accuracy) == y2) {
      x = x3;
      val3 = a*(Math.cbrt(b*x-h)) + k;
      console.log('final segment; val3 = '+val3)
      cycles3 += 1;
      if (((Math.floor(val3*accuracy))/accuracy) == y3) {
        done()
      }
    }
  } 
  if (!fits) {
    a = between(rA,rAv2)
    b = between(rB,rBv2)
    h = between(rH,rHv2)
    k = between(rK,rKv2)
  }
}