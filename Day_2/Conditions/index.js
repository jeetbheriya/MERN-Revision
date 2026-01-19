const subscribe = document.getElementById('myCheckbox');
const visa = document.getElementById('visa');
const credit = document.getElementById('Credit');
const debit = document.getElementById('Debit');
const submit_btn = document.getElementById('submit-btn');
const sResult = document.getElementById('sub-result');
const oResult = document.getElementById('option-result');

submit_btn.onclick = () => {
    if(subscribe.checked){
        sResult.innerText = "You are a SUBSCRIBER of SniPify.";
    }else{
        sResult.innerText = "You are NOT a SUBSCRIBER of SniPify."; 
    }
    if(visa.checked){
        oResult.innerText = "You have selected Visa.";
    }
    if(credit.checked){
        oResult.innerText = "You have selected Credit.";
    }
    if(debit.checked){
        oResult.innerText = "You have selected Debit.";
    }
}
