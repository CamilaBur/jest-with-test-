// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) { // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}




const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3))

module.exports = {
    sum,
    fromEuroToDollar
};
fromEuroToDollar();


// const usd = 1.2;
// const yen = 127.9;
// const pound = 0.8;
// const euro = 1;
// let fromEuroToDollar = (euro) => euro * dolar;
// let fromDollarToYen = (dolar) => dolar * yen;
// let fromYenToPound = (yeni) => (pound * (euro / yen)) * yeni;
// let pvalor = 0.8 / 127.9;