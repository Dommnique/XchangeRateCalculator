const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');

function exchange() { 
    let currency_1 = currency_one.value;
    let currency_2 = currency_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_1}`)
        .then(res => res.json())
        .then(data => {
            const newRate = data.rates[currency_2]
            
            rate.innerHTML = `1 ${currency_1} = ${newRate} ${currency_2}`

            amount_two.value = (amount_one.value * `${newRate}`).toFixed(2);
        })
    
    
};


currency_one.addEventListener('change', exchange);
currency_two.addEventListener('change', exchange);
amount_one.addEventListener('input', exchange);
amount_two.addEventListener('input', exchange);

swap.addEventListener('click', function () {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp
    exchange();
})
exchange();