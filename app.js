// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
console.log(fromEuroToDollar(20))

// declaramos una funcion con el mismo nombre "formDollarToYen"
const fromDollarToYen = function (valueInDollar) {
    // convertimos el valor a dolares
    let valueInYen = (valueInDollar / 1.2) * 127.9;
    // retornamos el valor
    return valueInYen;
}
console.log(fromDollarToYen(20))

// declaramos una funcion con el mismo nombre "formYenToPound"
const fromYenToPound = function (valueInYen) {
    // convertimos el valor a dolares
    let valueInPound = (valueInYen / 1.2) * 0.8;
    // retornamos el valor
    return valueInPound;
}
console.log(fromYenToPound(20))


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar }