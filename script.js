function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = '69 Error Detected';
    }
    if (display.value == 69) {
        window.location.href = 'https://www.youtube.com/watch?v=ImvjZ7fUUBU';
    } else {
        display.value = eval(display.value);
    }
}

function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}