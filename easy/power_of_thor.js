/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

function compareInt(x1, x2)
{
    if(x1 == x2) return 0;
    return (x1 > x2) ? 1 : -1;
}

var inputs = readline().split(' ');
var LX = parseInt(inputs[0]); // the X position of the light of power
var LY = parseInt(inputs[1]); // the Y position of the light of power
var TX = parseInt(inputs[2]); // Thor's starting X position
var TY = parseInt(inputs[3]); // Thor's starting Y position

var map = {
    width: 40,
    height: 18
};

var light = {
    x: LX,
    y: LY
};

var thor = {
    x: TX,
    y: TY
};

// [y|x] = card
var dirs = {};

// North bitch.
dirs['-1|-1'] = 'NW';         
dirs['-1|0'] = 'N';         
dirs['-1|1'] = 'NE';         

// Center bitch.
dirs['0|-1'] = 'W';         
dirs['0|1'] = 'E';

// South bitch.
dirs['1|-1'] = 'SW';         
dirs['1|0'] = 'S';
dirs['1|1'] = 'SE';

while (true) {
    var E = parseInt(readline()); // The level of Thor's remaining energy, representing the number of moves he can still make.
    
    var xDest = compareInt(light.x, thor.x);
    var yDest = compareInt(light.y, thor.y);
    
    thor.x += xDest;
    thor.y += yDest;
    
    var keyFormat = yDest + '|' + xDest;
    var cardi = dirs[keyFormat];
    
    print(cardi); 
}