function remove() {
    document.getElementById("answer").value = "";
}

function dis(value) {
    document.getElementById("answer").value += value;
}

function cal() {
    var a = document.getElementById("answer").value;
    var b = eval(a);
    document.getElementById("answer").value = b;
}

function backspace() {
    answer.value = answer.value.substring(0, answer.value.length - 1);
}
