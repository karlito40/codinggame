// Read inputs from Standard Input (use readline()).
// Write outputs to Standard Output (use print()).

function charToBinary(letter, nbBitMin)
{
    var bin = letter.charCodeAt(0).toString(2);
    
    if(bin.length < nbBitMin)
    {
        var nbLeft = nbBitMin - bin.length;
        var padding = new Array(nbLeft+1);
        bin = padding.join('0') + bin;
        
    }
    
    return bin;
}

function getMask(bit)
{
    return (bit == "1") ? "0" : "00"; 
}

function chuckBitch(bits, builder)
{ 
    if(!builder) builder = '';
    
    builder += getMask(bits[0]) + " ";
    
    var encounterChar = (bits[0] == "1") ? "0" : "1";
    var seekEncounter = bits.indexOf(encounterChar);
    if(seekEncounter == -1) seekEncounter = bits.length;
    
    var currentBloc = bits.substring(0, seekEncounter);
    var t = new Array(currentBloc.length+1);
    
    builder += t.join("0");
    
    var nextBits = bits.substring(seekEncounter, bits.length);
    if(!nextBits.length) return builder;
    
    return chuckBitch(nextBits, builder + ' ');
   
       
}

var text = readline();

var chucks = [];
var bins = [];
text.split('').forEach(function(letter){
    var bin = charToBinary(letter, 7);
    bins.push(bin);
});

var all =  bins.join('');
print(chuckBitch(all))
