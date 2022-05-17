function random(mor, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4)]
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4)]
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4)]
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4)]
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4)]
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4)]
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4)]
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4)]
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];
var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri',

}
var score = 0;
console.log("score= " + score);

function drawWorld() {
    var output = "";
    for (var row = 0; row < world.length; row++) {
        output += "<div class = 'row'>"
        for (var x = 0; x < world[row].lenght; x++) {
            output += "<div class = '" + worldDict[world[row][x]]:
        }
        output += "</div>"
    }

    document.getElementById('world').innerHTML = output;

}
drawWorld();

var ninjaman = {
    x: 1,
    y: 1,

}

function drawNinjaman() {
    
}