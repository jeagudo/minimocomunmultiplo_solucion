radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber % bus1 == 0) {
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
    } else {
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.unplot(3, 0)
    }
    if (receivedNumber % bus2 == 0) {
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
    } else {
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(3, 2)
    }
    if (receivedNumber % bus3 == 0) {
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
    } else {
        led.unplot(1, 4)
        led.unplot(2, 4)
        led.unplot(3, 4)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(minutos)
    radio.sendNumber(minutos)
    minutos += 1
})
input.onButtonPressed(Button.B, function () {
    minutos = 1
    basic.clearScreen()
})
let bus3 = 0
let bus2 = 0
let bus1 = 0
let minutos = 0
radio.setGroup(1)
minutos = 1
bus1 = 2
bus2 = 5
bus3 = 10
