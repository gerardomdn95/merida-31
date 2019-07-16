// Este ejercicio convierte un número décimal a binario

function decimalToBinary(a) {
    let binary = []
    while (a > 0) {
        if (a % 2 == 0) {
            binary.push("0")
            a = a / 2
        } else {
            binary.push("1")
            a = a / 2

            a = Math.trunc(a)
        }
    }
    binary.reverse()
    return binary.join("")
}