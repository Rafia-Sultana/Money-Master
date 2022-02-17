document.getElementById('calculate-button').addEventListener('click', function () {
    const foodAmount = parseFloat(document.getElementById('user-food').value);
    const rentAmount = parseFloat(document.getElementById('user-rent').value);
    const clothsAmount = parseFloat(document.getElementById('user-cloth').value);
    const sum = (foodAmount + rentAmount + clothsAmount);
    const floatSum = parseFloat(sum);
    //console.log(floatSum);
    //total-expanse
    const expense = document.getElementById('total-expense');
    const floatExpanse = parseFloat(expense.innerText);
    const totalExpanse = floatExpanse + floatSum;
    expense.innerText = totalExpanse;


    //balance
    const balanceValue = document.getElementById('total-balance');
    const floatBalanceValue = parseFloat(balanceValue.innerText);
    //income
    const userIncome = document.getElementById('user-income');
    const floatUserIncome = parseFloat(userIncome.value);
    //get update balance
    const updateBalance = (floatUserIncome - totalExpanse) + floatBalanceValue;
    balanceValue.innerText = updateBalance;



    document.getElementById('user-food').value = '';
    document.getElementById('user-rent').value = '';
    document.getElementById('user-cloth').value = '';


});






//saving
document.getElementById('save-button').addEventListener('click', function () {
    //save 20
    const saveAmount = document.getElementById('user-saving');
    const floatSaveAmount = parseFloat(saveAmount.value);
    //income
    const userIncome = document.getElementById('user-income');
    const floatUserIncome = parseFloat(userIncome.value);
    const totalSavings = floatUserIncome * (floatSaveAmount / 100);

    const textSaving = document.getElementById('saving-amount');
    const floatSaving = parseFloat(textSaving.innerText);

    const sumOfPreviousNow = floatSaving + totalSavings;

    textSaving.innerText = sumOfPreviousNow;


    //remaining balance
    //balance
    const balanceValue = document.getElementById('total-balance');
    const floatBalanceValue = parseFloat(balanceValue.innerText);

    //remaining balance

    const remainingBalance = document.getElementById('remaining-balance');
    const floatRemainingBalance = parseFloat(remainingBalance.innerText);


    //update ramining  balance
    const updateRemainingBalance = floatBalanceValue - sumOfPreviousNow;
    remainingBalance.innerText = updateRemainingBalance + floatRemainingBalance;
    saveAmount.value = '';
    userIncome.value = '';


});
