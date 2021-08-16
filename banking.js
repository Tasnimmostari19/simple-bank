//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount);

    //update deposit balance
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const newBalance = parseFloat(previousBalance) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalance;
    //clear the deposit input field
    depositInput.value = '';
});

//handle withdraw handler
document.getElementById('widthdraw-button').addEventListener('click', function () {
    //get the amount withdraw
    const withdrawInput = document.getElementById('widthdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    //update withdraw balance
    const widthdrawTotal = document.getElementById('widthdraw-total');
    const previousWidthdrawAmount = widthdrawTotal.innerText;
    const newWidthdrawTotal = parseFloat(previousWidthdrawAmount) + parseFloat(newWithdrawAmount);
    widthdrawTotal.innerText = newWidthdrawTotal;


    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const newBalance = parseFloat(previousBalance) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalance;
    //clear the withdraw Input field
    withdrawInput.value = '';
});