const INITIAL_VALUE = { id: 42 };
__THE_GLOBAL__ = INITIAL_VALUE;

function showCurrentValue() {
    document.getElementById('current').innerHTML =
        JSON.stringify(__THE_GLOBAL__);
}

function updateTheGlobal(update) {
    return () => {
        update();
        showCurrentValue();
    };
}

function setTheGlobalToString() {
    __THE_GLOBAL__ = 'forty-two';
}

function setTheGlobalToNumber() {
    __THE_GLOBAL__ = 42;
}

function setTheGlobalToObject() {
    __THE_GLOBAL__ = { fail: 'loooooooool'};
}

function resetTheGlobal() {
    __THE_GLOBAL__ = INITIAL_VALUE;
}

(function() {
    updateTheGlobal(resetTheGlobal)();
    document.getElementById('string')
        .addEventListener('click', updateTheGlobal(setTheGlobalToString));
    document.getElementById('number')
        .addEventListener('click', updateTheGlobal(setTheGlobalToNumber));
    document.getElementById('object')
        .addEventListener('click', updateTheGlobal(setTheGlobalToObject));
    document.getElementById('reset')
        .addEventListener('click', updateTheGlobal(resetTheGlobal));
})();