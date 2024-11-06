

function calculateZ(x, y) {
    if (x === 0 || y === 0) {
        return "Знаменатель не может быть равен нулю";
    }
    
    let z = 1 / (x * y);
    return z;
}

function calculate() {
    var x = parseInt(document.getElementById("X").value);
    var y = parseInt(document.getElementById("Y").value);
    
    let result = calculateZ(x, y);
    document.getElementById("result").innerHTML = "Результат вычисления: " + result;
}
const elementA = document.getElementById("X");
const elementB = document.getElementById("Y");


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)