radio.onReceivedNumber(function (receivedNumber) {
    segnale = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (segnale < -90) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (segnale < -80) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
let segnale = 0
radio.setGroup(1)
