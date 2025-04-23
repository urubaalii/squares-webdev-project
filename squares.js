window.onload = function() {
    var numOfSquares = parseInt(Math.random() * 21) + 30;
    while (numOfSquares--) { //this was changed to a while loop from for loop (#3)
        addSquare();
    }

    document.getElementById("add").onclick = addSquare; //(#1)
    document.getElementById("colors").onclick = changeColors; //(#2)
}

function getRandomHexColor() {
    var possibleValues = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    var randomIndex = parseInt(Math.random() * possibleValues.length);  
    color += possibleValues[randomIndex];
    }
    return color;
}

//build the squares
function addSquare() {
    var squareArea = document.getElementById("squarearea");
   var square = document.createElement("div");
    square.className = "square";
    var randomSide = parseInt(Math.random() * 21) + 30;
    square.style.width = randomSide + "px";
    square.style.height = randomSide + "px";
    square.style.left = parseInt(Math.random() * (700 - randomSide)) + "px";
    square.style.top = parseInt(Math.random() * (300 - randomSide)) + "px";
    square.style.backgroundColor = getRandomHexColor();

    square.onclick = function() {
        if (squareArea.lastChild === square) {
            squareArea.removeChild(square); //removing the square from the squarearea
        } else {
            squareArea.appendChild(square); //bringing the square to the front
        }
    }

    //throw them on the page (append places them in the squareArea; appears on page)
    squareArea.appendChild(square);
}

//change the colors (#2)
function changeColors() {
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = getRandomHexColor();
    }
}
