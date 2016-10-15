/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways

var graph = {};
for(var i=0; i < N; i++) {
    graph[i] = [];
}
var nodes = {};
for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);
    
    graph[N1].push(N2);
    graph[N2].push(N1);
    
}

var gateways = [];
for (var i = 0; i < E; i++) {
    var EI = parseInt(readline()); // the index of a gateway node
    gateways.push(EI);
}

// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
    
    var neighs = graph[SI];
    
    var action = 'wait';
    for(n in neighs) {
        var value = neighs[n];
        
        if(gateways.indexOf(value) != -1){
            action = SI + ' '  + value;
            break;
        }
    }

    print(action); // Example: 0 1 are the indices of the nodes you wish to sever the link between
}