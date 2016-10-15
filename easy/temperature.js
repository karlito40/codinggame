/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526

var result = parseInt(temps[0], 10) || 0;

temps.forEach(function(temp){
    var value = parseInt(temp, 10);
    var valueAbs = Math.abs(value);
    
    if(valueAbs <= Math.abs(result) ) {
        if(valueAbs == Math.abs(result) && value != result) {
            result = valueAbs   
        } else {
            result = value;    
        }
        
    }
});

print(result);