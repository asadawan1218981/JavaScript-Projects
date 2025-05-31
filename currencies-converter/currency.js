const exchangRates = {"USD": 281.51,"EUR": 316.26, "GBP": 378.26, "JPY": 1.94};

function convertCurrency(amountInUsd,targetCurrency){
    let convertedAmount ;

    switch(targetCurrency){
        case 'EUR':
        convertedAmount = amountInUsd * exchangRates.EUR;
        break;
        case 'USD':
        convertedAmount = amountInUsd * exchangRates.USD;
        break;
        case 'JPY':
        convertedAmount = amountInUsd * exchangRates.JPY;
        break;
        case 'GBP':
        convertedAmount = amountInUsd * exchangRates.GBP;
        break;
        default : 
        return "invalid currency";
    }
    return convertedAmount;
}
let amountInUSD = 100;
let targetCurrency = 'EUR';
let result = convertCurrency(amountInUSD, targetCurrency);

console.log(`${amountInUSD} USD is equal to ${result} ${targetCurrency}`);


