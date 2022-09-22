const PI = 3.14159

function exercise1() {
    let num = document.getElementById("ex1Num").value;
    console.log(typeof num);
    document.getElementById("ex1Result").innerHTML = square(num);
}

function exercise2() {
    let radius = document.getElementById("ex2Num").value;
    document.getElementById("ex2Result").innerHTML = "Perimeter: " + perimeterCircle(radius) + "<br>Area: " + areaCircle(radius);
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

function factorial(x) {
    if (x === 1) {
        return 1;
    }
    return x * factorial(x - 1)
}

function exercise4() {
    let str = document.getElementById("ex4Num").value;
    let arr = str.split("");
    if (checkCharacter(arr) && str !== "") {
        document.getElementById("ex4Result").innerHTML = "This string " + str + " is a number";
    } else {
        document.getElementById("ex4Result").innerHTML = "This string " + str + " is not a number";
    }
}

function checkCharacter(arr) {
    let NUMBER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        if (NUMBER.indexOf(+(arr[i])) === -1 && arr[i] !== '-') {
            return false;
        }
    }
    return true;
}

function exercise5() {
    let a = +(document.getElementById("ex5Num1").value);
    let b = +(document.getElementById("ex5Num2").value);
    let c = +(document.getElementById("ex5Num3").value);
    document.getElementById("ex5Result").innerHTML = "Min is: " + checkMin(checkMin(a, b), c);
}

function checkMin(x, y) {
    let min = x;
    if (min > y) {
        min = y;
    }
    return min;
}

function exercise6() {
    let a = +(document.getElementById("ex6Num").value);
    if (checkLarger0(a)) {
        document.getElementById("ex6Result").innerHTML = "This number " + a + " is larger than 0";
    } else {
        document.getElementById("ex6Result").innerHTML = "This number " + a + " is not larger than 0";
    }
}

function checkLarger0(x) {
    return (x > 0);
}

function exercise7() {
    let a = +(document.getElementById("ex7Num").value);
    document.getElementById("ex7Result").innerHTML = "Reverse of number is " + reverse(a);
}

function reverse(x) {
    if (x < 10) {
        return x;
    } else {
        let num1 = x % 10;
        let num2 = (x - num1) / 10;
        x = num1 * 10 + num2;
        return x;
    }
}

function exercise8() {
    let str = document.getElementById("ex8Num").value;
    let arr = str.split("");
    document.getElementById("ex8Result").innerHTML = "Reverse of array: " + reverseArray(arr).join("");
}

function reverseArray(arr) {
    for (let i = 0; i < arr.length - 1 - i; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

function exercise9() {
    let str = document.getElementById("ex9Str").value;
    let arr = str.split("");
    let character = document.getElementById("ex9Find").value;
    document.getElementById("ex9Result").innerHTML = "There are " + findCount(arr, character) + " character '" + character + "'"
}

function findCount(arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            count++;
        }
    }
    return count;
}