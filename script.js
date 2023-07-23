const currency_1 = document.getElementById('currency-one');
const amount_1 = document.getElementById('amount-one');
const currency_2 = document.getElementById('currency-two');
const amount_2 = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');


//A function that feches the exchange rate and update the DOM
function exchange() {
    const currencyOne = currency_1.value;
    const currencyTwo = currency_2.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
       // console.log(data);
            
            const newRate = data.rates[currencyTwo];
            rate.innerHTML = `1 ${currencyOne} = ${newRate} ${currencyTwo}`;

            amount_2.value = (amount_1.value * newRate).toFixed(2);
    })
}

//Added event listeners to my DOM elements
currency_1.addEventListener('change', exchange);
amount_1.addEventListener('input', exchange);
currency_2.addEventListener('change', exchange);
amount_2.addEventListener('input', exchange);

swap.addEventListener('click', () => {
    const temp = currency_1.value;
    currency_1.value = currency_2.value;
    currency_2.value = temp;
    exchange();
})

exchange();