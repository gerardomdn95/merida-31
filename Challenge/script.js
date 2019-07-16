let oracion = "Anita lava la tina";
function palindrome(oracion) {
    oracion = oracion.toLowerCase().replace(/\s/g, '');
    let alreves = oracion.split('').reverse().join('');
    console.log(alreves);
    console.log(oracion);
    if (oracion === alreves) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome(oracion));