function copy(){
    var operand1 = document.getElementById("text").value;
    document.getElementById("copyplace").value = operand1;
}

function Sum(){
    var int1 = document.getElementById("inp1").value;
    var int2 = document.getElementById("inp2").value;

    var num2 = parseInt(int1, 10);
    var num1 = parseInt(int2, 10);

    var result = num1 + num2;

    document.getElementById("text").value = num1 + " + " + num2 + " = " + result;
}

function Mul(){
    var int3 = parseInt(document.getElementById("inp1").value);
    var int4 = parseInt(document.getElementById("inp2").value);

    var product = int3*int4;
    document.getElementById("text").value = int4 + " x " + int3 + " = " + product;
}

function Div(){
    var int5 = parseInt(document.getElementById("inp1").value);
    var int6 = parseInt(document.getElementById("inp2").value);

    var division = int6/int5;
    document.getElementById("text").value = int6 + " / " + int5 + " = " + division;
}

function Clear(){
    var empty = " ";
    document.getElementById("text").value = empty;
    document.getElementById("inp1").value = empty;
    document.getElementById("inp2").value = empty;
}
