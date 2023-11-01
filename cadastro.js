let raceNumber = Math.floor(Math.random() * 1000)

let registroCedo = true
let idade = 18


if (registroCedo == true && idade > 18) {
    raceNumber = raceNumber + 1000
}

if (registroCedo == true && idade > 18) {
    console.log(`Corredor número: ${raceNumber} correrá as 09:30`)
} else if (registroCedo == false && idade > 18) {
    console.log(`Corredor número: ${raceNumber} correrá as 11:00`)
} else if (idade < 18) {
    console.log(`Corredor número: ${raceNumber} correrá as 12:30`)
} else {
    console.log(`vá até a mesa`)
}
