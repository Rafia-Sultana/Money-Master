let balance = 0;
// function for getting id
function getInput(id) {
    let input = document.getElementById(id);
    let inputValue = input.value;
    let inputFloat = parseFloat(inputValue);
    // input.value = '';
    return inputFloat;

}

// event handler for calculate button

document.getElementById('calculate-button').addEventListener('click', function () {
    let income = getInput('user-income');
    let food = getInput('user-food');
    let rent = getInput('user-rent');
    let cloth = getInput('user-cloth');

    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloth)) {

        document.getElementById('number-error').style.display = 'block';
    }
    else if ((income <= 0) || (food < 0) || (rent < 0) || (cloth < 0)) {

        document.getElementById('negative-error').style.display = 'block';
    }
    else {
        let totalCost = food + rent + cloth;
        balance = income - totalCost;
        if (totalCost > income) {

            document.getElementById('income-error').style.display = 'block';

        }
        else {
            document.getElementById('total-expense').innerText = totalCost;
            document.getElementById('total-balance').innerText = balance;
            document.getElementById('income-error').style.display = 'none';
            document.getElementById('negative-error').style.display = 'none';
            document.getElementById('number-error').style.display = 'none';

        }
    }


});
// event handler for save button
document.getElementById('save-button').addEventListener('click', function () {
    let income = getInput('user-income');
    let save = getInput('user-saving');
    let saveAmount = (income * save) / 100;

    if (balance > saveAmount) {
        let remaining = balance - saveAmount;
        document.getElementById('saving-amount').innerText = saveAmount;
        document.getElementById('remaining-balance').innerText = remaining;
        document.getElementById('save-error').style.display = 'none';
    }
    else {
        document.getElementById('save-error').style.display = 'block';
    }

})