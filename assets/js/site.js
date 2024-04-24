function Calculate() {

    const Beløb = document.getElementById('Beløb').value
    const Currency = document.getElementById('Currency').value
    
    let Conversion
    if (Currency === "USD") {
        Conversion = Beløb / 6.97
    }
        else if (Currency === "Euro") {
        Conversion = Beløb / 7.46
        }

    let Kurs
    if (Currency === 'USD') {
        Kurs = 'USD'
    }
        else if (Currency === 'Euro') {
            Kurs = 'Euro'
        }

    document.getElementById('Result').innerHTML = `${Conversion.toFixed(2)}` + ` ${Kurs}`
}