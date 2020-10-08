const from_CurrencyEL =document.getElementById('from_currency');
const from_amountEL =document.getElementById('from_amount');
const to_currencyEL =document.getElementById('to_currency');
const to_amountEL =document.getElementById('to_amount');
const rateEL = document.getElementById('rate');
const exchange = document.getElementById('exchange');
// add listeners to the html tags
from_CurrencyEL.addEventListener('change',calculate);
from_amountEL.addEventListener('input',calculate);
to_currencyEL.addEventListener('change',calculate);
to_amountEL.addEventListener('input',calculate);

//

/* exchange.addEventListener('click',()=>{
    const temp = from_CurrencyEL.value;
    from_CurrencyEL.vlue = to_currencyEL.value;
    to_currencyEL.value = temp;
    calculate();
});
 */
function calculate(){
    const from_currency = from_CurrencyEL.value;
    const to_currency = to_currencyEL.value;
    fetch('http://data.fixer.io/api/latest?access_key=b98473a70bce8376d143624250de985e&format=1& symbols =' + from_currency + ',' + to_currency  )
    .then(res => res.json())
    .then(res=>{
        const rate = res.rate[to_currency];
        rateEL.innerText= `1${from_currency} =${rate} ${to_currency}`;
        to_amountEL.value=(from_amountEL.value* rate)*toFixed(2);
    })
}

