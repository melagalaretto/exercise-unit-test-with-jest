test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})