/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var map = [];
for (var i = 0; i < N; i++) {
    var Pi = parseInt(readline());
    map.push(Pi);
}

map.sort();

var closer = "Bitch please.";
if(map.length)
{
    closer = map[0];
    var nextVal = null;
    var prevVal = null;
    map.forEach(function(val, index){
       nextVal = map[index+1];
       
       if(nextVal)
       {
            var calc = Math.abs(val - nextVal);
            printErr(calc);
            if(calc < closer) closer = calc;
       }
       else if(nextVal === 0 && val < closer)
       {
           closer = val;
       }
    });
}


print(closer);