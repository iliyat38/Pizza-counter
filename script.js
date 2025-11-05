const increasebuttonEl = document.querySelector('.counter_button--increase');
const decreasebuttonEl = document.querySelector('.counter_button--decrease');
const counterValueEl = document.querySelector('.counter_value');
const resetButtonEl = document.querySelector('.counter_reset-button');
const counterEL = document.querySelector('.counter');
const titleEl = document.querySelector('.counter_title');

function incrementCounter() {
    //get current value of counter
    const currentValue = counterValueEl.textContent;

    //Convert To Number
    const currentValueAsNumber = +currentValue;
    //Calculate New Value
    let newValue = currentValueAsNumber + 1;
    if (newValue > 5) {
        newValue = 5;
        counterEL.classList.add('counter-limit');
        titleEl.textContent = 'Limit ! Buy pro for > 5';
    }

    counterValueEl.textContent = newValue;
}
function decreaseCounter() {
    //get current value of counter
    const currentValue = counterValueEl.textContent;

    //Convert To Number
    const currentValueAsNumber = +currentValue;
    //Calculate New Value
    let newValue = currentValueAsNumber - 1;

    if (newValue < 0) {
        newValue = 0;
    }
    counterEL.classList.remove('counter-limit');
    titleEl.textContent = 'Pizza Counter';
    counterValueEl.textContent = newValue;
}

increasebuttonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);
decreasebuttonEl.addEventListener('click', decreaseCounter);

resetButtonEl.addEventListener('click', function () {
    counterValueEl.textContent = 0;
    counterEL.classList.remove('counter-limit');
    titleEl.textContent = 'Pizza Counter';
});

