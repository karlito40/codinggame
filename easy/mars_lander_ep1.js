/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var LAND_X = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
    var LAND_Y = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

// game loop
while (true) {
    var inputs = readline().split(' ');
    var X = parseInt(inputs[0]);
    var Y = parseInt(inputs[1]);
    var HS = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
    var VS = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
    var F = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
    var R = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
    var P = parseInt(inputs[6]); // the thrust power (0 to 4).

    if(VS > -40) {
        print('0 0')    
    } else {
        print("0 4");   
    }
}