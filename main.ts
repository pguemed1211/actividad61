basic.showString("hola")
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
}
basic.clearScreen()
basic.showString("Adiós")
