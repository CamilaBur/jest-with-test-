// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {
    sum
};

const usd = 1.2;
const yen = 127.9;
const pound = 0.8;
const euro = 1;

let fromEuroToDollar = (euro) => euro * dolar;

let fromDollarToYen = (dolar) => dolar * yen;

let fromYenToPound = (yeni) => (pound * (euro / yen)) * yeni;

let pvalor = 0.8 / 127.9;