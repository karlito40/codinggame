/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var map = {};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0]; // file extension
    var MT = inputs[1]; // MIME type.
    
    map[EXT.toLowerCase()] = MT;
}

for (var i = 0; i < Q; i++) {
    var base = FNAME = readline(); // One file name per line.
    
    var startAt = FNAME.lastIndexOf('.')+1;
    var currentExt = FNAME.substring(startAt, FNAME.length).toLowerCase();
    
    if(startAt && map[currentExt]) {
        print(map[currentExt]);
    } else {
        print('UNKNOWN');
    }
}
