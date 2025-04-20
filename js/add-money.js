
document.getElementById('btn-add-money').addEventListener('click', function(event){
  event.preventDefault();
 
  const addMoneyInput = document.getElementById('input-add-money').value;
  const addMoneyPin = document.getElementById('input-add-pin').value;
  console.log(addMoneyInput, addMoneyPin);

  // pin verify

  if(addMoneyPin === '1234'){
    console.log('money is add your account')

    const balance = document.getElementById('total-balance').innerText;
    console.log(balance)

    const addMoneyParseFloat = parseFloat(addMoneyInput);
    const addBalanceParseFloat =parseFloat(balance);
    const newTotalMoney = addMoneyParseFloat + addBalanceParseFloat;
    console.log(newTotalMoney)

    // update total
    document.getElementById('total-balance').innerText=newTotalMoney;
    }
  else{
    alert('failed to your add money! Please try to again');
  }
})

// //  6 account update
document.getElementById('balance').innerText=newBalance;
