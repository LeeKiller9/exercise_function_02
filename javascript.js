const PI = 3.14159

function exercise1() {
    let num = document.getElementById("ex1Num").value;
    console.log(typeof num);
    document.getElementById("ex1Result").innerHTML = square(num);
}

function exercise2() {
    let radius = document.getElementById("ex2Num").value;
    document.getElementById("ex2Result").innerHTML = "Perimeter: " + perimeterCircle(radius) +"<br>Area: " + areaCircle(radius);
}

function square(x) {
    return x * x;
}


function areaCircle(x) {
    return x * x * PI;
}

function perimeterCircle(x) {
    return 2 * x * PI;
}

function exercise3() {
    let num = document.getElementById("ex3Num").value;
    document.getElementById("ex3Result").innerHTML = factorial(num);
}

function factorial(x){
    if (x===1){
        return 1;
    }
    return x * factorial(x-1)
}

function exercise4(){

}