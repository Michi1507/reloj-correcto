function Pantalla () {
    basic.showString("Hello!")
    basic.showIcon(IconNames.Heart)
}
let horas = 0
let minutos = 0
let segundos = 0
basic.forever(function () {
    if (segundos < 59) {
        segundos += 1
    }
})
