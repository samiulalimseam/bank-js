const totalBalance = document.getElementById('total-balance');
    var balance = parseFloat(totalBalance.innerText) ;



const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);
    console.log(depositAmount);
    const depositTotalElem = document.getElementById('total-deposit');
    const depositTotal = depositTotalElem.innerText;
    if(depositAmount > 0) {
        depositTotalElem.innerText =  parseFloat(depositAmount)  + parseFloat(depositTotal);
    console.log(parseFloat(depositAmount)); 
     balance = balance + depositAmount;
     totalBalance.innerText = balance;
     console.log(typeof(balance))
    } 
    else {
        alert('Please Enter a Valid Amount');
    }
    
});

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);
    console.log(withdrawAmount);
    const withdrawTotalElem = document.getElementById('total-withdraw');
    const withdrawTotal = withdrawTotalElem.innerText;
    if(withdrawAmount >0) {
        if((balance -withdrawAmount) >0 ) {
            withdrawTotalElem.innerText =  parseFloat(withdrawAmount)  + parseFloat(withdrawTotal);
    console.log(parseFloat(withdrawAmount)); 

    
     balance = balance - withdrawAmount;
     totalBalance.innerText = balance;
        } else if(balance - withdrawAmount ==0){
            alert('Balance is too low');
        }
        else {
            alert('Withdraw amount exceeds balance');
            window.location = '#popup-modal';
        }
        
    } 
    else {
        alert('Please Enter a Valid Amount');
    }
    
});





