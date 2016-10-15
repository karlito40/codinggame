/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
function degToRad(deg) {
 return (deg*Math.PI)/180;   
}
var LON = readline();
var radLon = degToRad(parseFloat(LON.replace(',', '.')))
var LAT = readline();
var radLat = degToRad(parseFloat(LAT.replace(',', '.')))

var N = parseInt(readline());
var result = null;
var response = '';
for (var i = 0; i < N; i++) {
    var DEFIB = readline();
    
    var info = DEFIB.split(';')
    var name = info[1];
    var defibLon = parseFloat(info[info.length-2].replace(',', '.'));
    var defibLat = parseFloat(info[info.length-1].replace(',', '.'));
    
    var radDefibLon = degToRad(defibLon);
    var radDefibLat = degToRad(defibLat);
    
    var x = (radDefibLon - radLon) * Math.cos((radLat + radDefibLat)/2);
    var y = radDefibLat - radLat;
    var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y,2)) * 6371;
    
    if(result > dist || result == null) {
        result = dist;    
        response = name;
    }
    
}

print(response);