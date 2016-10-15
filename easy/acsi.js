/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = parseInt(readline()); // letter width
var H = parseInt(readline()); // letter height
var T = readline();         // words

var template = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';
var templateLength = template.length;
var letters = T.split('');

for (var i = 0; i < H; i++) {
    var ROW = readline();
    
    var startAt = 0;
    var s = '';
    letters.forEach(function(letter){
        letter = (letter == '@') ? '?' : letter.toUpperCase();
        
        var startAt = template.indexOf(letter) * L;
        s += ROW.substr(startAt, L);
    });
    
    print(s);
    
}
