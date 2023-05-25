var disp = document.getElementById('display')

function getValue(num) {
    disp.value += num
}

function calculation() {
    disp.value = eval(disp.value)
}

function clearAll() {
disp.value = ""
}