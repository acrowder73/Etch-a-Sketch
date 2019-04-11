var NumBlocks = 256;
var a = "";

window.onload=function(){
    
 for(var i=0; i<NumBlocks; i++){
        a += "<div class='grid' onmouseover='changeColor(this)'>&nbsp;</div>";
};
document.getElementById("grid").innerHTML= a;
};

function changeColor(gridblock){
    gridblock.style.backgroundColor="black";
}

document.getElementById("reset").onclick = function() {
    document.getElementById("grid").innerHTML = "";   
};

document.getElementById("create").onclick = function() {
    document.getElementById("grid").innerHTML = "";
    NumRows = prompt ("How many rows do you want");
    if (NumRows > 23) {
        alert("That's too many rows, 23 max, don't be greedy!")
        NumRows = 23;
    }
    document.getElementById("grid").style.gridTemplateRows = "repeat("+NumRows +",1fr)";
    document.getElementById("grid").style.gridTemplateColumns = "repeat("+NumRows +",1fr)";
    NumBlocks = NumRows * NumRows;
    a= "";

    for(var i=0; i<NumBlocks; i++){
        a += "<div class='grid' onmouseover='changeColor(this)'>&nbsp;</div>";
    };  
    document.getElementById("grid").innerHTML= a;
};
